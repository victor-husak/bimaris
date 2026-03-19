"use server";

import qs from "qs";

import { strapiFetch } from "../fetch";

import type { AboutUsPage } from "@/types/about-us-page";

export async function getAboutUsPage({
  filters,
  pageSize = 6,
  locale = "en",
}: {
  filters?: SearchParams;
  pageSize?: number;
  locale?: string;
}) {
  const paramsQuery: any = {
    fields: ["id"],
    populate: {
      advantages: {
        fields: ["id"],
        populate: {
          banner: true,
          items: {
            fields: ["id", "title", "description"],
          },
        },
      },
    },
    pagination: {
      pageSize,
    },
    locale,
  };

  if (filters) {
    paramsQuery.filters = {};
  }

  const query = qs.stringify(paramsQuery, { encode: false });

  return strapiFetch<StrapiSingle<AboutUsPage>>(`/about-us-page?${query}`, {
    next: { revalidate: 60, tags: ["about-us-page"] },
  });
}
