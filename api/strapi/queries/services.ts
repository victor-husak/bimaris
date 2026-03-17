"use server";

import qs from "qs";

import { strapiFetch } from "../fetch";

import type { Service, ServiceShort } from "@/types/services";

export async function getServices({
  filters,
  pageSize = 6,
  locale = "en",
}: {
  filters?: SearchParams;
  pageSize?: number;
  locale?: string;
}) {
  const paramsQuery: any = {
    fields: ["id", "name", "description", "slug", "createdAt"],
    populate: {
      mainImage: true,
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

  return strapiFetch<StrapiCollection<ServiceShort>>(`/services?${query}`, {
    next: { revalidate: 60, tags: ["services"] },
  });
}

export async function getServiceBySlug({
  slug,
  locale = "en",
}: {
  slug: string;
  locale?: string;
}) {
  const paramsQuery = {
    filters: {
      slug,
    },
    fields: ["id", "name", "description", "slug", "content", "createdAt"],
    populate: {
      mainImage: true,
    },
    pagination: {
      limit: 1,
    },
    locale,
  };

  const query = qs.stringify(paramsQuery, { encode: false });

  return strapiFetch<StrapiCollection<Service>>(`/services?${query}`, {
    next: { revalidate: 60, tags: [`services/${slug}`] },
  });
}

export async function getServiceSlugs() {
  const paramsQuery: any = {
    fields: ["slug", "updatedAt"],
    sort: ["createdAt:desc"],
    pagination: {
      pageSize: 1000,
    },
  };

  const query = qs.stringify(paramsQuery, { encode: false });

  return strapiFetch<StrapiCollection<{ slug: string; updatedAt: string }>>(
    `/services?${query}`,
    {
      next: { revalidate: 60, tags: ["service-slugs"] },
    },
  );
}
