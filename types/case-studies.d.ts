import type { ExpertShort } from "@/types/experts";
import type { Seo } from "./components/common";

export type CaseStudyShort = {
  id: number;
  slug: string;
  name: string;
  description: string;
  date?: string;
  createdAt: string;
  updatedAt: string;
  preview: Image;
  services: Array<{
    id: number;
    name: string;
    slug: string;
  }>;
  tag?: {
    icon: Image;
    name: string;
  };
};

export type CaseStudy = CaseStudyShort & {
  content: string;
  experts?: Array<ExpertShort>;
  client?: Client;
  seo?: Seo;
};
