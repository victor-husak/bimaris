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
    <div className={clsx(props.className, "relative")}>
      <header className="shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
        <Components.Topline />

        <Components.Header />
      </header>

      {props.children}

      <Components.Footer />
    </div>
  );
};
