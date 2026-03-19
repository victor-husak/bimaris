import { SingleLayoutAside } from "@/layouts/single";

import {
  AsideContent,
  AsideActions,
  AsideAuthor,
  AsideGroup,
} from "@/components/aside";

import { clsx } from "clsx";

import type { Publication } from "@/types/publication";

export type InsightsItemDomainContentAsideProps = {
  className?: string;
  data: Publication;
};

export const InsightsItemDomainContentAside: React.FC<
  InsightsItemDomainContentAsideProps
> = (props): React.JSX.Element => {
  return (
    <SingleLayoutAside className={clsx(props.className, "")}>
      <AsideContent content={props.data.content} />

      {!!props.data.experts?.length && (
        <AsideGroup title="Posted by">
          <div className="flex flex-col gap-4 p-5">
            {props.data.experts.map((expert) => (
              <AsideAuthor key={expert.id} data={expert} />
            ))}
          </div>
        </AsideGroup>
      )}

      <AsideActions listenText={props.data.content} name="Insight" />
    </SingleLayoutAside>
  );
};
