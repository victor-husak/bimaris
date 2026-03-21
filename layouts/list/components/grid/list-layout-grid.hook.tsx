import { useMemo } from "react";

import type { ListLayoutGridProps } from "./list-layout-grid";

export const useListLayoutGrid = (props: ListLayoutGridProps) => {
  const countMore = useMemo(() => {
    if (!props.pagination) {
      return 0;
    }
    return (
      props.pagination.total - props.pagination.pageSize * props.pagination.page
    );
  }, [props.pagination]);

  return { countMore };
};
