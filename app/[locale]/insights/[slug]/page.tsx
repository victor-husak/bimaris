import { notFound } from "next/navigation";

import { routing } from "@/i18n/routing";

import {
  getPublicationBySlug,
  getPublicationSlugs,
} from "@/api/strapi/queries/publications";

import { InsightsItemDomain } from "@/domains/insights-item";

import { generateSEO } from "@/utils/seo";

import type { Metadata } from "next";

interface InsightsItemPageProps {
  params: Promise<Params>;
}

export async function generateMetadata(
  props: InsightsItemPageProps,
): Promise<Metadata | undefined> {
  const params = await props.params;

  const res = await getPublicationBySlug(params.slug);
  const publication = res.data[0];

  if (!publication) return undefined;

  return generateSEO({
    title: publication.name,
    description: publication.description,
    images: [`${process.env.NEXT_PUBLIC_STRAPI_URL}${publication.preview.url}`],
    url: `/insights/${params.slug}`,
    type: "article",
    publishedTime: publication.createdAt,
    modifiedTime: publication.updatedAt,
  });
}

export async function generateStaticParams() {
  const res = await getPublicationSlugs();

  return routing.locales.flatMap((locale) =>
    res.data.map((item) => ({
      locale,
      slug: item.slug,
    })),
  );
}

export default async function InsightsItemPage(props: InsightsItemPageProps) {
  const params = await props.params;

  const res = await getPublicationBySlug(params.slug);
  const publication = res.data[0];

  if (!publication) notFound();

  return <InsightsItemDomain data={publication} />;
}
