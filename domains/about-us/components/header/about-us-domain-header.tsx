"use client";

import { PageLayoutHeader, PageLayoutHeaderSlides } from "@/layouts/page";

import { Button } from "@/components/button";

import { ServiceIcon, MeetingIcon } from "@/icons/header-links";

import { useScrollToSection } from "@/hooks";

import { clsx } from "clsx";

export type AboutUsDomainHeaderProps = {
  className?: string;
};

export const AboutUsDomainHeader: React.FC<AboutUsDomainHeaderProps> = (
  props,
): React.JSX.Element => {
  const { onScrollToSection } = useScrollToSection();

  return (
    <PageLayoutHeader
      className={clsx(props.className, "")}
      size="lg"
      media={{
        url: "/images/about-us/header.webp",
        width: 3978,
        height: 1767,
        alt: "About Us header background",
      }}
      title={
        <>
          Discover <span>Bimáris</span>
        </>
      }
      description="Bimaris  helps individuals and families navigate the Ukrainian immigration process with clarity, confidence, and expert legal support."
      subtitle="Explore"
      tag="Our story"
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
            Who we serve
          </Button>
        </>
      }
      RightComponent={
        <PageLayoutHeaderSlides
          title="Quick links:"
          data={items}
          onSelect={onScrollToSection}
        />
      }
    />
  );
};

const items = [
  {
    key: "section-roles",
    title: "Who we serve",
    icon: <ServiceIcon />,
  },
  {
    key: "contact-us",
    title: "Schedule a meeting",
    icon: <MeetingIcon />,
  },
];
