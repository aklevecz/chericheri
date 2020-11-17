import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import Button from ".";
import { NavContext } from "../../NavContext";

export default function ({ inverted = false }) {
  const history = useHistory();
  const navContext = useContext(NavContext);
  const handleClick = () => navContext.goToProduct();

  const color = inverted ? "black" : "white";
  const background = inverted ? "white" : "black";
  return (
    <Button color={color} background={background} onClick={handleClick}>
      GET SOME
    </Button>
  );
}
