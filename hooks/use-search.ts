"use client";

import { useCallback, useEffect, useState, useTransition } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export type FilterValue = string | string[];
export type SetFilters<T> = Partial<Record<keyof T, FilterValue | null>>;

export function useUrlFilters<T extends Record<string, FilterValue>>() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();

  // ---------- helpers ----------
  const toArray = (value?: FilterValue): string[] =>
    value == null ? [] : Array.isArray(value) ? value : [value];

  // ---------- init from URL ----------
  const [filters, setFilters] = useState<T>(() => {
    const next = {} as T;

    searchParams.forEach((_, key) => {
      if (key === "search") return;
      const values = searchParams.getAll(key);
      next[key as keyof T] = (
        values.length > 1 ? values : values[0]
      ) as T[keyof T];
    });

    return next;
  });

  const [search, setSearch] = useState(searchParams.get("search") ?? "");

  // ---------- sync state → URL ----------
  useEffect(() => {
    const params = new URLSearchParams();

    Object.entries(filters).forEach(([key, raw]) => {
      toArray(raw).forEach((v) => params.append(key, v));
    });

    if (search) params.set("search", search);

    startTransition(() => {
      router.replace(
        params.toString() ? `${pathname}?${params.toString()}` : pathname,
        { scroll: false },
      );
    });
  }, [filters, search, pathname, router]);

  // ---------- API ----------
  const toggle = useCallback(<K extends keyof T>(key: K, value: string) => {
    setFilters((prev) => {
      const current = toArray(prev[key]);
      const nextValues = current.includes(value)
        ? current.filter((v) => v !== value)
        : [...current, value];

      const next = { ...prev } as T;
      if (nextValues.length === 0) delete next[key];
      else
        next[key] = (
          nextValues.length === 1 ? nextValues[0] : nextValues
        ) as T[K];

      return next;
    });
  }, []);

  const updateFilters = useCallback((updates: SetFilters<T>) => {
    setFilters((prev) => {
      const next = { ...prev } as T;

      Object.entries(updates).forEach(([key, value]) => {
        if (!value || (Array.isArray(value) && value.length === 0)) {
          delete next[key as keyof T];
          return;
        }

        const values = toArray(value);
        next[key as keyof T] = (
          values.length === 1 ? values[0] : values
        ) as T[keyof T];
      });

      return next;
    });
  }, []);

  const clearFilter = useCallback(<K extends keyof T>(key: K) => {
    setFilters((prev) => {
      const next = { ...prev };
      delete next[key];
      return next as T;
    });
  }, []);

  const reset = useCallback(() => {
    setFilters({} as T);
    setSearch("");
    router.replace(pathname, { scroll: false });
  }, [pathname, router]);

  const isActive = useCallback(
    <K extends keyof T>(key: K, value: string) =>
      toArray(filters[key]).includes(value),
    [filters],
  );

  return {
    isPending,
    filters,
    search,
    setSearch,
    toggle,
    setFilters: updateFilters,
    clearFilter,
    reset,
    isActive,
  };
}
