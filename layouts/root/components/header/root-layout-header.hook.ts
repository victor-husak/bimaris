import { useCallback, useContext } from "react";

import { ModalContext } from "@/contexts/modal";

export const useRootLayoutHeader = () => {
  const modalContext = useContext(ModalContext);

  const onTriggerOverfay = useCallback((key: string) => {
    modalContext?.setOverfay(key);
  }, []);

  return { onTriggerOverfay };
};
