import { PageLayout } from "@/layouts/page";

import { MenuSection } from "@/sections/menu";
import { UpdatesSection } from "@/sections/updates";

import * as Components from "./componets";

import { clsx } from "clsx";

export type InsightsDomainProps = {
  className?: string;
};

export const InsightsDomain: React.FC<InsightsDomainProps> = (
  props,
): React.JSX.Element => {
  return (
    <PageLayout className={clsx(props.className, "")}>
      <Components.Header className="mb-5" />

      <MenuSection />

      <UpdatesSection className="mb-25" />

      <Components.List />
    </PageLayout>
  );
};
