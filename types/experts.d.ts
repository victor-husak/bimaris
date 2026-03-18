export type ExpertShort = {
  id: number;
  slug: string;
  name: string;
  position: string;
  linkedIn: string;
  email: string;
  avatar?: Image;
  createdAt: string;
};

export type Expert = ExpertShort & {
  content: string;
  publications: PublicationShort[];
  updatedAt: string;
};
