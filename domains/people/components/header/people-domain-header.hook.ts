import { useMemo } from "react";

import type { PeopleDomainHeaderProps } from "./people-domain-header";

export const usePeopleDomainHeader = (props: PeopleDomainHeaderProps) => {
  const data = useMemo(() => {
    // return {
    //   name: props.data.name,
    //   preview: `${process.env.NEXT_PUBLIC_STRAPI_URL}${props.data.preview.url}`,
    //   category: "category" in props.data ? props.data.category : undefined,
    // };
  }, []);

  return { data };
};
