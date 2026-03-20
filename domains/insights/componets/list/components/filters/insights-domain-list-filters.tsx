"use client";

import { ListLayoutFilters } from "@/layouts/list";

import { FiltersCheckbox } from "@/components/filters";

import { clsx } from "clsx";

export type InsightsDomainListFiltersProps = {
  className?: string;
};

export const InsightsDomainListFilters: React.FC<
  InsightsDomainListFiltersProps
> = (props): React.JSX.Element => {
  return (
    <ListLayoutFilters className={clsx(props.className, "")}>
      <FiltersCheckbox
        label="Type"
        titleContent="Choose type"
        options={typeOptions}
        onChange={() => {}}
      />

      <FiltersCheckbox
        label="Date"
        titleContent="Choose date range"
        options={[]}
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

const typeOptions: Array<Option> = [
  { label: "All", value: "all" },
  { label: "Insights", value: "insights" },
  { label: "Solutions", value: "solutions" },
];
