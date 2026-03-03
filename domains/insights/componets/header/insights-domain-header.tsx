import { PageLayoutHeader, PageLayoutHeaderSlides } from "@/layouts/page";

import { AlertIcon, FileIcon } from "@/icons/header-links";

import { clsx } from "clsx";

export type InsightsDomainHeaderProps = {
  className?: string;
};

export const InsightsDomainHeader: React.FC<InsightsDomainHeaderProps> = (
  props,
): React.JSX.Element => {
  return (
    <PageLayoutHeader
      className={clsx(props.className, "")}
      classNameTitle="max-w-[500px]"
      size="md"
      type="second"
      media={{
        url: "/images/insights.webp",
        width: 3978,
        height: 1560,
        alt: "Insights header background",
      }}
      title="Changes to entry and stay rules for foreign nationals"
      subtitle="Featured"
      tag="Legal alert"
      RightComponent={
        <PageLayoutHeaderSlides title="Quick links:" data={items} />
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
