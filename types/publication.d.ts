export type PublicationShort = {
  id: number;
  slug: string;
  name: string;
  description: string;
  createdAt: string;
  preview: Image;
  category: {
    slug: string;
    name: string;
  };
};

export type Publication = PublicationShort & {
  content: string;
  images: Array<Image>;
  // person: PeopleShort;
  updatedAt: string;
  topics?: Array<{ id: number; slug: string; name: string }>;
  types?: Array<{
    id: number;
    slug: string;
    name: string;
  }>;
};
