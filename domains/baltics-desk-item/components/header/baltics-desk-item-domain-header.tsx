"use client";

import { PageLayoutHeader, PageLayoutHeaderSlides } from "@/layouts/page";

import { Button } from "@/components/button";

import { LangIcon, MeetingIcon } from "@/icons/header-links";

import { useScrollToSection } from "@/hooks/use-scroll-to-section";

import { clsx } from "clsx";

export type BalticsDeskItemDomainHeaderProps = {
  className?: string;
};

export const BalticsDeskItemDomainHeader: React.FC<
  BalticsDeskItemDomainHeaderProps
> = (props): React.JSX.Element => {
  const { onScrollToSection } = useScrollToSection();

  return (
    <PageLayoutHeader
      className={clsx(props.className, "")}
      size="lg"
      media={{
        url: "/images/baltics-desk/header.webp",
        width: 3978,
        height: 1767,
        alt: "Baltics Desk header background",
      }}
      title={
        <>
          Solutions in <span>Estonia</span>
        </>
      }
      description="Bimaris  helps individuals and families navigate the Ukrainian immigration process with clarity, confidence, and expert legal support."
      subtitle="Legal Advisory in the"
      tag="Baltic states"
      ActionsComponent={
        <>
          <Button
            variant="white"
            size="medium"
            animation="scale"
            onClick={() => onScrollToSection("contact-us")}
          >
            Connect with our team
          </Button>

          <Button
            size="medium"
            variant="blur"
            animation="opacity"
            onClick={() => onScrollToSection("services-section")}
          >
            Open services
          </Button>
        </>
      }
      RightComponent={
        <PageLayoutHeaderSlides
          title="Quick links:"
          data={items}
          onSelect={(key) => key === "contact-us" && onScrollToSection(key)}
        />
      }
    />
  );
};

const items = [
  {
    key: "1",
    title: "Select language",
    label: "Translate to",
    icon: <LangIcon />,
  },
  {
    key: "contact-us",
    title: "Schedule a meeting",
    icon: <MeetingIcon />,
  },
];
