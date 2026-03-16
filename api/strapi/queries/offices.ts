"use server";

import qs from "qs";

import { strapiFetch } from "../fetch";

import type { Office } from "@/types/offices";

export async function getOffices({
  filters,
  pageSize = 6,
  locale = "en",
}: {
  filters?: SearchParams;
  pageSize?: number;
  locale?: string;
}) {
  const paramsQuery: any = {
    fields: [
      "id",
      "slug",
      "name",
      "city",
      "address",
      "email",
      "url",
      "isMain",
      "createdAt",
    ],
    populate: {
      preview: true,
    },
    pagination: {
      pageSize,
    },
    sort: ["createdAt:desc"],
    locale,
  };

  if (filters) {
    paramsQuery.filters = {};
  }

  const query = qs.stringify(paramsQuery, { encode: false });

  return strapiFetch<StrapiCollection<Office>>(`/offices?${query}`, {
    next: { revalidate: 60, tags: ["offices"] },
  });
}
