"use server";

import qs from "qs";

import { strapiFetch } from "../fetch";

import type { Client } from "@/types/clients";

export async function getClients({
  filters,
  pageSize = 6,
  locale = "en",
}: {
  filters?: SearchParams;
  pageSize?: number;
  locale?: string;
}) {
  const paramsQuery: any = {
    fields: ["id", "name", "description", "url"],
    populate: {
      logo: true,
    },
    pagination: {
      pageSize,
    },
    sort: ["sortOrder:desc"],

    locale,
  };

  if (filters) {
    paramsQuery.filters = {};
  }

  const query = qs.stringify(paramsQuery, { encode: false });

  return strapiFetch<StrapiCollection<Client>>(`/clients?${query}`, {
    next: { revalidate: 60, tags: ["clients"] },
  });
}
