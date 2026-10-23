"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type ActiveModal = "reserve" | "order" | null;

interface ModalContextType {
  modal: ActiveModal;
  openReserve: () => void;
  openOrder: () => void;
  close: () => void;
}

const ModalContext = createContext<ModalContextType>({
  modal: null,
  openReserve: () => {},
  openOrder: () => {},
  close: () => {},
});

export function ModalProvider({ children }: { children: ReactNode }) {
  const [modal, setModal] = useState<ActiveModal>(null);
  return (
    <ModalContext.Provider
      value={{
        modal,
        openReserve: () => setModal("reserve"),
        openOrder: () => setModal("order"),
        close: () => setModal(null),
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export const useModal = () => useContext(ModalContext);
