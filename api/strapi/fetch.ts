"use server";

import { StrapiError, StrapiAuthError, StrapiNotFoundError } from "./errors";
import type { StrapiErrorResponse } from "./strapi-error.types";

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL!;
const STRAPI_TOKEN = process.env.NEXT_PUBLIC_STRAPI_TOKEN;

export async function strapiFetch<T>(
  path: string,
  options: RequestInit & {
    next?: { revalidate?: number; tags?: string[] };
  } = {},
): Promise<T> {
  const res = await fetch(`${STRAPI_URL}/api${path}`, {
    ...options,
    headers: {
      ...(STRAPI_TOKEN && { Authorization: `Bearer ${STRAPI_TOKEN}` }),
      "Content-Type": "application/json",
      ...options.headers,
    },
  });

  if (!res.ok) {
    let errorResponse: StrapiErrorResponse | undefined;

    try {
      errorResponse = (await res.json()) as StrapiErrorResponse;
    } catch {
      // Strapi иногда может вернуть HTML/пустое тело
    }

    console.log("errorResponse", res);

    switch (res.status) {
      case 401:
      case 403:
        throw new StrapiAuthError(errorResponse);
      case 404:
        throw new StrapiNotFoundError(errorResponse);
      default:
        throw new StrapiError(
          errorResponse?.error?.message ?? `Strapi error ${res.status}`,
          res.status,
          errorResponse,
        );
    }
  }

  return res.json();
}
