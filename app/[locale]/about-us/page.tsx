import { getCaseStudies } from "@/api/strapi/queries/case-studies";
import { getAboutUsPage } from "@/api/strapi/queries/about-us-page";

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

  const [caseStudies, aboutUsPage] = await Promise.all([
    getCaseStudies({ locale: params.locale }),
    getAboutUsPage({ locale: params.locale }),
  ]);

  return (
    <AboutUsDomain
      caseStudies={caseStudies.data}
      aboutUsPage={aboutUsPage.data}
    />
  );
}
