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

export type Information = {
  id: number;
  title: string;
  description: string;
  preview: Image;
  action: Action;
};

export type Action = {
  id: number;
  name: string;
  href: string;
};
