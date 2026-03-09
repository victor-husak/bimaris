import { useCallback, useContext } from "react";

import { ModalContext } from "@/contexts/modal";

export const useRootLayoutHeader = () => {
  const modalContext = useContext(ModalContext);

  const onTriggerOverlay = useCallback((key: string) => {
    modalContext?.setOverlay(key);
  }, []);

  return { onTriggerOverlay, modalContext };
};
