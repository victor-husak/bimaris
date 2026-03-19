import { SingleLayout, SingleLayoutContent } from "@/layouts/single";

import * as Components from "./components";

import { clsx } from "clsx";

import type { CaseStudy } from "@/types/case-studies";

export type CaseStudiesItemDomainContentProps = {
  className?: string;
  data: CaseStudy;
};

export const CaseStudiesItemDomainContent: React.FC<
  CaseStudiesItemDomainContentProps
> = (props): React.JSX.Element => {
  return (
    <SingleLayout
      className={clsx(props.className, "")}
      AsideComponent={<Components.Aside data={props.data} />}
      ContentComponent={<SingleLayoutContent content={props.data.content} />}
    />
  );
};
