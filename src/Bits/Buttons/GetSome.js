import React from "react";
import Button from ".";

export default function ({ inverted = false }) {
  const handleClick = () => alert("GET SOME");
  const color = inverted ? "black" : "white";
  const background = inverted ? "white" : "black";
  return (
    <Button color={color} background={background} onClick={handleClick}>
      GET SOME
    </Button>
  );
}
