import { getCaseStudies } from "@/api/strapi/queries/case-studies";
import { getPublications } from "@/api/strapi/queries/publications";

import { HomeDomain } from "@/domains/home";

import { routing } from "@/i18n/routing";

interface HomePageProps {
  searchParams?: Promise<SearchParams>;
  params: Promise<Params>;
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({
    locale,
  }));
}

export default async function HomePage(props: HomePageProps) {
  const params = await props.params;

  const [caseStudies, publications] = await Promise.all([
    getCaseStudies({ locale: params.locale }),
    getPublications({
      filters: {
        category: "legal-alert",
      },
      locale: params.locale,
    }),
  ]);

  return (
    <HomeDomain
      caseStudies={caseStudies.data}
      publications={publications.data}
    />
  );
}
