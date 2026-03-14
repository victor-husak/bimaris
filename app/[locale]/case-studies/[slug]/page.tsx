import { notFound } from "next/navigation";

import {
  getCaseStudyBySlug,
  getCaseStudySlugs,
} from "@/api/strapi/queries/case-studies";

import { InsightsItemDomain } from "@/domains/insights-item";

import { generateSEO } from "@/utils/seo";

import type { Metadata } from "next";

interface CaseStudiesItemPageProps {
  params: Promise<Params>;
}

export async function generateMetadata(
  props: CaseStudiesItemPageProps,
): Promise<Metadata | undefined> {
  const params = await props.params;

  const res = await getCaseStudyBySlug(params.slug);
  const caseStudy = res.data[0];

  if (!caseStudy) return undefined;

  return generateSEO({
    title: caseStudy.name,
    description: caseStudy.description,
    images: [`${process.env.NEXT_PUBLIC_STRAPI_URL}${caseStudy.preview.url}`],
    url: `/case-studies/${params.slug}`,
    type: "article",
    publishedTime: caseStudy.createdAt,
    modifiedTime: caseStudy.updatedAt,
  });
}

export async function generateStaticParams() {
  const res = await getCaseStudySlugs();

  return res.data.map((item) => ({
    slug: item.slug,
  }));
}

export default async function CaseStudiesItemPage(
  props: CaseStudiesItemPageProps,
) {
  const params = await props.params;

  const res = await getCaseStudyBySlug(params.slug);
  const caseStudy = res.data[0];

  if (!caseStudy) notFound();

  return <InsightsItemDomain data={caseStudy} />;
}
