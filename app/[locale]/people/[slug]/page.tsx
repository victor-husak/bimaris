import { notFound } from "next/navigation";

import { routing } from "@/i18n/routing";

import { getExpertBySlug, getExpertSlugs } from "@/api/strapi/queries/experts";

import { PeopleDomain } from "@/domains/people";

import { generateSEO } from "@/utils/seo";

import type { Metadata } from "next";

interface PeoplePageProps {
  params: Promise<Params>;
}

export async function generateMetadata(
  props: PeoplePageProps,
): Promise<Metadata | undefined> {
  const params = await props.params;

  const res = await getExpertBySlug({
    slug: params.slug,
    locale: params.locale,
  });

  const expert = res.data[0];

  if (!expert) return undefined;

  return generateSEO({
    title: expert.name,
    description: expert.position,
    images: expert.avatar
      ? [`${process.env.NEXT_PUBLIC_STRAPI_URL}${expert.avatar.url}`]
      : [],
    url: `/people/${params.slug}`,
    type: "article",
    publishedTime: expert.createdAt,
    modifiedTime: expert.updatedAt,
  });
}

export async function generateStaticParams() {
  const res = await getExpertSlugs();

  return routing.locales.flatMap((locale) =>
    res.data.map((item) => ({
      locale,
      slug: item.slug,
    })),
  );
}

export default async function PeoplePage(props: PeoplePageProps) {
  const params = await props.params;

  const [res] = await Promise.all([
    getExpertBySlug({ slug: params.slug, locale: params.locale }),
  ]);

  const expert = res.data[0];

  if (!expert) notFound();

  return <PeopleDomain data={expert} />;
}
