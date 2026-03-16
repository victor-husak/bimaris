import { SingleLayoutAside } from "@/layouts/single";

import { AsideContent, AsideActions } from "@/components/aside";

import { clsx } from "clsx";

export type InsightsItemDomainContentAsideProps = {
  className?: string;
  content: string;
};

export const InsightsItemDomainContentAside: React.FC<
  InsightsItemDomainContentAsideProps
> = (props): React.JSX.Element => {
  return (
    <SingleLayoutAside className={clsx(props.className, "")}>
      <AsideContent content={props.content} />

      <AsideActions />
    </SingleLayoutAside>
  );
};
