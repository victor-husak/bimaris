import type { ExpertShort } from "@/types/experts";

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
};

export type CaseStudy = CaseStudyShort & {
  content: string;
  experts?: Array<ExpertShort>;
  client?: Client;
};
