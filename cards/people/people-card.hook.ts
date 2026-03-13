import { useMemo } from "react";

import { format } from "date-fns";

import type { PeopleCardProps } from "./people-card";

export const usePeopleCard = (props: PeopleCardProps) => {
  const data = useMemo(() => {
    return {
      date: format(new Date(props.data.createdAt), "MMMM dd, yyyy"),
      name: props.data.name,
      position: props.data.position,
      avatar: props.data.avatar
        ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${props.data.avatar.url}`
        : "",
    };
  }, [props.data]);

  return { data };
};
