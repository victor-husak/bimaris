import { getPublications } from "@/api/strapi/queries/publications";

import { InsightsDomain } from "@/domains/insights";

import { generateSEO } from "@/utils/seo";

import type { Metadata } from "next";

interface InsightsPageProps {
  searchParams?: Promise<SearchParams>;
}

export async function generateMetadata(
  props: InsightsPageProps,
): Promise<Metadata> {
  const params = props.searchParams ? await props.searchParams : {};

  const hasParams = Object.keys(params).length > 0;

  return generateSEO({
    title: "Insights",
    description:
      "A curated selection of ideas, perspectives, and updates from our global design and technology practice.",
    url: `/insights`,
    robots: hasParams ? { index: false, follow: false } : undefined,
  });
}

export default async function InsightsPage(props: InsightsPageProps) {
  const searchParams = await props.searchParams;

  const publications = await getPublications({ filters: searchParams });

  console.log("publications", JSON.stringify(publications));

  return (
    <InsightsDomain publications={publications} searchParams={searchParams} />
  );
}
