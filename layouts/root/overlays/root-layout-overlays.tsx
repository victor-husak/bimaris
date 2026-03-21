"use client";

import { useContext } from "react";
import dynamic from "next/dynamic";

const RoleOverlay = dynamic(() =>
  import("@/overlays/role").then((mod) => mod.RoleOverlay),
);

import { ModalContext } from "@/contexts/modal";

import type { ServiceShort } from "@/types/services";
import type { BalticShort } from "@/types/baltics";

export type RootLayoutOverlaysProps = {
  servicesBusinesses: ServiceShort[];
  servicesIndividuals: ServiceShort[];
  servicesInvestors: ServiceShort[];
  baltics: BalticShort[];
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
        servicesBusinesses={props.servicesBusinesses}
        servicesIndividuals={props.servicesIndividuals}
        servicesInvestors={props.servicesInvestors}
        baltics={props.baltics}
        type={
          modalContext?.overlay as "businesses" | "individuals" | "investors"
        }
        onClose={() => modalContext?.setOverlay(null)}
      />
    </>
  );
};
