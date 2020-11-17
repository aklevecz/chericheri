import React, { useEffect } from "react";
import Svg from "react-inlinesvg";
export default function () {
  useEffect(() => {}, []);
  return (
    <div>
      <Svg
        src={require("./poolangles.svg")}
        onLoad={() => {
          document
            .getElementById("water")
            .setAttribute("transform", "translate(-20.03) scale(0.2 0.2)");
        }}
      />
    </div>
  );
}
// atranslate(0.03, -167) scale(.25 0.25)
