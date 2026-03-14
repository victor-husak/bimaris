import { notFound } from "next/navigation";

import { routing } from "@/i18n/routing";

import {
  getServiceBySlug,
  getServiceSlugs,
} from "@/api/strapi/queries/services";
import { getCommonData } from "@/api/strapi/queries/common";

import { ServicesItemDomain } from "@/domains/services-item";

import { generateSEO } from "@/utils/seo";

import type { Metadata } from "next";

interface ServicesItemPageProps {
  params: Promise<Params>;
}

export async function generateMetadata(
  props: ServicesItemPageProps,
): Promise<Metadata | undefined> {
  const params = await props.params;

  const res = await getServiceBySlug(params.slug);
  const service = res.data[0];

  if (!service) return undefined;

  return generateSEO({
    title: service.name,
    description: service.description,
    images: [`${process.env.NEXT_PUBLIC_STRAPI_URL}${service.mainImage.url}`],
    url: `/services/${params.slug}`,
    type: "article",
    publishedTime: service.createdAt,
    modifiedTime: service.updatedAt,
  });
}

export async function generateStaticParams() {
  const res = await getServiceSlugs();

  return routing.locales.flatMap((locale) =>
    res.data.map((item) => ({
      locale,
      slug: item.slug,
    })),
  );
}

export default async function ServicesItemPage(props: ServicesItemPageProps) {
  const params = await props.params;

  const [res, commonData] = await Promise.all([
    getServiceBySlug(params.slug),
    getCommonData(),
  ]);
  const service = res.data[0];

  if (!service) notFound();

  return <ServicesItemDomain data={service} commonData={commonData.data} />;
}

export const revalidate = 60;
export const dynamicParams = true;
