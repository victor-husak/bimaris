import { useMemo } from "react";

import { useUrlFilters } from "@/hooks/use-search";

import type { InsightsDomainListFiltersCombinedProps } from "./insights-domain-list-filters";

export type FilterConfig = {
  roles?: string[];
  category?: string[];
  date?: string;
};

const dateOptions: Array<Option> = [
  { label: "Today", value: "today" },
  { label: "This week", value: "this-week" },
  { label: "This month", value: "this-month" },
  { label: "This year", value: "this-year" },
];

export const useInsightsDomainListFilters = (
  props: InsightsDomainListFiltersCombinedProps,
) => {
  const { filters, setFilters, search, setSearch } =
    useUrlFilters<FilterConfig>();

  const roleOptions = useMemo(() => {
    return (
      props.roles?.map((item) => ({
        label: item.name,
        value: item.slug,
      })) || []
    );
  }, [props]);

  const categoryOptions = useMemo(() => {
    return props.publicationCategories.map((item) => ({
      label: item.name,
      value: item.slug,
    }));
  }, [props.publicationCategories]);

  const selectedRoles = useMemo(() => {
    if (!filters.roles) return [];

    const roles = Array.isArray(filters.roles)
      ? filters.roles
      : [filters.roles];

    return roleOptions.filter((option) => roles.includes(option.value));
  }, [filters.roles, roleOptions]);

  const selectedCategories = useMemo(() => {
    if (!filters.category) return [];

    const categories = Array.isArray(filters.category)
      ? filters.category
      : [filters.category];

    return categoryOptions.filter((option) =>
      categories.includes(option.value),
    );
  }, [filters.category, categoryOptions]);

  const selectedDates = useMemo(() => {
    if (!filters.date) return [];

    const dates = Array.isArray(filters.date) ? filters.date : [filters.date];

    return dateOptions.filter((option) => dates.includes(option.value));
  }, [filters.date]);

  return {
    roleOptions,
    categoryOptions,
    dateOptions,
    selectedRoles,
    selectedCategories,
    selectedDates,
    filters,
    search,
    setFilters,
    setSearch,
  };
};
