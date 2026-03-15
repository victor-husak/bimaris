import { useMemo } from "react";

import type { PeopleDomainHeaderProps } from "./people-domain-header";

export const usePeopleDomainHeader = (props: PeopleDomainHeaderProps) => {
  const data = useMemo(() => {
    return {
      name: props.data.name,
      position: props.data.position,
      avatar: props.data.avatar
        ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${props.data.avatar.url}`
        : "",
    };
  }, [props.data]);

  return { data };
};
