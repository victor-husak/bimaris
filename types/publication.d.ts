import type { ExpertShort } from "@/types/experts";
import type { Country } from "@/types/countries";

export type PublicationShort = {
  id: number;
  slug: string;
  name: string;
  description: string;
  date?: string;
  createdAt: string;
  updatedAt: string;
  preview: Image;
  country: Country;
  category: {
    slug: string;
    name: string;
  };
};

export type Publication = PublicationShort & {
  content: string;
  topics?: Array<{ id: number; slug: string; name: string }>;
  types?: Array<{
    id: number;
    slug: string;
    name: string;
  }>;
  relatedPublications: PublicationShort[];
  experts?: Array<ExpertShort>;
};
