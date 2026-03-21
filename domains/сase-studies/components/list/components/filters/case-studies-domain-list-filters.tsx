"use client";

import { ListLayoutFilters } from "@/layouts/list";

import { FiltersCheckbox } from "@/components/filters";

import { clsx } from "clsx";

export type CaseStudiesDomainListFiltersProps = {
  className?: string;
};

export const CaseStudiesDomainListFilters: React.FC<
  CaseStudiesDomainListFiltersProps
> = (props): React.JSX.Element => {
  return (
    <ListLayoutFilters
      className={clsx(props.className, "")}
      search=""
      onSearchChange={() => {}}
    >
      <FiltersCheckbox
        label="Date"
        titleContent="Choose date range"
        options={dateOptions}
        onChange={() => {}}
      />

      <FiltersCheckbox
        label="Role"
        titleContent="Choose role"
        options={[]}
        onChange={() => {}}
      />

      <FiltersCheckbox
        label="Choose solution"
        titleContent="Choose solution"
        options={[]}
        onChange={() => {}}
      />
    </ListLayoutFilters>
  );
};

const dateOptions: Array<Option> = [
  { label: "Today", value: "today" },
  { label: "This week", value: "this-week" },
  { label: "This month", value: "this-month" },
  { label: "This year", value: "this-year" },
];
