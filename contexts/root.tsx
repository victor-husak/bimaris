"use client";

import { createContext, useState } from "react";

export interface LayoutsContextRootProps {
  children: React.ReactNode;
}

export interface ContextRootType {
  isSearch: boolean;
  setIsSearch: (isSearch: boolean) => void;
}

export const RootContext = createContext<ContextRootType>({
  isSearch: false,
  setIsSearch: () => {},
});

export function ContextRoot(props: LayoutsContextRootProps) {
  const [isSearch, setIsSearch] = useState<boolean>(false);

  return (
    <RootContext.Provider
      value={{
        isSearch,
        setIsSearch,
      }}
    >
      {props.children}
    </RootContext.Provider>
  );
}
