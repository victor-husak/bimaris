import { PublicationCard } from "@/cards/publication";

import { clsx } from "clsx";

import { ListLayout } from "@/layouts/list";

import type { CaseStudyShort } from "@/types/case-studies";

export type CaseStudiesDomainListProps = {
  className?: string;
  caseStudies: StrapiCollection<CaseStudyShort>;
};

export const CaseStudiesDomainList: React.FC<CaseStudiesDomainListProps> = (
  props,
): React.JSX.Element => {
  return (
    <ListLayout
      className={clsx(props.className, "")}
      title="All case studies"
      description="Explore our selected examples of immigration cases handled for individuals and businesses, demonstrating our structured approach and long-term legal support."
    >
      {props.caseStudies.data.map((item) => (
        <PublicationCard key={item.id} data={item} type="case-study" />
      ))}
    </ListLayout>
  );
};

// const items: StrapiCollection<PublicationShort> = {
//   data: [
//     {
//       id: 3,
//       name: "Relocating a European technology company to Ukraine",
//       description:
//         "How a mid-sized European tech company relocated key operations and management to Ukraine, navi...",
//       slug: "relocating-european-technology-company-to-ukraine",
//       createdAt: "2026-03-09T21:25:43.953Z",
//       preview: {
//         id: 1,
//         documentId: "nypo8zdlp1m2u55359rbkam5",
//         name: "insights-item.webp",
//         alternativeText: null,
//         caption: null,
//         width: 3978,
//         height: 1560,
//         formats: {
//           large: {
//             ext: ".webp",
//             url: "/uploads/large_insights_item_58651bf829.webp",
//             hash: "large_insights_item_58651bf829",
//             mime: "image/webp",
//             name: "large_insights-item.webp",
//             path: null,
//             size: 19.15,
//             width: 1000,
//             height: 392,
//             sizeInBytes: 19148,
//           },
//           medium: {
//             ext: ".webp",
//             url: "/uploads/medium_insights_item_58651bf829.webp",
//             hash: "medium_insights_item_58651bf829",
//             mime: "image/webp",
//             name: "medium_insights-item.webp",
//             path: null,
//             size: 10.61,
//             width: 750,
//             height: 294,
//             sizeInBytes: 10614,
//           },
//           thumbnail: {
//             ext: ".webp",
//             url: "/uploads/thumbnail_insights_item_58651bf829.webp",
//             hash: "thumbnail_insights_item_58651bf829",
//             mime: "image/webp",
//             name: "thumbnail_insights-item.webp",
//             path: null,
//             size: 1.73,
//             width: 245,
//             height: 96,
//             sizeInBytes: 1728,
//           },
//         },
//         hash: "insights_item_58651bf829",
//         ext: ".webp",
//         mime: "image/webp",
//         size: 194.93,
//         url: "/uploads/insights_item_58651bf829.webp",
//         previewUrl: null,
//         provider: "local",
//         provider_metadata: null,
//         createdAt: "2026-03-09T21:25:39.986Z",
//         updatedAt: "2026-03-09T21:25:39.986Z",
//         publishedAt: "2026-03-09T21:25:39.987Z",
//       },
//       category: {
//         slug: "insight",
//         name: "Insight",
//       },
//     },
//     {
//       id: 4,
//       name: "Relocating a European technology company to Ukraine",
//       description:
//         "How a mid-sized European tech company relocated key operations and management to Ukraine, navi...",
//       slug: "relocating-european-technology-company-to-ukraine",
//       createdAt: "2026-03-09T21:25:43.953Z",
//       preview: {
//         id: 1,
//         documentId: "nypo8zdlp1m2u55359rbkam5",
//         name: "insights-item.webp",
//         alternativeText: null,
//         caption: null,
//         width: 3978,
//         height: 1560,
//         formats: {
//           large: {
//             ext: ".webp",
//             url: "/uploads/large_insights_item_58651bf829.webp",
//             hash: "large_insights_item_58651bf829",
//             mime: "image/webp",
//             name: "large_insights-item.webp",
//             path: null,
//             size: 19.15,
//             width: 1000,
//             height: 392,
//             sizeInBytes: 19148,
//           },
//           medium: {
//             ext: ".webp",
//             url: "/uploads/medium_insights_item_58651bf829.webp",
//             hash: "medium_insights_item_58651bf829",
//             mime: "image/webp",
//             name: "medium_insights-item.webp",
//             path: null,
//             size: 10.61,
//             width: 750,
//             height: 294,
//             sizeInBytes: 10614,
//           },
//           thumbnail: {
//             ext: ".webp",
//             url: "/uploads/thumbnail_insights_item_58651bf829.webp",
//             hash: "thumbnail_insights_item_58651bf829",
//             mime: "image/webp",
//             name: "thumbnail_insights-item.webp",
//             path: null,
//             size: 1.73,
//             width: 245,
//             height: 96,
//             sizeInBytes: 1728,
//           },
//         },
//         hash: "insights_item_58651bf829",
//         ext: ".webp",
//         mime: "image/webp",
//         size: 194.93,
//         url: "/uploads/insights_item_58651bf829.webp",
//         previewUrl: null,
//         provider: "local",
//         provider_metadata: null,
//         createdAt: "2026-03-09T21:25:39.986Z",
//         updatedAt: "2026-03-09T21:25:39.986Z",
//         publishedAt: "2026-03-09T21:25:39.987Z",
//       },
//       category: {
//         slug: "insight",
//         name: "Insight",
//       },
//     },
//     {
//       id: 5,
//       name: "Relocating a European technology company to Ukraine",
//       description:
//         "How a mid-sized European tech company relocated key operations and management to Ukraine, navi...",
//       slug: "relocating-european-technology-company-to-ukraine",
//       createdAt: "2026-03-09T21:25:43.953Z",
//       preview: {
//         id: 1,
//         documentId: "nypo8zdlp1m2u55359rbkam5",
//         name: "insights-item.webp",
//         alternativeText: null,
//         caption: null,
//         width: 3978,
//         height: 1560,
//         formats: {
//           large: {
//             ext: ".webp",
//             url: "/uploads/large_insights_item_58651bf829.webp",
//             hash: "large_insights_item_58651bf829",
//             mime: "image/webp",
//             name: "large_insights-item.webp",
//             path: null,
//             size: 19.15,
//             width: 1000,
//             height: 392,
//             sizeInBytes: 19148,
//           },
//           medium: {
//             ext: ".webp",
//             url: "/uploads/medium_insights_item_58651bf829.webp",
//             hash: "medium_insights_item_58651bf829",
//             mime: "image/webp",
//             name: "medium_insights-item.webp",
//             path: null,
//             size: 10.61,
//             width: 750,
//             height: 294,
//             sizeInBytes: 10614,
//           },
//           thumbnail: {
//             ext: ".webp",
//             url: "/uploads/thumbnail_insights_item_58651bf829.webp",
//             hash: "thumbnail_insights_item_58651bf829",
//             mime: "image/webp",
//             name: "thumbnail_insights-item.webp",
//             path: null,
//             size: 1.73,
//             width: 245,
//             height: 96,
//             sizeInBytes: 1728,
//           },
//         },
//         hash: "insights_item_58651bf829",
//         ext: ".webp",
//         mime: "image/webp",
//         size: 194.93,
//         url: "/uploads/insights_item_58651bf829.webp",
//         previewUrl: null,
//         provider: "local",
//         provider_metadata: null,
//         createdAt: "2026-03-09T21:25:39.986Z",
//         updatedAt: "2026-03-09T21:25:39.986Z",
//         publishedAt: "2026-03-09T21:25:39.987Z",
//       },
//       category: {
//         slug: "insight",
//         name: "Insight",
//       },
//     },
//     {
//       id: 6,
//       name: "Relocating a European technology company to Ukraine",
//       description:
//         "How a mid-sized European tech company relocated key operations and management to Ukraine, navi...",
//       slug: "relocating-european-technology-company-to-ukraine",
//       createdAt: "2026-03-09T21:25:43.953Z",
//       preview: {
//         id: 1,
//         documentId: "nypo8zdlp1m2u55359rbkam5",
//         name: "insights-item.webp",
//         alternativeText: null,
//         caption: null,
//         width: 3978,
//         height: 1560,
//         formats: {
//           large: {
//             ext: ".webp",
//             url: "/uploads/large_insights_item_58651bf829.webp",
//             hash: "large_insights_item_58651bf829",
//             mime: "image/webp",
//             name: "large_insights-item.webp",
//             path: null,
//             size: 19.15,
//             width: 1000,
//             height: 392,
//             sizeInBytes: 19148,
//           },
//           medium: {
//             ext: ".webp",
//             url: "/uploads/medium_insights_item_58651bf829.webp",
//             hash: "medium_insights_item_58651bf829",
//             mime: "image/webp",
//             name: "medium_insights-item.webp",
//             path: null,
//             size: 10.61,
//             width: 750,
//             height: 294,
//             sizeInBytes: 10614,
//           },
//           thumbnail: {
//             ext: ".webp",
//             url: "/uploads/thumbnail_insights_item_58651bf829.webp",
//             hash: "thumbnail_insights_item_58651bf829",
//             mime: "image/webp",
//             name: "thumbnail_insights-item.webp",
//             path: null,
//             size: 1.73,
//             width: 245,
//             height: 96,
//             sizeInBytes: 1728,
//           },
//         },
//         hash: "insights_item_58651bf829",
//         ext: ".webp",
//         mime: "image/webp",
//         size: 194.93,
//         url: "/uploads/insights_item_58651bf829.webp",
//         previewUrl: null,
//         provider: "local",
//         provider_metadata: null,
//         createdAt: "2026-03-09T21:25:39.986Z",
//         updatedAt: "2026-03-09T21:25:39.986Z",
//         publishedAt: "2026-03-09T21:25:39.987Z",
//       },
//       category: {
//         slug: "insight",
//         name: "Insight",
//       },
//     },
//   ],
// };
