"use client";

import dynamic from "next/dynamic";

import { useContext } from "react";

const RoleOverlay = dynamic(() =>
  import("@/overlays/role").then((mod) => mod.RoleOverlay),
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
      <RoleOverlay
        open={
          modalContext?.overlay === "businesses" ||
          modalContext?.overlay === "individuals" ||
          modalContext?.overlay === "investors"
        }
        onClose={() => modalContext?.setOverlay(null)}
      />
    </>
  );
};
