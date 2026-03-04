import { SingleLayoutAside } from "@/layouts/single";

import { AsideContent, AsideLists } from "@/components/aside";

import { clsx } from "clsx";

export type InsightsItemDomainContentAsideProps = {
  className?: string;
};

export const InsightsItemDomainContentAside: React.FC<
  InsightsItemDomainContentAsideProps
> = (props): React.JSX.Element => {
  return (
    <SingleLayoutAside className={clsx(props.className, "")}>
      <AsideContent />

      <AsideLists title="Related solutions" />
    </SingleLayoutAside>
  );
};
