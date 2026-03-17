"use server";

import qs from "qs";

import { strapiFetch } from "../fetch";

import type { Publication, PublicationShort } from "@/types/publication";

// import { getDateRange } from "@/utils/date";

// import type { Insight, InsightShort } from "@/types/insight";

// import type { StrapiCollection } from "../types";

export async function getPublications({
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
    pagination: {
      pageSize,
    },
    sort: ["sortOrder:desc"],
    locale,
  };

  if (filters) {
    paramsQuery.filters = {};

    // if (filters.topic) {
    //   paramsQuery.filters.topics = { slug: { $in: filters.topic } };
    // }

    if (filters.category) {
      paramsQuery.filters.category = { slug: { $in: filters.category } };
    }

    // if (filters.expertise) {
    //   paramsQuery.filters.expertise = {
    //     slug: { $in: filters.expertise },
    //   };
    // }

    // if (filters.person) {
    //   paramsQuery.filters.person = {
    //     slug: { $in: filters.person },
    //   };
    // }

    // if (filters.date) {
    //   const range = getDateRange(filters.date as string);

    //   if (range)
    //     paramsQuery.filters.createdAt = {
    //       $gte: range.from.toISOString(),
    //       $lte: range.to.toISOString(),
    //     };
    // }

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
      relatedPublications: {
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
