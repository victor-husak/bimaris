"use server";

import qs from "qs";

import { getDateRange } from "@/utils/date";

import { strapiFetch } from "../fetch";

import type { CaseStudy, CaseStudyShort } from "@/types/case-studies";

export async function getCaseStudies({
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
    fields: ["id", "name", "description", "slug", "createdAt"],
    populate: {
      preview: true,
      tag: {
        fields: ["name"],
        populate: {
          icon: true,
        },
      },
    },
    pagination: finalPagination,
    sort: ["sortOrder:desc"],
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

    if (filters.roles) {
      paramsQuery.filters.roles = { slug: { $in: filters.roles } };
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

  return strapiFetch<StrapiCollection<CaseStudyShort>>(
    `/case-studies?${query}`,
    {
      next: { revalidate: 60, tags: ["case-studies"] },
    },
  );
}

export async function getCaseStudyBySlug({
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
      preview: true,
      client: {
        fields: ["id", "name", "description", "url"],
        populate: {
          logo: true,
        },
      },
      services: {
        fields: ["id", "name", "slug"],
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

  return strapiFetch<StrapiCollection<CaseStudy>>(`/case-studies?${query}`, {
    next: { revalidate: 60, tags: [`case-studies/${slug}`] },
  });
}

export async function getCaseStudiesRecommended({
  slug,
}: {
  slug: string;
  topics?: Array<string>;
}) {
  const paramsQuery: any = {
    fields: ["id", "name", "description", "slug", "createdAt"],
    populate: {
      preview: true,
    },
    pagination: {
      pageSize: 4,
    },
    sort: ["createdAt:desc"],
    filters: {
      slug: {
        $ne: slug,
      },
    },
  };

  const query = qs.stringify(paramsQuery, { encode: false });

  return strapiFetch<StrapiCollection<CaseStudyShort>>(
    `/case-studies?${query}`,
    {
      next: { revalidate: 60, tags: ["case-studies-recommended"] },
    },
  );
}

export async function getCaseStudySlugs() {
  const paramsQuery: any = {
    fields: ["slug", "updatedAt"],
    sort: ["createdAt:desc"],
    pagination: {
      pageSize: 1000,
    },
  };

  const query = qs.stringify(paramsQuery, { encode: false });

  return strapiFetch<StrapiCollection<{ slug: string; updatedAt: string }>>(
    `/case-studies?${query}`,
    {
      next: { revalidate: 60, tags: ["case-study-slugs"] },
    },
  );
}
