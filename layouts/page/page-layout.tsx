import { clsx } from "clsx";

import * as Components from "./components";

import { SolutionsSection } from "@/sections/solutions";

import { usePageLayout } from "./page-layout.hook";

export type PageLayoutProps = {
  className?: string;
  children: React.ReactNode;
  routes?: Array<Route>;
  HeaderComponent: React.ReactNode;
};

export const PageLayout: React.FC<PageLayoutProps> = (
  props,
): React.JSX.Element => {
  const { data } = usePageLayout();

  return (
    <main
      className={clsx(props.className, "relative z-1 flex flex-col", {
        "md:pt-5": !props.routes,
      })}
    >
      {!!props.routes?.length && (
        <Components.Route
          className="container-full my-5"
          items={props.routes}
        />
      )}

      {props.HeaderComponent}

      {props.children}

      <SolutionsSection withBanner className="mb-5" data={data} />
    </main>
  );
};
