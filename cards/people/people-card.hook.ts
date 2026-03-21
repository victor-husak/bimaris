import { useMemo } from "react";

import { format } from "date-fns";

import type { PeopleCardProps } from "./people-card";

export const usePeopleCard = (props: PeopleCardProps) => {
  const data = useMemo(() => {
    const items = [
      { title: props.data.email, href: `mailto:${props.data.email}` },
      { title: "Book a meeting", href: "/contact-us" },
    ];

    if (props.data.linkedIn) {
      items.push({ title: "LinkedIn", href: props.data.linkedIn });
    }

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
