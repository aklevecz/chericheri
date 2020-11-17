import React, { useState } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
import MetaLibConfirm from "./MetaLibConfirm";
import Over21 from "./Over21";

const Background = styled.div`
  position: fixed;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  z-index: 99;
  opacity: 0.5;
  background: white;
`;

const state = {
  open: false,
  close: () => {},
};

export const PopupContext = React.createContext(state);

export default function ({ children }) {
  const [open, setOpen] = useState(false);
  const [pop, setPop] = useState(undefined);
  const [content, setContent] = useState({});
  const [callback, setCallback] = useState({});

  const openPopup = (type) => {
    setPop(type);
    setOpen(true);
  };

  const clear = () => {
    setOpen(false);
    setPop(undefined);
  };

  const close = () => {
    setTimeout(clear, 1000);
  };

  return (
    <PopupContext.Provider
      value={{
        callback,
        setCallback,
        content,
        setContent,
        open,
        close,
        setPop,
        pop,
        openPopup,
      }}
    >
      {children}
      <Popup />
    </PopupContext.Provider>
  );
}

export function Popup() {
  return createPortal(
    <PopupContext.Consumer>
      {(popup) => (
        <div style={{ display: popup.open ? "block" : "none" }}>
          <Background /> {popup.pop === "21" && <Over21 />}
          {popup.pop === "metalib-confirm" && <MetaLibConfirm />}
        </div>
      )}
    </PopupContext.Consumer>,
    document.getElementById("portal")
  );
}
