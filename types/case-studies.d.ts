export type CaseStudyShort = {
  id: number;
  slug: string;
  name: string;
  description: string;
  date?: string;
  createdAt: string;
  updatedAt: string;
  preview: Image;
};

export type CaseStudy = CaseStudyShort & {
  content: string;
};
