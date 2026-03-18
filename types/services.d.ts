import type { CaseStudyShort } from "./case-studies";

export type ServiceShort = {
  id: number;
  slug: string;
  name: string;
  description: string;
  createdAt: string;
  mainImage: Image;
  items: {
    id: number;
    name: string;
  }[];
};

export type Service = ServiceShort & {
  content: string;
  caseStudies: CaseStudyShort[];
  updatedAt: string;
};
