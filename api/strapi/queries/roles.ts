"use server";

import qs from "qs";

import { strapiFetch } from "../fetch";

import type { Role, RoleShort } from "@/types/roles";

export async function getRoles({
  filters,
  pageSize = 6,
  locale = "en",
}: {
  filters?: SearchParams;
  pageSize?: number;
  locale?: string;
}) {
  const paramsQuery: any = {
    fields: ["id", "name", "title", "slug", "createdAt"],
    populate: {
      mainImage: true,
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

  return strapiFetch<StrapiCollection<RoleShort>>(`/role-types?${query}`, {
    next: { revalidate: 60, tags: ["roles"] },
  });
}

export async function getRoleBySlug({
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
    fields: ["id", "name", "title", "slug", "description", "createdAt"],
    populate: {
      mainImage: true,
      faqs: {
        fields: ["id", "title"],
        populate: {
          preview: true,
          items: true,
        },
      },
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

  return strapiFetch<StrapiCollection<Role>>(`/role-types?${query}`, {
    next: { revalidate: 60, tags: [`roles/${slug}`] },
  });
}

export async function getRoleSlugs() {
  const paramsQuery: any = {
    fields: ["slug", "updatedAt"],
    sort: ["createdAt:desc"],
    pagination: {
      pageSize: 1000,
    },
  };

  const query = qs.stringify(paramsQuery, { encode: false });

  return strapiFetch<StrapiCollection<{ slug: string; updatedAt: string }>>(
    `/role-types?${query}`,
    {
      next: { revalidate: 60, tags: ["role-slugs"] },
    },
  );
}
