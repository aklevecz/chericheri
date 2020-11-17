import React from "react";
import SVG from "react-inlinesvg";

export default function Cart({ width = 34, fill = "black" }) {
  return (
    <div style={{ width, fill, transition: "fill .3s" }}>
      <SVG src={require("../../assets/cart.svg")} />
    </div>
  );
}
