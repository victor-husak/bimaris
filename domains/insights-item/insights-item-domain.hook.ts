import { useMemo } from "react";

import type { InsightsItemDomainProps } from "./insights-item-domain";

export const useInsightsItemDomain = (props: InsightsItemDomainProps) => {
  const routes = useMemo(() => {
    return [
      { label: "Home", value: "/" },
      { label: "Insights", value: "/insights" },
      {
        label: props.data.name,
        value: `/insights/${props.data.slug}`,
      },
    ];
  }, [props.data]);

  return { routes };
};
