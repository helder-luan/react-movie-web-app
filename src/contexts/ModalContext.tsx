import React, { createContext, PropsWithChildren, useState } from "react";

type PropsModalContext = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  source: string;
  setSource: React.Dispatch<React.SetStateAction<string>>;
};

const DEFAULT_VALUE = {
  open: false,
  setOpen: () => {},
  source: "",
  setSource: () => {},
};

const ModalContext = createContext<PropsModalContext>(DEFAULT_VALUE);

function ModalContextProvider({ children }: PropsWithChildren) {
  const [open, setOpen] = useState(DEFAULT_VALUE.open);
  const [source, setSource] = useState("");

  return (
    <ModalContext.Provider value={{ open, setOpen, source, setSource }}>
      {children}
    </ModalContext.Provider>
  );
}

export { ModalContextProvider };
export default ModalContext;
