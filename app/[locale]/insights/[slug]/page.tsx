import { notFound } from "next/navigation";

import { routing } from "@/i18n/routing";

import {
  getPublicationBySlug,
  getPublicationSlugs,
  getPublications,
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

  const res = await getPublicationBySlug({
    slug: params.slug,
    locale: params.locale,
  });
  const publication = res.data[0];

  if (!publication) return undefined;

  return generateSEO({
    title: publication.seo?.title || publication.name,
    description: publication.seo?.description || publication.description,
    images: [
      `${process.env.NEXT_PUBLIC_STRAPI_URL}${publication.seo?.preview?.url || publication.preview.url}`,
    ],
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

  const res = await getPublicationBySlug({
    slug: params.slug,
    locale: params.locale,
  });
  const publication = res.data[0];

  if (!publication) notFound();

  const relatedPublications = await getPublications({
    filters: {
      roles: publication.roles[0].slug,
      excludeIds: [`${publication.id}`],
    },
    locale: params.locale,
  });

  return (
    <InsightsItemDomain
      data={publication}
      relatedPublications={relatedPublications.data}
    />
  );
}
