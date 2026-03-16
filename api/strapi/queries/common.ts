"use server";

import qs from "qs";

import { strapiFetch } from "../fetch";

// import type { CommonData } from "@/types/common";

export async function getCommonData({ locale = "en" }: { locale?: string }) {
  const paramsQuery = {
    fields: ["id"],
    populate: {
      faqs: {
        fields: ["id", "title"],
        populate: {
          preview: true,
          items: {
            fields: ["id", "question", "answer"],
          },
        },
      },
    },
    locale,
  };

  const query = qs.stringify(paramsQuery, { encode: false });

  return strapiFetch<StrapiSingle<CommonData>>(`/common?${query}`, {
    next: { revalidate: 60, tags: [`common`] },
  });
}
