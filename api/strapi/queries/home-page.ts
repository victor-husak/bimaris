"use server";

import qs from "qs";

import { strapiFetch } from "../fetch";

import type { HomePage } from "@/types/home-page";

export async function getHomePage({
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

  return strapiFetch<StrapiSingle<HomePage>>(`/home-page?${query}`, {
    next: { revalidate: 60, tags: ["home-page"] },
  });
}
