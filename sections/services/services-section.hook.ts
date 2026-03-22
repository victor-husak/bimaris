import { useMemo } from "react";

import type { ServicesSectionProps } from "./services-section";

export const useServicesSectionHeader = (props: ServicesSectionProps) => {
  const data = useMemo(() => {
    return props.data.map((item) => ({
      id: item.id,
      title: item.name,
      description: item.description,
      list: item.items.map((i) => {
        title: i.name;
      }),
      href: `/services/${item.slug}`,
    }));
  }, [props.data]);

  return { data };
};
