import { PageLayout } from "@/layouts/page";

import * as Components from "./components";

import { clsx } from "clsx";

export type PeopleDomainProps = {
  className?: string;
};

export const PeopleDomain: React.FC<PeopleDomainProps> = (
  props,
): React.JSX.Element => {
  return (
    <PageLayout
      className={clsx(props.className, "")}
      routes={[
        { label: "Home", value: "/" },
        { label: "Insights", value: "/insights" },
      ]}
      HeaderComponent={<Components.Header data={props.data} />}
    ></PageLayout>
  );
};
