import { getCaseStudies } from "@/api/strapi/queries/case-studies";

import { AboutUsDomain } from "@/domains/about-us";

import { routing } from "@/i18n/routing";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({
    locale,
  }));
}

export default async function AboutUsPage() {
  const [caseStudies] = await Promise.all([getCaseStudies({})]);

  return <AboutUsDomain caseStudies={caseStudies.data} />;
}
