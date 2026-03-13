import { SingleLayout, SingleLayoutContent } from "@/layouts/single";

import * as Components from "./components";

import { clsx } from "clsx";

import { Service } from "@/types/services";

export type ServicesItemDomainContentProps = {
  className?: string;
  data: Service;
};

export const ServicesItemDomainContent: React.FC<
  ServicesItemDomainContentProps
> = (props): React.JSX.Element => {
  return (
    <SingleLayout
      className={clsx(props.className, "")}
      AsideComponent={<Components.Aside content={props.data.content} />}
      ContentComponent={<SingleLayoutContent content={props.data.content} />}
    />
  );
};
