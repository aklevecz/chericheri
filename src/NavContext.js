import React, { createContext } from "react";
import { useHistory } from "react-router-dom";

export const NavContext = createContext(undefined);

const pageRoot = () => document.getElementById("page-root");

window.addEventListener("popstate", (e) => e.preventDefault());
export default function NavProvider({ children }) {
  const history = useHistory();
  const goToProduct = () => {
    pageRoot().style.transform = "translateX(-100%)";
    setTimeout(() => history.push("/product"), 1000);
  };

  const goBack = () => {
    pageRoot().style.transform = "translate(100%)";
    setTimeout(() => history.goBack());
  };

  return (
    <NavContext.Provider value={{ goBack, goToProduct }}>
      {children}
    </NavContext.Provider>
  );
}
