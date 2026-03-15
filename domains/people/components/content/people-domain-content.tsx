import { clsx } from "clsx";

import { SingleLayout, SingleLayoutContent } from "@/layouts/single";

import * as Components from "./components";

import type { Expert } from "@/types/experts";

export type PeopleDomainContentProps = {
  className?: string;
  data: Expert;
};

export const PeopleDomainContent: React.FC<PeopleDomainContentProps> = (
  props,
): React.JSX.Element => {
  return (
    <SingleLayout
      className={clsx(props.className, "")}
      AsideComponent={<Components.Aside content={props.data.content} />}
      ContentComponent={<SingleLayoutContent content={props.data.content} />}
    />
  );
};
