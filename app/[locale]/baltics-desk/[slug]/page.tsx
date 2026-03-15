import { notFound } from "next/navigation";

import { routing } from "@/i18n/routing";

import { getBalticBySlug, getBalticSlugs } from "@/api/strapi/queries/baltics";
import { getCommonData } from "@/api/strapi/queries/common";
import { getOffices } from "@/api/strapi/queries/offices";

import { BalticsDeskItemDomain } from "@/domains/baltics-desk-item";

import { generateSEO } from "@/utils/seo";

import type { Metadata } from "next";

interface BalticsDeskItemPageProps {
  params: Promise<Params>;
}

export async function generateMetadata(
  props: BalticsDeskItemPageProps,
): Promise<Metadata | undefined> {
  const params = await props.params;

  const res = await getBalticBySlug(params.slug);
  const baltic = res.data[0];

  if (!baltic) return undefined;

  return generateSEO({
    title: baltic.name,
    description: baltic.description,
    images: [`${process.env.NEXT_PUBLIC_STRAPI_URL}${baltic.preview.url}`],
    url: `/baltics-desk/${params.slug}`,
    type: "article",
    publishedTime: baltic.createdAt,
    modifiedTime: baltic.updatedAt,
  });
}

export async function generateStaticParams() {
  const res = await getBalticSlugs();

  return routing.locales.flatMap((locale) =>
    res.data.map((item) => ({
      locale,
      slug: item.slug,
    })),
  );
}

export default async function BalticsDeskItemPage(
  props: BalticsDeskItemPageProps,
) {
  const params = await props.params;

  const [res, commonData, offices] = await Promise.all([
    getBalticBySlug(params.slug),
    getCommonData(),
    getOffices(),
  ]);
  const baltic = res.data[0];

  if (!baltic) notFound();

  return (
    <BalticsDeskItemDomain
      data={baltic}
      commonData={commonData.data}
      offices={offices.data}
    />
  );
}
