import { useState, useCallback } from "react";

type DefaultP = {
  filters?: SearchParams;
  pagination?: {
    pageSize?: number;
    page?: number;
  };
};

export type UseListProps<T> = {
  initialData: Array<T>;
  pagination?: StrapiCollectionPagination;
  searchParams?: SearchParams;
  request: (params: DefaultP) => Promise<StrapiCollection<T>>;
  withFilters?: boolean;
};

export const useList = <T>(props: UseListProps<T>) => {
  const [data, setData] = useState<Array<T>>(props.initialData);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState<boolean>(
    props.pagination ? page < (props.pagination.pageCount ?? Infinity) : false,
  );

  const onLoadMore = useCallback(async () => {
    if (loading || !hasMore) return;
    setLoading(true);

    const res = await props.request({
      filters: props.searchParams,
      pagination: {
        page: page + 1,
      },
    });

    if (res.data) {
      setData((prev) => [...prev, ...res.data]);
      setPage((prev) => prev + 1);

      if (res.meta?.pagination) {
        const { pageCount } = res.meta.pagination;
        setHasMore(page + 1 < (pageCount ?? Infinity));
      } else {
        setHasMore(false);
      }
    }

    setLoading(false);
  }, [page, hasMore, loading, props]);

  return { data: data, page, loading, hasMore, onLoadMore };
};
