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
      <MenuSection />

      <Components.List />
    </PageLayout>
  );
};
