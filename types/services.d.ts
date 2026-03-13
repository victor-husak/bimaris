export type ServiceShort = {
  id: number;
  slug: string;
  name: string;
  description: string;
  createdAt: string;
  mainImage: Image;
};

export type Service = ServiceShort & {
  content: string;
  updatedAt: string;
};
