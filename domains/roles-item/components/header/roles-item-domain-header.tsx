"use client";

import { PageLayoutHeader, PageLayoutHeaderSlides } from "@/layouts/page";

import { useRolesItemDomainHeader } from "./roles-item-domain-header.hook";

import { clsx } from "clsx";

export type RolesItemDomainHeaderProps = {
  className?: string;
};

export const RolesItemDomainHeader: React.FC<RolesItemDomainHeaderProps> = (
  props,
): React.JSX.Element => {
  const { slides } = useRolesItemDomainHeader(props);

  return (
    <PageLayoutHeader
      className={clsx(props.className, "")}
      media={{
        url: "/images/genereted/role.webp",
        width: 3978,
        height: 1860,
        alt: "Role header background",
      }}
      RightComponent={
        <PageLayoutHeaderSlides title="Quick links:" data={slides} />
      }
    />
  );
};
