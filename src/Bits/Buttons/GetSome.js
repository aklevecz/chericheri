import React, { useContext } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import Button from ".";
import { NavContext } from "../../NavContext";

export default function ({ inverted = false }) {
  const history = useHistory();
  const location = useLocation();
  const product = location.pathname === "/oil" ? "OIL" : "WATER";
  const navContext = useContext(NavContext);
  // const handleClick = () => navContext.goToProduct();
  const handleClick = () => {
    if (product === "OIL") {
      history.push("/");
    } else {
      history.push("/oil");
    }
  };
  const color = inverted ? "black" : "white";
  const background = inverted ? "white" : "black";
  return (
    <Button color={color} background={background} onClick={handleClick}>
      {product === "OIL" ? "WATER" : "OIL"}
    </Button>
  );
}
