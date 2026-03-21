"use client";

import { clsx } from "clsx";

import { ListLayoutFilters } from "@/layouts/list";

import { FiltersCheckbox } from "@/components/filters";

import { useCaseStudiesDomainListFilters } from "./case-studies-domain-list-filters.hook";

import type { RoleShort } from "@/types/roles";

export type CaseStudiesDomainListFiltersProps = {
  className?: string;
};

export type CaseStudiesDomainListFiltersCombinedProps =
  CaseStudiesDomainListFiltersProps & {
    roles: Array<RoleShort>;
  };

export const CaseStudiesDomainListFilters: React.FC<
  CaseStudiesDomainListFiltersCombinedProps
> = (props): React.JSX.Element => {
  const {
    roleOptions,
    // categoryOptions,
    dateOptions,
    selectedRoles,
    // selectedCategories,
    selectedDates,
    search,
    setSearch,
    setFilters,
  } = useCaseStudiesDomainListFilters(props);

  return (
    <ListLayoutFilters
      className={clsx(props.className)}
      search={search}
      onSearchChange={setSearch}
    >
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
        onChange={() => {}}
      /> */}
    </ListLayoutFilters>
  );
};
