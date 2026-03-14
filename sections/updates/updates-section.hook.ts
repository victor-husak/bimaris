import { useMemo } from "react";
import { format } from "date-fns";

import type { UpdatesSectionProps } from "./updates-section";

export const useUpdatesSectionHeader = (props: UpdatesSectionProps) => {
  const data = useMemo(() => {
    return props.data.map((item) => ({
      id: item.id,
      title: item.name,
      description: item.description,
      href: `/insights/${item.slug}`,
      createdAt: format(new Date(item.createdAt), "MMMM dd, yyyy"),
    }));
  }, [props.data]);

  return { data };
};
