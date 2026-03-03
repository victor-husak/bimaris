import { PageLayout } from "@/layouts/page";

import { MenuSection } from "@/sections/menu";

import * as Components from "./componets";

import { clsx } from "clsx";

export type CaseStudiesDomainProps = {
  className?: string;
};

export const CaseStudiesDomain: React.FC<CaseStudiesDomainProps> = (
  props,
): React.JSX.Element => {
  return (
    <PageLayout
      className={clsx(props.className, "")}
      routes={[
        { label: "Home", value: "/" },
        { label: "Case Studies", value: "/case-studies" },
      ]}
      HeaderComponent={<Components.Header className="mb-5" />}
    >
      <MenuSection data={menu} />

      <Components.List />
    </PageLayout>
  );
};

const menu = [
  {
    key: "1",
    title: "Legal alerts (+3)",
    description:
      "Timely legal updates on immigration rules, regulatory changes, and official announcements.",
    href: "/",
  },
  {
    key: "2",
    title: "All publications",
    description:
      "Expert insights and legal updates, covering immigration, relocation, and cross-border mobility.",
    href: "/insights",
  },
  {
    key: "3",
    title: "Case studies",
    description:
      "Real client stories showcasing how we handle complex immigration and relocation cases.",
    href: "/case-studies",
  },
];
