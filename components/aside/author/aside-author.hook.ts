import { useMemo } from "react";

import type { AsideAuthorProps } from "./aside-author";

export const useAsideAuthor = (props: AsideAuthorProps) => {
  const data = useMemo(() => {
    return {
      href: `/people/${props.data.slug}`,
      name: props.data.name,
      position: props.data.position,
      avatar:
        props.data.avatar &&
        `${process.env.NEXT_PUBLIC_STRAPI_URL}${props.data.avatar.url}`,
    };
  }, [props.data]);

  return { data };
};
