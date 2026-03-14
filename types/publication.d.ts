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
  updatedAt: string;
  topics?: Array<{ id: number; slug: string; name: string }>;
  types?: Array<{
    id: number;
    slug: string;
    name: string;
  }>;
  relatedPublications: PublicationShort[];
};
