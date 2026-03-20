import type { CaseStudyShort } from "./case-studies";
import type { Advantages } from "./components/common";

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
  advantages: Advantages;
  seo?: Seo;
  updatedAt: string;
};
