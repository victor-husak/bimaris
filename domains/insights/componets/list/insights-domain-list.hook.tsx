import { useMemo } from "react";

import type { InsightsDomainListProps } from "./insights-domain-list";

export const useListLayoutGrid = (props: InsightsDomainListProps) => {
  const searchKeys = useMemo(
    () => Object.values(props.searchParams || {}).toString(),
    [props.searchParams],
  );

  return { searchKeys };
};
