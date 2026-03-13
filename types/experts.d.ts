export type ExpertShort = {
  id: number;
  slug: string;
  name: string;
  position: string;
  avatar?: Image;
  createdAt: string;
};

export type Expert = ExpertShort & {
  content: string;
  updatedAt: string;
};
