export type RolesItem = {
  id: number;
  name: string;
  description: string;
};

export type Points = {
  id: number;
  title: string;
  items: RolesItem[];
  preview: Image;
};
