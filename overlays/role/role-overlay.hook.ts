import { useMemo, useState } from "react";

import type { RoleOverlayProps } from "./role-overlay";
import type { ServiceShort } from "@/types/services";

export const useRoleOverlay = (props: RoleOverlayProps) => {
  const [localType, setLocalType] = useState(props.type);

  if (props.open && props.type !== localType) {
    setLocalType(props.type);
  }

  const title = useMemo(() => {
    if (localType === "businesses") {
      return "Businesses";
    } else if (localType === "individuals") {
      return "Private clients";
    } else if (localType === "investors") {
      return "Investors";
    }

    return "";
  }, [localType]);

  const servicesForRole = useMemo(() => {
    let res: ServiceShort[] = [];

    if (localType === "businesses") {
      res = props.servicesBusinesses;
    } else if (localType === "individuals") {
      res = props.servicesIndividuals;
    } else if (localType === "investors") {
      res = props.servicesInvestors;
    }

    return res.slice(0, 4);
  }, [
    props.servicesBusinesses,
    props.servicesIndividuals,
    props.servicesInvestors,
    localType,
  ]);

  return { localType, servicesForRole, title };
};
