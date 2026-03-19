import { SingleLayoutAside } from "@/layouts/single";

import { AsideContent, AsideActions } from "@/components/aside";

import { clsx } from "clsx";

export type ServicesItemDomainContentAsideProps = {
  className?: string;
  content: string;
};

export const ServicesItemDomainContentAside: React.FC<
  ServicesItemDomainContentAsideProps
> = (props): React.JSX.Element => {
  return (
    <SingleLayoutAside className={clsx(props.className, "")}>
      <AsideContent content={props.content} />

      <AsideActions listenText={props.content} name="Services" />
    </SingleLayoutAside>
  );
};
