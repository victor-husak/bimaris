"use client";

import {
  PageLayoutHeader,
  PageLayoutHeaderSlides,
  PageLayoutHeaderArrows,
} from "@/layouts/page";

import { Button } from "@/components";

import { AlertIcon, FileIcon } from "@/icons/header-links";

import { useInsightsDomainHeader } from "./insights-domain-header.hook";

import { clsx } from "clsx";

import type { PublicationShort } from "@/types/publication";

export type InsightsDomainHeaderProps = {
  className?: string;
  data: PublicationShort[];
};

export const InsightsDomainHeader: React.FC<InsightsDomainHeaderProps> = (
  props,
): React.JSX.Element => {
  const { activeIndex, activeItem, onTrigger } = useInsightsDomainHeader(props);

  return (
    <PageLayoutHeader
      className={clsx(props.className, "")}
      classNameTitle="max-w-[500px]"
      size="sm"
      type="second"
      activeIndex={activeIndex}
      media={activeItem.media}
      title={activeItem.title}
      subtitle="Featured"
      tag={activeItem.category}
      RightComponent={
        <PageLayoutHeaderSlides title="Quick links:" data={items} />
      }
      ContentComponent={
        <PageLayoutHeaderArrows
          onTrigger={onTrigger}
          ActionComponent={
            <Button variant="white" animation="scale" href={activeItem.href}>
              Read more
            </Button>
          }
        />
      }
    />
  );
};

const items = [
  {
    id: 1,
    title: "Legal alerts",
    icon: <AlertIcon />,
  },
  {
    id: 2,
    title: "Case studies",
    icon: <FileIcon />,
  },
];
