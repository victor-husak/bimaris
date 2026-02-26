import * as Components from "./components";

import { clsx } from "clsx";

export type RootLayoutProps = {
  className?: string;
  children: React.ReactNode;
};

export const RootLayout: React.FC<RootLayoutProps> = (
  props,
): React.JSX.Element => {
  return (
    <Components.Scroll className={clsx(props.className, "relative")}>
      <Components.Topline />

      <Components.Header />

      {props.children}

      <Components.Footer />
    </Components.Scroll>
  );
};
