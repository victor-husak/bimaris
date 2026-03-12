type StrapiCollection<T> = {
  data: T[];
  meta?: {
    pagination: StrapiCollectionPagination;
  };
};

type StrapiCollectionPagination = {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
};

type StrapiSingle<T> = {
  data: T | null;
};
