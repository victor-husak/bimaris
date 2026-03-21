import type { ExpertShort } from "@/types/experts";
import type { Country } from "@/types/countries";
import type { Seo } from "./components/common";

export type PublicationCategory = {
  slug: string;
  name: string;
};

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
  category: PublicationCategory;
};

export type Publication = PublicationShort & {
  content: string;
  topics?: Array<{ id: number; slug: string; name: string }>;
  types?: Array<{
    id: number;
    slug: string;
    name: string;
  }>;
  roles: {
    id: number;
    slug: string;
    name: string;
  }[];
  experts?: Array<ExpertShort>;
  seo?: Seo;
};
