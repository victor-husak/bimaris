export type FaqItem = {
  id: number;
  question: string;
  answer: string;
};

export type Faq = {
  id: number;
  title: string;
  preview: Image;
  items: FaqItem[];
};
