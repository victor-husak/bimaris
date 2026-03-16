import { clsx } from "clsx";

import { PageLayout } from "@/layouts/page";

import { Rating } from "@/ui/rating";

// import { PublicationsSection } from "@/sections/publications";

import * as Components from "./components";

import { usePeopleDomain } from "./people-domain.hook";

import type { Expert } from "@/types/experts";

export type PeopleDomainProps = {
  className?: string;
  data: Expert;
};

export const PeopleDomain: React.FC<PeopleDomainProps> = (
  props,
): React.JSX.Element => {
  const { routes } = usePeopleDomain(props);

  return (
    <PageLayout
      className={clsx(props.className, "")}
      routes={routes}
      HeaderComponent={<Components.Header data={props.data} />}
    >
      {/* Content */}
      <Components.Content className="pb-20" data={props.data} />

      {/* Rating */}
      <section
        className={clsx("container-full section-gradient pt-20", {
          "mb-20": true,
        })}
      >
        <Rating className="z-1" />
      </section>

      {/* Publications */}
      {/* <PublicationsSection className="pb-20" /> */}
    </PageLayout>
  );
};
