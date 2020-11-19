import React, { useState } from "react";
import IntersectionVisible from "react-intersection-visible";
import Svg from "react-inlinesvg";
export default function () {
  const [loaded, setLoaded] = useState(false);
  const load = () => {
    document
      .getElementById("water")
      .setAttribute("transform", "translate(-30.08 510.66) scale(0.31)");
    setLoaded(true);
  };

  const startFading = () => {
    let i = 0;
    const loop = () => {
      if (i === 5) return;
      const cherry = document.getElementById(`cherry${i + 1}`);
      if (!cherry) return;
      cherry.style.transition = "opacity 1s";
      cherry.style.opacity = 1;
      i = (i + 1) % 6;
      setTimeout(() => {
        cherry.style.opacity = 0;
        loop();
      }, 1000);
    };
    loop();
  };
  return (
    <IntersectionVisible
      onIntersect={() => {
        if (!loaded) return;
        startFading();
      }}
      // onHide={() => console.log("hide")}
      // onShow={() => console.log("show")}
    >
      <Svg src={require("./cherrypool.svg")} onLoad={load} />
    </IntersectionVisible>
  );
}
