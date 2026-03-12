// "use server";

// import qs from "qs";

// import { strapiFetch } from "../fetch";

// import type { Expertise, ExpertiseShort } from "@/types/expertise";
// import type { StrapiCollection } from "../types";

// export async function getExpertise() {
//   let paramsQuery = {
//     fields: ["id", "name", "slug"],
//     populate: {
//       preview: true,
//     },
//     pagination: {
//       pageSize: 6,
//     },
//     sort: "rank:asc",
//   };

//   const query = qs.stringify(paramsQuery, { encode: false });

//   return strapiFetch<StrapiCollection<ExpertiseShort>>(`/expertise?${query}`, {
//     next: { revalidate: 60, tags: ["expertise"] },
//   });
// }
