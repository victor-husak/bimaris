"use server";

import qs from "qs";

import { strapiFetch } from "../fetch";

import type { Expert, ExpertShort } from "@/types/experts";

export async function getExperts({
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
      "name",
      "position",
      "linkedIn",
      "email",
      "slug",
      "createdAt",
    ],
    populate: {
      avatar: true,
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

  return strapiFetch<StrapiCollection<ExpertShort>>(`/experts?${query}`, {
    next: { revalidate: 60, tags: ["experts"] },
  });
}

export async function getExpertBySlug({
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
    fields: ["id", "name", "position", "slug", "content", "createdAt"],
    populate: {
      avatar: true,
      publications: {
        fields: [
          "id",
          "name",
          "description",
          "slug",
          "createdAt",
          "updatedAt",
          "date",
        ],
        populate: {
          preview: true,
          category: {
            fields: ["slug", "name"],
          },
        },
      },
    },
    pagination: {
      limit: 1,
    },
    locale,
  };

  const query = qs.stringify(paramsQuery, { encode: false });

  return strapiFetch<StrapiCollection<Expert>>(`/experts?${query}`, {
    next: { revalidate: 60, tags: [`experts/${slug}`] },
  });
}

export async function getExpertSlugs() {
  const paramsQuery: any = {
    fields: ["slug", "updatedAt"],
    sort: ["createdAt:desc"],
    pagination: {
      pageSize: 1000,
    },
  };

  const query = qs.stringify(paramsQuery, { encode: false });

  return strapiFetch<StrapiCollection<{ slug: string; updatedAt: string }>>(
    `/experts?${query}`,
    {
      next: { revalidate: 60, tags: ["expert-slugs"] },
    },
  );
}
