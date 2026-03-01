import { PageLayout } from "@/layouts/page";

import { AdvantagesSection } from "@/sections/advantages";
import { ContactSection } from "@/sections/contact";
import { CasesSection } from "@/sections/cases";
import { FaqsSection } from "@/sections/faqs";

import { Rating } from "@/ui/rating";

import * as Components from "./components";

import { clsx } from "clsx";

export type InsightsItemDomainProps = {
  className?: string;
};

export const InsightsItemDomain: React.FC<InsightsItemDomainProps> = (
  props,
): React.JSX.Element => {
  return (
    <PageLayout
      className={clsx(props.className, "")}
      routes={[
        { label: "Home", value: "/" },
        { label: "Insights", value: "/insights" },
        {
          label: "Relocating a European technology company to Ukraine",
          value: "/insights/relocating-european-tech-company",
        },
      ]}
      HeaderComponent={<Components.Header />}
    >
      {/* Content */}
      <Components.Content className="mb-[67px]" />
    </PageLayout>
  );
};
