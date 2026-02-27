"use client";

import { PageLayoutHeader, PageLayoutHeaderSlides } from "@/layouts/page";

import { useHomeDomainHeader } from "./home-domain-header.hook";

import { clsx } from "clsx";

export type HomeDomainHeaderProps = {
  className?: string;
};

export const HomeDomainHeader: React.FC<HomeDomainHeaderProps> = (
  props,
): React.JSX.Element => {
  const { slides } = useHomeDomainHeader(props);

  return (
    <PageLayoutHeader
      className={clsx(props.className, "")}
      size="lg"
      media={{
        url: "/images/home/home-header.webp",
        width: 3978,
        height: 1860,
        alt: "Home header background",
      }}
      RightComponent={
        <PageLayoutHeaderSlides title="Choose your role:" data={slides} />
      }
    />
  );
};
