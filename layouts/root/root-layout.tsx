import { Suspense } from "react";
import { clsx } from "clsx";

import dynamic from "next/dynamic";

import * as Components from "./components";

const Overlays = dynamic(() =>
  import("./overlays").then((mod) => mod.RootLayoutOverlays),
);

import type { ServiceShort } from "@/types/services";

export type RootLayoutProps = {
  className?: string;
  children: React.ReactNode;
  servicesBusinesses: ServiceShort[];
  servicesIndividuals: ServiceShort[];
  servicesInvestors: ServiceShort[];
};

export const RootLayout: React.FC<RootLayoutProps> = (
  props,
): React.JSX.Element => {
  return (
    <>
      <Components.Scroll className={clsx(props.className, "relative")}>
        <Components.Topline />

        <Components.Header />

        {props.children}

        <Components.Footer
          servicesBusinesses={props.servicesBusinesses}
          servicesIndividuals={props.servicesIndividuals}
          servicesInvestors={props.servicesInvestors}
        />
      </Components.Scroll>

      <Suspense>
        <Overlays />
      </Suspense>
    </>
  );
};
