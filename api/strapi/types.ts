export type StrapiCollection<T> = {
  data: T[];
  meta?: {
    pagination: StrapiCollectionPagination;
  };
};

export type StrapiCollectionPagination = {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
};

export type StrapiSingle<T> = {
  data: T | null;
};
