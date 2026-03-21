"use server";

import qs from "qs";

import { getDateRange } from "@/utils/date";

import { strapiFetch } from "../fetch";

import type {
  Publication,
  PublicationCategory,
  PublicationShort,
} from "@/types/publication";

export async function getPublications({
  filters,
  locale = "en",
  pagination,
}: {
  filters?: SearchParams;
  pageSize?: number;
  locale?: string;
  pagination?: {
    page?: number;
    pageSize?: number;
  };
}) {
  const finalPagination = {
    page: pagination?.page ?? 1,
    pageSize: pagination?.pageSize ?? 6,
  };

  const paramsQuery: any = {
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
      country: {
        fields: ["slug", "name"],
      },
    },
    pagination: finalPagination,
    sort: ["createdAt:desc"],
    locale,
  };

  if (filters) {
    paramsQuery.filters = {};

    if (!!filters?.search) {
      paramsQuery.filters["$or"] = [
        {
          name: {
            $containsi: filters.search,
          },
        },
      ];
    }

    if (filters.excludeIds) {
      paramsQuery.filters.id = { $notIn: filters.excludeIds };
    }

    if (filters.roles) {
      paramsQuery.filters.roles = { slug: { $in: filters.roles } };
    }

    if (filters.category) {
      paramsQuery.filters.category = { slug: { $in: filters.category } };
    }

    if (filters.date) {
      const range = getDateRange(filters.date as string);

      if (range)
        paramsQuery.filters.createdAt = {
          $gte: range.from,
        };
    }

    if (filters.featured !== undefined) {
      if (filters.featured === true) {
        // Только записи с featured = true
        paramsQuery.filters.featured = true;
      } else {
        // featured = false ИЛИ поле отсутствует (null)
        paramsQuery.filters.$or = [
          { featured: false },
          { featured: { $null: true } },
        ];
      }
    }
  }

  const query = qs.stringify(paramsQuery, { encode: false });

  return strapiFetch<StrapiCollection<PublicationShort>>(
    `/publications?${query}`,
    {
      next: { revalidate: 60, tags: ["publications"] },
    },
  );
}

export async function getPublicationBySlug({
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
    fields: [
      "id",
      "name",
      "description",
      "slug",
      "content",
      "createdAt",
      "updatedAt",
      "date",
    ],
    populate: {
      preview: true,
      category: {
        fields: ["slug", "name"],
      },
      experts: {
        fields: ["name", "slug", "position"],
        populate: {
          avatar: true,
        },
      },
      roles: {
        fields: ["id", "slug", "name"],
      },
      seo: {
        fields: ["title", "description"],
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

  return strapiFetch<StrapiCollection<Publication>>(`/publications?${query}`, {
    next: { revalidate: 60, tags: [`publications/${slug}`] },
  });
}

export async function getPublicationSlugs() {
  const paramsQuery: any = {
    fields: ["slug", "updatedAt"],
    sort: ["createdAt:desc"],
    pagination: {
      pageSize: 1000,
    },
  };

  const query = qs.stringify(paramsQuery, { encode: false });

  return strapiFetch<StrapiCollection<{ slug: string; updatedAt: string }>>(
    `/publications?${query}`,
    {
      next: { revalidate: 60, tags: ["publication-slugs"] },
    },
  );
}

export async function getPublicationCategories({
  pageSize = 6,
  locale = "en",
}: {
  pageSize?: number;
  locale?: string;
}) {
  const paramsQuery: any = {
    fields: ["id", "slug", "name"],

    pagination: {
      pageSize,
    },
    locale,
  };

  const query = qs.stringify(paramsQuery, { encode: false });

  return strapiFetch<StrapiCollection<PublicationCategory>>(
    `/publication-categories?${query}`,
    {
      next: { revalidate: 60, tags: ["publication-categories"] },
    },
  );
}
