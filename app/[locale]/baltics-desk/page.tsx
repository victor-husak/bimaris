import { getCommonData } from "@/api/strapi/queries/common";
import { getBaltics } from "@/api/strapi/queries/baltics";

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
  const [commonData, baltics] = await Promise.all([
    getCommonData(),
    getBaltics(),
  ]);
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
      baltics={baltics.data}
      // featuredCaseStudies={featuredCaseStudies}
      // searchParams={searchParams}
    />
  );
}
