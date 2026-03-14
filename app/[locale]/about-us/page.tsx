import { getCaseStudies } from "@/api/strapi/queries/case-studies";

import { AboutUsDomain } from "@/domains/about-us";

export default async function AboutUsPage() {
  const [caseStudies] = await Promise.all([getCaseStudies({})]);

  return <AboutUsDomain caseStudies={caseStudies.data} />;
}
