"use server";

import qs from "qs";

import { strapiFetch } from "../fetch";

import type { Office } from "@/types/offices";

export async function getOffices({
  filters,
  pageSize = 6,
}: {
  filters?: SearchParams;
  pageSize?: number;
} = {}) {
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
  };

  if (filters) {
    paramsQuery.filters = {};
  }

  const query = qs.stringify(paramsQuery, { encode: false });

  return strapiFetch<StrapiCollection<Office>>(`/offices?${query}`, {
    next: { revalidate: 60, tags: ["offices"] },
  });
}
