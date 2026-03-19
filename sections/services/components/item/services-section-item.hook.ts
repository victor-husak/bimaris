import { useCallback } from "react";

import { useRouter } from "next/navigation";

import type { ServicesSectionItemProps } from "./services-section-item";

export const useServicesSectionItem = (props: ServicesSectionItemProps) => {
  const router = useRouter();

  const onNavigation = useCallback(() => {
    router.push(props.data.href);
  }, [props.data.href]);

  return { onNavigation };
};
