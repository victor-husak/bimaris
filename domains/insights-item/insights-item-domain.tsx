import { PageLayout } from "@/layouts/page";

import { Support } from "@/ui/support";

import { PublicationsSection } from "@/sections/publications";

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
      {/* Support */}
      <section className="container-full">
        <Support />
      </section>

      {/* Content */}
      <Components.Content className="mb-[67px]" />

      {/* Publications */}
      <PublicationsSection className="mb-20" />
    </PageLayout>
  );
};
