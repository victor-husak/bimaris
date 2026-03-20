import type { ServiceShort } from "@/types/services";
import type { CaseStudyShort } from "@/types/case-studies";
import type { Faq } from "@/types/components";
import type { Advantages } from "./components/common";
import type { Points } from "./components/roles";

export type RoleShort = {
  id: number;
  slug: string;
  name: string;
  title: string;
  description: string;
  mainImage?: Image;
  createdAt: string;
};

export type Role = RoleShort & {
  services: ServiceShort[];
  caseStudies: CaseStudyShort[];
  faqs: Faq;
  advantages: Advantages;
  points: Points;
  seo?: Seo;
  updatedAt: string;
};
