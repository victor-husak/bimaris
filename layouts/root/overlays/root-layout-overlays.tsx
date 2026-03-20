"use client";

import dynamic from "next/dynamic";

import { useContext, useEffect } from "react";

const RoleOverlay = dynamic(() =>
  import("@/overlays/role").then((mod) => mod.RoleOverlay),
);

import { ModalContext } from "@/contexts/modal";
import { useRouter, usePathname } from "@/i18n/routing";

export type RootLayoutOverlaysProps = {
  // expertiseCategories: Array<ExpertiseCategory>;
};

export const RootLayoutOverlays: React.FC<RootLayoutOverlaysProps> = (
  props,
): React.JSX.Element => {
  const router = useRouter();
  const pathname = usePathname();
  const modalContext = useContext(ModalContext);

  useEffect(() => {
    if (
      ["businesses", "individuals", "investors"].includes(
        modalContext?.overlay as string,
      )
    ) {
      router.replace({
        pathname: pathname,
        query: {
          overlay: modalContext?.overlay as string,
        },
      });
    }

    if (!modalContext?.overlay) {
      router.replace({
        pathname: pathname,
        query: {},
      });
    }
  }, [modalContext?.overlay, pathname, router]);

  return (
    <>
      <RoleOverlay
        open={
          modalContext?.overlay === "businesses" ||
          modalContext?.overlay === "individuals" ||
          modalContext?.overlay === "investors"
        }
        type={
          modalContext?.overlay as "businesses" | "individuals" | "investors"
        }
        onClose={() => modalContext?.setOverlay(null)}
      />
    </>
  );
};
