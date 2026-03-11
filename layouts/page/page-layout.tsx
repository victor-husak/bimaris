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

const data = [
  {
    key: "individuals",
    title: "Solutions for individuals",
    description:
      "Personalized immigration support for individual needs, long-term goals, and personal circumstances.",
    href: "/",
  },
  {
    key: "businesses",
    title: "Solutions for businesses",
    description:
      "Strategic immigration advisory supporting companies with cross-border talent, compliance, and workforce.",
    href: "/",
  },
  {
    key: "investors",
    title: "Solutions for investors",
    description:
      "We support investors entering the Ukrainian market with structured legal guidance.",
    href: "/",
  },
];
