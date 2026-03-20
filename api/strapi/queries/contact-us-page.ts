"use server";

import qs from "qs";

import { strapiFetch } from "../fetch";

import type { ContactUsPage } from "@/types/contact-us-page";

export async function getContactUsPage({
  filters,
  pageSize = 6,
  locale = "en",
}: {
  filters?: SearchParams;
  pageSize?: number;
  locale?: string;
}) {
  const paramsQuery: any = {
    fields: ["id"],
    populate: {
      faqs: {
        fields: ["id", "title"],
        populate: {
          preview: true,
          items: true,
        },
      },
    },
    pagination: {
      pageSize,
    },
    locale,
  };

  if (filters) {
    paramsQuery.filters = {};
  }

  const query = qs.stringify(paramsQuery, { encode: false });

  return strapiFetch<StrapiSingle<ContactUsPage>>(`/contact-us-page?${query}`, {
    next: { revalidate: 60, tags: ["contact-us-page"] },
  });
}
