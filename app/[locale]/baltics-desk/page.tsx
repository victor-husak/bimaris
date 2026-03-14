import { getCommonData } from "@/api/strapi/queries/common";

import { BalticsDeskDomain } from "@/domains/baltics-desk";

// import { generateSEO } from "@/utils/seo";

// import type { Metadata } from "next";

interface BalticsDeskPageProps {
  searchParams?: Promise<SearchParams>;
}

// export async function generateMetadata(
//   props: BalticsDeskPageProps,
// ): Promise<Metadata> {
//   const params = props.searchParams ? await props.searchParams : {};

//   const hasParams = Object.keys(params).length > 0;

//   return generateSEO({
//     title: "Case Studies",
//     description:
//       "A curated selection of ideas, perspectives, and updates from our global design and technology practice.",
//     url: `/case-studies`,
//     robots: hasParams ? { index: false, follow: false } : undefined,
//   });
// }

export default async function BalticsDeskPage(props: BalticsDeskPageProps) {
  const commonData = await getCommonData();
  // const searchParams = await props.searchParams;

  // const [caseStudies, featuredCaseStudies] = await Promise.all([
  //   getCaseStudies({ filters: searchParams }),
  //   getCaseStudies({
  //     filters: {
  //       featured: true,
  //     },
  //   }),
  // ]);

  return (
    <BalticsDeskDomain
      commonData={commonData.data}
      // caseStudies={caseStudies}
      // featuredCaseStudies={featuredCaseStudies}
      // searchParams={searchParams}
    />
  );
}
