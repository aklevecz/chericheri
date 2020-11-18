import React, { useState } from "react";
import IntersectionVisible from "react-intersection-visible";
import Svg from "react-inlinesvg";
export default function () {
  const [loaded, setLoaded] = useState(false);
  const load = () => {
    setLoaded(true);
  };

  const startFading = () => {
    console.log("starting fade");
    let i = 0;
    const loop = () => {
      if (i === 5) return;
      const cherry = document.getElementById(`cherry${i + 1}`);
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
      <Svg src={require("./fallingcherry.svg")} onLoad={load} />
    </IntersectionVisible>
  );
}
