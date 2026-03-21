import { useRef, useState } from "react";

import { useLenis } from "lenis/react";

import { useDidMountEffect } from "@/hooks";

import type { OverlayLayoutProps } from "./overlay-layout";

export const useOverlayLayout = (props: OverlayLayoutProps) => {
  const nodeRef = useRef(null);

  const lenis = useLenis();

  useDidMountEffect(() => {
    if (!lenis) return;

    if (props.open) {
      lenis.stop();
    } else {
      lenis.start();
    }

    return () => lenis.start();
  }, [props.open]);

  return { nodeRef };
};
