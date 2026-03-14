import { useCallback } from "react";

import { useRouter } from "@/i18n/routing";

import type { PageLayoutHeaderSlidesItemProps } from "./page-layout-header-slides-item";

export const usePageLayoutHeaderSlidesItem = (
  props: PageLayoutHeaderSlidesItemProps,
) => {
  const router = useRouter();

  const onClick = useCallback(() => {
    if (props.data.href) {
      router.push(props.data.href);
    }
  }, [props.data.href, router]);

  return { onClick };
};
