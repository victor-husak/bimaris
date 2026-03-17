import { useMemo } from "react";

import type { OfficeCardProps } from "./office-card";

export const useOfficeCard = (props: OfficeCardProps) => {
  const data = useMemo(() => {
    return {
      name: props.data.name,
      url: props.data.url,
      email: props.data.email,
      address: `${props.data.city}, ${props.data.address}`,
      preview: props.data.preview
        ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${props.data.preview.url}`
        : "",
      isMain: !!props.data.isMain,
    };
  }, [props.data]);

  return { data };
};
