import { getCaseStudies } from "@/api/strapi/queries/case-studies";

import { CaseStudiesDomain } from "@/domains/сase-studies";

import { generateSEO } from "@/utils/seo";

import type { Metadata } from "next";

interface CaseStudiesPageProps {
  searchParams?: Promise<SearchParams>;
}

export async function generateMetadata(
  props: CaseStudiesPageProps,
): Promise<Metadata> {
  const params = props.searchParams ? await props.searchParams : {};

  const hasParams = Object.keys(params).length > 0;

  return generateSEO({
    title: "Case Studies",
    description:
      "A curated selection of ideas, perspectives, and updates from our global design and technology practice.",
    url: `/case-studies`,
    robots: hasParams ? { index: false, follow: false } : undefined,
  });
}

export default async function CaseStudiesPage(props: CaseStudiesPageProps) {
  const searchParams = await props.searchParams;

  const [caseStudies, featuredCaseStudies] = await Promise.all([
    getCaseStudies({ filters: searchParams }),
    getCaseStudies({
      filters: {
        featured: true,
      },
    }),
  ]);

  return (
    <CaseStudiesDomain
      caseStudies={caseStudies}
      featuredCaseStudies={featuredCaseStudies}
      searchParams={searchParams}
    />
  );
}
