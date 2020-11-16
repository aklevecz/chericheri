import React, { createContext, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import "./animations.css";
import PopupProvider from "./Popup";

export const DeviceContext = createContext(undefined);

const DeviceProvider = ({ children }) => {
  const [isMobile, setIsMobile] = useState(undefined);

  const updateSize = () => {
    console.log("resize");
    if (window.innerWidth > window.innerHeight) {
      setIsMobile(false);
    } else {
      setIsMobile(true);
    }
  };
  useEffect(() => {
    updateSize();
    window.addEventListener("resize", updateSize);

    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return (
    <DeviceContext.Provider value={{ isMobile }}>
      {children}
    </DeviceContext.Provider>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <DeviceProvider>
      <PopupProvider>
        <App />
      </PopupProvider>
    </DeviceProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
