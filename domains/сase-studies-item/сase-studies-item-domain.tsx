import { clsx } from "clsx";

import { PageLayout } from "@/layouts/page";

import { Support } from "@/ui/support";
// import { Rating } from "@/ui/rating";

// import { PublicationsSection } from "@/sections/publications";

import * as Components from "./components";

import { useCaseStudiesItemDomain } from "./сase-studies-item-domain.hook";

import type { CaseStudy } from "@/types/case-studies";

export type CaseStudiesItemDomainProps = {
  className?: string;
  data: CaseStudy;
};

export const CaseStudiesItemDomain: React.FC<CaseStudiesItemDomainProps> = (
  props,
): React.JSX.Element => {
  const { routes } = useCaseStudiesItemDomain(props);

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

      {/* {"relatedPublications" in props.data &&
        props.data.relatedPublications.length > 0 && (
          <>
            <section className="container-full section-gradient pt-20">
              <Rating className="z-1" />
            </section>

            <PublicationsSection
              className="z-1 mb-20"
              data={props.data.relatedPublications}
            />
          </>
        )} */}
    </PageLayout>
  );
};
