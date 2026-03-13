"use server";

import qs from "qs";

import { strapiFetch } from "../fetch";

import type { CaseStudy, CaseStudyShort } from "@/types/case-studies";

export async function getCaseStudies({
  filters,
  pageSize = 6,
}: {
  filters?: SearchParams;
  pageSize?: number;
} = {}) {
  const paramsQuery: any = {
    fields: ["id", "name", "description", "slug", "createdAt"],
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

export async function getCaseStudyBySlug(slug: string) {
  const paramsQuery = {
    filters: {
      slug,
    },
    fields: ["id", "name", "description", "slug", "content", "createdAt"],
    populate: {
      preview: true,
    },
    pagination: {
      limit: 1,
    },
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
