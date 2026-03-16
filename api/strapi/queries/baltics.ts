"use server";

import qs from "qs";

import { strapiFetch } from "../fetch";

import type { Baltic, BalticShort } from "@/types/baltics";

export async function getBaltics({
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

  return strapiFetch<StrapiCollection<BalticShort>>(`/baltics?${query}`, {
    next: { revalidate: 60, tags: ["baltics"] },
  });
}

export async function getBalticBySlug({
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
    fields: ["id", "name", "description", "slug", "createdAt"],
    populate: {
      preview: true,
      services: {
        fields: ["id", "name", "description", "slug", "createdAt"],
        populate: {
          mainImage: true,
          items: true,
        },
      },
      case_studies: {
        fields: ["id", "name", "description", "slug", "createdAt"],
        populate: {
          preview: true,
        },
      },
    },
    pagination: {
      limit: 1,
    },
    locale,
  };

  const query = qs.stringify(paramsQuery, { encode: false });

  return strapiFetch<StrapiCollection<Baltic>>(`/baltics?${query}`, {
    next: { revalidate: 60, tags: [`baltics/${slug}`] },
  });
}

export async function getBalticSlugs() {
  const paramsQuery: any = {
    fields: ["slug", "updatedAt"],
    sort: ["createdAt:desc"],
    pagination: {
      pageSize: 1000,
    },
  };

  const query = qs.stringify(paramsQuery, { encode: false });

  return strapiFetch<StrapiCollection<{ slug: string; updatedAt: string }>>(
    `/baltics?${query}`,
    {
      next: { revalidate: 60, tags: ["baltics-slugs"] },
    },
  );
}
