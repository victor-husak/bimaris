import { clsx } from "clsx";
import { Suspense } from "react";

import { ListLayout } from "@/layouts/list";

import * as Components from "./components";

import { useListLayoutGrid } from "./insights-domain-list.hook";

import type { PublicationShort } from "@/types/publication";

export type InsightsDomainListProps = {
  className?: string;
  publications: StrapiCollection<PublicationShort>;
  searchParams?: SearchParams;
};

export const InsightsDomainList: React.FC<InsightsDomainListProps> = (
  props,
): React.JSX.Element => {
  const { searchKeys } = useListLayoutGrid(props);

  return (
    <ListLayout
      className={clsx(props.className)}
      title="All publications"
      description="Explore our selected examples of immigration cases handled for individuals and businesses, demonstrating our structured approach and long-term legal support."
      FiltersComponent={
        <Suspense>
          <Components.Filters />
        </Suspense>
      }
    >
      <Suspense key={searchKeys}>
        <Components.Grid
          publications={props.publications}
          searchParams={props.searchParams}
        />
      </Suspense>
    </ListLayout>
  );
};
