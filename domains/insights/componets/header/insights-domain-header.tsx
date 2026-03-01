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
      size="md"
      media={{
        url: "/images/insights.webp",
        width: 3978,
        height: 1560,
        alt: "Insights header background",
      }}
      RightComponent={
        <PageLayoutHeaderSlides title="Quick links:" data={items} />
      }
    />
  );
};

const items = [
  {
    id: 1,
    label: "Legal alerts",
    icon: <AlertIcon />,
  },
  {
    id: 2,
    label: "Case studies",
    icon: <FileIcon />,
  },
];
