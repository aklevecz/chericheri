import React, { useState } from "react";
import IntersectionVisible from "react-intersection-visible";
import Svg from "react-inlinesvg";
export default function () {
  const [loaded, setLoaded] = useState(false);
  const [playing, setPlaying] = useState(false);
  const load = () => {
    document
      .getElementById("water")
      .setAttribute("transform", "translate(-30.08 510.66) scale(0.31)");
    setLoaded(true);
  };
  // TO DO
  // HOLD LAST CHERRY
  // SEND INTO POOL
  // FADE OUT
  const startFading = () => {
    setPlaying(true);
    let i = 0;

    const cherryWater = () => {
      const lastCherry = document.getElementById("cherry6");
      if (!lastCherry) return;
      lastCherry.style.transform = "translateY(600px)";
      lastCherry.style.opacity = 0;
      setPlaying(false);
      setTimeout(() => (lastCherry.style.transform = "translateY(0px)"), 2000);
    };

    const loop = () => {
      const cherry = document.getElementById(`cherry${i + 1}`);
      // shitty way to catch screen change
      if (!cherry) return;
      cherry.style.transition = "opacity 1s";
      cherry.style.opacity = 1;
      i = (i + 1) % 6;
      setTimeout(() => {
        cherry.style.opacity = 0;
        if (i === 5) {
          const nextCherry = document.getElementById("cherry6");
          if (!nextCherry) return;
          nextCherry.style.transition =
            "transform 1s ease-out, opacity 2s ease-out";
          nextCherry.style.opacity = 1;
          setTimeout(() => cherryWater(), 2000);
        } else {
          loop();
        }
      }, 1000);
    };
    loop();
  };
  return (
    <IntersectionVisible
      onIntersect={() => {
        if (!loaded || playing) return;
        startFading();
      }}
      // onHide={() => console.log("hide")}
      // onShow={() => console.log("show")}
    >
      <Svg src={require("./cherrypool.svg")} onLoad={load} />
    </IntersectionVisible>
  );
}
