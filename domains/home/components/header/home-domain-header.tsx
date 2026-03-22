"use client";

import { Button } from "@/components";

import { PageLayoutHeader, PageLayoutHeaderSlides } from "@/layouts/page";

import { useHomeDomainHeader } from "./home-domain-header.hook";

import { clsx } from "clsx";

import type { RoleShort } from "@/types/roles";

export type HomeDomainHeaderProps = {
  className?: string;
  roles: RoleShort[];
};

export const HomeDomainHeader: React.FC<HomeDomainHeaderProps> = (
  props,
): React.JSX.Element => {
  const { slides, activeIndex, activeItem, onScrollToSection } =
    useHomeDomainHeader(props);

  return (
    <PageLayoutHeader
      className={clsx(props.className, "")}
      size="lg"
      activeIndex={activeIndex}
      description={activeItem.description}
      media={activeItem.media}
      title={
        <>
          {activeItem.title.at(0)}, <span>{activeItem.title.at(1)}</span>
        </>
      }
      subtitle={activeItem.subtitle}
      tag={activeItem.tag}
      ActionsComponent={
        <>
          <Button
            href="/contact-us"
            variant="white"
            size="medium"
            animation="scale"
          >
            Connect with our team
          </Button>

          <Button
            size="medium"
            variant="blur"
            animation="opacity"
            onClick={() => onScrollToSection("section-roles")}
          >
            Open services
          </Button>
        </>
      }
      RightComponent={
        <PageLayoutHeaderSlides
          withRating={false}
          title="Choose your role:"
          data={slides}
          activeIndex={activeIndex}
        />
      }
    />
  );
};
