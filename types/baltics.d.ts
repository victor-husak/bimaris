import type { ServiceShort } from "./services";

export type BalticShort = {
  id: number;
  slug: string;
  name: string;
  description: string;
  preview: Image;
  createdAt: string;
};

export type Baltic = BalticShort & {
  services: ServiceShort[];
  updatedAt: string;
};
