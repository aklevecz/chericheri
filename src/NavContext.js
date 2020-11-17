import React, { createContext } from "react";
import { useHistory } from "react-router-dom";

export const NavContext = createContext(undefined);

export default function NavProvider({ children }) {
  const history = useHistory();
  const goToProduct = () => {
    const pageRoot = document.getElementById("page-root");
    pageRoot.style.transform = "translateX(-100%)";
    setTimeout(() => history.push("/product"), 1000);
  };

  return (
    <NavContext.Provider value={{ goToProduct }}>
      {children}
    </NavContext.Provider>
  );
}
