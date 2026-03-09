"use client";

import dynamic from "next/dynamic";

import { useContext } from "react";

const BusinessesOverlay = dynamic(() =>
  import("@/overlays/businesses").then((mod) => mod.BusinessesOverlay),
);

import { ModalContext } from "@/contexts/modal";

export type RootLayoutOverlaysProps = {
  // expertiseCategories: Array<ExpertiseCategory>;
};

export const RootLayoutOverlays: React.FC<RootLayoutOverlaysProps> = (
  props,
): React.JSX.Element => {
  const modalContext = useContext(ModalContext);

  return (
    <>
      <BusinessesOverlay
        open={
          modalContext?.overlay === "businesses" ||
          modalContext?.overlay === "private-clients" ||
          modalContext?.overlay === "investors"
        }
        onClose={() => modalContext?.setOverlay(null)}
      />
    </>
  );
};
