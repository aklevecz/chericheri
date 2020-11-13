import React from "react";
import { useHistory } from "react-router-dom";
import Button from ".";

export default function ({ inverted = false }) {
  const history = useHistory();

  const handleClick = () => history.push("/product");

  const color = inverted ? "black" : "white";
  const background = inverted ? "white" : "black";
  return (
    <Button color={color} background={background} onClick={handleClick}>
      GET SOME
    </Button>
  );
}
