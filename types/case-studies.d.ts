export type CaseStudyShort = {
  id: number;
  slug: string;
  name: string;
  description: string;
  createdAt: string;
  preview: Image;
};

export type CaseStudy = CaseStudyShort & {
  content: string;
  updatedAt: string;
};
