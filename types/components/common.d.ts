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

export type AdvantagesItem = {
  id: number;
  title: string;
  description: string;
};

export type Advantages = {
  id: number;
  banner: Image;
  items: AdvantagesItem[];
};
