"use server";

import qs from "qs";

import { strapiFetch } from "../fetch";

import type { BalticsDeskPage } from "@/types/baltics-desk-page";

export async function getBalticsDeskPage({
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
      faqs: {
        fields: ["id", "title"],
        populate: {
          preview: true,
          items: true,
        },
      },
      information: {
        fields: ["id", "title", "description"],
        populate: {
          preview: true,
          action: true,
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

  return strapiFetch<StrapiSingle<BalticsDeskPage>>(
    `/baltics-desk-page?${query}`,
    {
      next: { revalidate: 60, tags: ["baltics-desk-page"] },
    },
  );
}
