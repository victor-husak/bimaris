type Media = {
  url: string;
  height: number;
  width: number;
  alt?: string;
};

type Option = {
  label: string;
  value: string;
  data?: any;
};

type Route = {
  label: string;
  value: string;
  // key: string;
};

type Params = {
  slug: string;
  locale: string;
};

type SearchParams = Record<string, string | string[] | boolean>;
