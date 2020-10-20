import React, { useRef, useState } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";

const Background = styled.div`
  position: absolute;
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

const PopupProvider = ({ children }) => {
  const containerRef = useRef();
  const [open, setOpen] = useState(true);
  const close = () => {
    containerRef.current.style.opacity = 0;
    setTimeout(() => setOpen(false), 1000);
  };
  return (
    <PopupContext.Provider value={{ open, close }}>
      <div style={{ transition: "opacity 1s" }} ref={containerRef}>
        {children}
      </div>
    </PopupContext.Provider>
  );
};

export default function Popup({ children }) {
  return createPortal(
    <PopupProvider>
      <PopupContext.Consumer>
        {(popup) => (
          <div style={{ display: popup.open ? "block" : "none" }}>
            <Background /> {children}
          </div>
        )}
      </PopupContext.Consumer>
    </PopupProvider>,
    document.getElementById("portal")
  );
}
