import { useMemo } from "react";

import type { RolesItemDomainProps } from ".//roles-item-domain";

export const useRolesItemDomain = (props: RolesItemDomainProps) => {
  const routes = useMemo(() => {
    return [
      { label: "Home", value: "/" },
      {
        label: props.data.name,
        value: `/roles/${props.data.slug}`,
      },
    ];
  }, [props.data]);

  return { routes };
};
