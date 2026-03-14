import type { ServiceShort } from "@/types/services";
import type { CaseStudyShort } from "@/types/case-studies";
import type { Faq } from "@/types/components";

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
  case_studies: CaseStudyShort[];
  faqs: Faq;
  updatedAt: string;
};
