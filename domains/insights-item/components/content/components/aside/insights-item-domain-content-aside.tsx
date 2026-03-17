import { SingleLayoutAside } from "@/layouts/single";

import {
  AsideContent,
  AsideActions,
  AsideAuthor,
  AsideGroup,
} from "@/components/aside";

import { clsx } from "clsx";

import type { Publication } from "@/types/publication";
import type { CaseStudy } from "@/types/case-studies";

export type InsightsItemDomainContentAsideProps = {
  className?: string;
  data: Publication | CaseStudy;
};

export const InsightsItemDomainContentAside: React.FC<
  InsightsItemDomainContentAsideProps
> = (props): React.JSX.Element => {
  return (
    <SingleLayoutAside className={clsx(props.className, "")}>
      <AsideContent content={props.data.content} />

      {!!props.data.expert && (
        <AsideGroup title="Posted by">
          <AsideAuthor data={props.data.expert} />
        </AsideGroup>
      )}

      <AsideActions listenText={props.data.content} name="Insight" />
    </SingleLayoutAside>
  );
};
