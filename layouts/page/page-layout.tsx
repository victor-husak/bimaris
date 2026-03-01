import * as Components from "./components";

import { SolutionsSection } from "@/sections/solutions";

import { clsx } from "clsx";

export type PageLayoutProps = {
  className?: string;
  children: React.ReactNode;
  routes?: Array<Route>;
  HeaderComponent: React.ReactNode;
};

export const PageLayout: React.FC<PageLayoutProps> = (
  props,
): React.JSX.Element => {
  return (
    <main
      className={clsx(props.className, "flex flex-col", {
        "pt-5": !props.routes,
      })}
    >
      {!!props.routes?.length && (
        <Components.Route
          className="container-full mt-4 mb-5"
          items={props.routes}
        />
      )}

      {props.HeaderComponent}

      {props.children}

      <SolutionsSection className="mb-5" />
    </main>
  );
};
