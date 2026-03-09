"use client";

import { createContext, useState, useCallback } from "react";

export interface LayoutsContextModalProps {
  children: React.ReactNode;
}

export interface ContextModalType {
  modal: string | null;
  overlay: string | null;
  setModal: (
    modal: string | null,
    data?: { [key: string]: object | string },
  ) => void;
  setOverlay: (
    overlay: string | null,
    data?: { [key: string]: object | string },
  ) => void;
  additionalData: { [key: string]: object | string };
}

export const ModalContext = createContext<ContextModalType | undefined>(
  undefined,
);

export function ContextModal(props: LayoutsContextModalProps) {
  const [modal, setModal] = useState<string | null>(null);
  const [overlay, setOverlay] = useState<string | null>(null);
  const [additionalData, setAdditionalData] = useState<{
    [key: string]: object | string;
  }>({});

  const setModalWithAdditionalData = useCallback(
    (_modal: string | null, data?: { [key: string]: object | string }) => {
      setModal(_modal);
      if (data) {
        setAdditionalData(data);
      } else if (_modal === null) {
        setAdditionalData({});
      }
    },
    [],
  );

  const setOverlayWithAdditionalData = useCallback(
    (_overlay: string | null, data?: { [key: string]: object | string }) => {
      setOverlay(_overlay);
      if (data) {
        setAdditionalData(data);
      } else if (_overlay === null) {
        setAdditionalData({});
      }
    },
    [],
  );

  return (
    <ModalContext.Provider
      value={{
        modal,
        overlay,
        setModal: setModalWithAdditionalData,
        setOverlay: setOverlayWithAdditionalData,
        additionalData,
      }}
    >
      {props.children}
    </ModalContext.Provider>
  );
}
