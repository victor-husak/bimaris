import { getCaseStudies } from "@/api/strapi/queries/case-studies";
import { getPublications } from "@/api/strapi/queries/publications";

import { HomeDomain } from "@/domains/home";

import { routing } from "@/i18n/routing";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({
    locale,
  }));
}

export default async function CaseStudiesPage() {
  const [caseStudies, publications] = await Promise.all([
    getCaseStudies({}),
    getPublications({
      filters: {
        category: "legal-alert",
      },
    }),
  ]);

  return (
    <HomeDomain
      caseStudies={caseStudies.data}
      publications={publications.data}
    />
  );
}
