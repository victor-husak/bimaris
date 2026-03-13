import { clsx } from "clsx";

import { PageLayout } from "@/layouts/page";

import { Support } from "@/ui/support";
import { Rating } from "@/ui/rating";

import { PublicationsSection } from "@/sections/publications";

import * as Components from "./components";

import { useInsightsItemDomain } from "./insights-item-domain.hook";

import type { Publication } from "@/types/publication";
import type { CaseStudy } from "@/types/case-studies";

export type InsightsItemDomainProps = {
  className?: string;
  data: Publication | CaseStudy;
};

export const InsightsItemDomain: React.FC<InsightsItemDomainProps> = (
  props,
): React.JSX.Element => {
  const { routes } = useInsightsItemDomain(props);

  return (
    <PageLayout
      className={clsx(props.className, "")}
      routes={routes}
      HeaderComponent={<Components.Header data={props.data} />}
    >
      {/* Support */}
      <section className="container-full">
        <Support />
      </section>

      {/* Content */}
      <Components.Content className="pb-20" data={props.data} />

      {/* Rating */}
      <section className="container-full section-gradient pt-20">
        <Rating className="z-1" />
      </section>

      {/* Experts */}
      {/* <ExpertsSection className="z-1 mt-25" /> */}

      {/* Faqs */}
      {/* <FaqsSection className="z-1 mt-[110px]" /> */}

      {/* Publications */}
      <PublicationsSection className="z-1 mb-20" slug={props.data.slug} />
    </PageLayout>
  );
};
