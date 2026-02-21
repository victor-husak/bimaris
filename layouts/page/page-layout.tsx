import { SolutionsSection } from "@/sections/solutions";

import { clsx } from "clsx";

export type PageLayoutProps = {
  className?: string;
  children: React.ReactNode;
  HeaderComponent: React.ReactNode;
};

export const PageLayout: React.FC<PageLayoutProps> = (
  props,
): React.JSX.Element => {
  return (
    <main className={clsx(props.className, "flex flex-col")}>
      {props.HeaderComponent}

      {props.children}

      <SolutionsSection className="mb-5" />
    </main>
  );
};
