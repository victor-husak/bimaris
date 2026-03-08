"use client";

import { createContext, useState, useCallback } from "react";

export interface LayoutsContextModalProps {
  children: React.ReactNode;
}

export interface ContextModalType {
  modal: string | null;
  overfay: string | null;
  setModal: (modal: string | null, data?: { [key: string]: object }) => void;
  setOverfay: (
    overfay: string | null,
    data?: { [key: string]: object | string },
  ) => void;
  additionalData: { [key: string]: object | string };
}

export const ModalContext = createContext<ContextModalType | undefined>(
  undefined,
);

export function ContextModal(props: LayoutsContextModalProps) {
  const [modal, setModal] = useState<string | null>(null);
  const [overfay, setOverfay] = useState<string | null>(null);
  const [additionalData, setAdditionalData] = useState<{
    [key: string]: object | string;
  }>({});

  const setModalWithAdditionalData = useCallback(
    (modal: string | null, data?: { [key: string]: object | string }) => {
      setModal(modal);
      if (!!data) setAdditionalData(data);
    },
    [],
  );

  const setOverfayWithAdditionalData = useCallback(
    (overfay: string | null, data?: { [key: string]: object | string }) => {
      setOverfay(overfay);
      if (!!data) setAdditionalData(data);
    },
    [],
  );

  return (
    <ModalContext.Provider
      value={{
        modal,
        overfay,
        setModal: setModalWithAdditionalData,
        setOverfay: setOverfayWithAdditionalData,
        additionalData,
      }}
    >
      {props.children}
    </ModalContext.Provider>
  );
}
