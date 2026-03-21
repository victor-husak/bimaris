import { useMemo } from "react";

import { format } from "date-fns";

import type { PeopleCardProps } from "./people-card";

export const usePeopleCard = (props: PeopleCardProps) => {
  const data = useMemo(() => {
    const items = [
      props.data.email,
      "Book a meeting",
      props.data.linkedIn ? "LinkedIn" : "",
    ].filter((item) => !!item);

    return {
      date: format(new Date(props.data.createdAt), "MMMM dd, yyyy"),
      name: props.data.name,
      position: props.data.position,
      avatar: props.data.avatar
        ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${props.data.avatar.url}`
        : "",
      items: items,
    };
  }, [props.data]);

  return { data };
};
