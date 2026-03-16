import { getCaseStudies } from "@/api/strapi/queries/case-studies";

import { AboutUsDomain } from "@/domains/about-us";

import { routing } from "@/i18n/routing";

interface AboutUsPageProps {
  searchParams?: Promise<SearchParams>;
  params: Promise<Params>;
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({
    locale,
  }));
}

export default async function AboutUsPage(props: AboutUsPageProps) {
  const params = await props.params;

  const [caseStudies] = await Promise.all([
    getCaseStudies({ locale: params.locale }),
  ]);

  return <AboutUsDomain caseStudies={caseStudies.data} />;
}
