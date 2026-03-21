import { Button } from "@/components";

import * as Components from "./components";

import { clsx } from "clsx";

export type ListLayoutProps = {
  className?: string;
  title: string;
  description: string;
  children?: React.ReactNode;
  FiltersComponent?: React.ReactNode;
};

export const ListLayout: React.FC<ListLayoutProps> = (
  props,
): React.JSX.Element => {
  return (
    <section className={clsx(props.className, "container-full mb-20")}>
      {/* Header */}
      <Components.Header
        title={props.title}
        description={props.description}
        FiltersComponent={props.FiltersComponent}
      />

      {/* Content */}
      {props.children}
    </section>
  );
};
