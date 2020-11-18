import React, { useEffect } from "react";
import Svg from "react-inlinesvg";
export default function () {
  useEffect(() => {}, []);
  return (
    <div>
      <Svg
        src={require("./triangleswater.svg")}
        onLoad={() => {
          document.getElementById("water");
          // .setAttribute("transform", "translate(-20.03) scale(0.2 0.2)");
        }}
      />
    </div>
  );
}
// atranslate(0.03, -167) scale(.25 0.25)
// https://media1.tenor.com/images/607c74e4c59a64da7db742c6d471ed6e/tenor.gif?itemid=14577501
