"use client";

import { ListLayoutFilters } from "@/layouts/list";

import { FiltersCheckbox } from "@/components/filters";

import { clsx } from "clsx";

import { useInsightsDomainListFilters } from "./insights-domain-list-filters.hook";

import type { RoleShort } from "@/types/roles";
import type { PublicationCategory } from "@/types/publication";

export type InsightsDomainListFiltersProps = {
  className?: string;
  searchParams?: SearchParams;
};

export type InsightsDomainListFiltersCombinedProps =
  InsightsDomainListFiltersProps & {
    roles: Array<RoleShort>;
    publicationCategories: Array<PublicationCategory>;
  };

export const InsightsDomainListFilters: React.FC<
  InsightsDomainListFiltersCombinedProps
> = (props): React.JSX.Element => {
  const {
    roleOptions,
    categoryOptions,
    dateOptions,
    selectedRoles,
    selectedCategories,
    selectedDates,
    search,
    setSearch,
    setFilters,
  } = useInsightsDomainListFilters(props);

  return (
    <ListLayoutFilters
      className={clsx(props.className, "")}
      search={search}
      onSearchChange={setSearch}
    >
      <FiltersCheckbox
        label="Type"
        value={selectedCategories}
        titleContent="Choose type"
        options={categoryOptions}
        onChange={(value) =>
          setFilters({ category: value.map((item) => item.value) })
        }
      />

      <FiltersCheckbox
        label="Date"
        value={selectedDates}
        titleContent="Choose date range"
        options={dateOptions}
        onChange={(value) =>
          setFilters({ date: value.map((item) => item.value) })
        }
      />

      <FiltersCheckbox
        label="Role"
        value={selectedRoles}
        titleContent="Choose role"
        options={roleOptions}
        onChange={(value) =>
          setFilters({ roles: value.map((item) => item.value) })
        }
      />

      {/* <FiltersCheckbox
        label="Choose solution"
        titleContent="Choose solution"
        options={[]}
        // onChange={(value) =>
        //   setFilters({ date: value.map((item) => item.value) })
        // }
      /> */}
    </ListLayoutFilters>
  );
};
