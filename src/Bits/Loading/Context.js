import React, { createContext, useEffect, useState } from "react";
import whiteBox from "../../assets/white_box.png";
export const LoadingContext = createContext({});
window.imgMeta = [];
window.preRenderWidth = window.innerWidth;
export default function ({ children }) {
  const [loading, setLoading] = useState(true);
  const [transition, setTransition] = useState({});
  useEffect(() => {
    const imgData = [
      { src: `${process.env.PUBLIC_URL}/cherry.svg`, name: "cherry" },
      { src: whiteBox, name: "white-box" },
    ];
    imgData.forEach((imgObject) => {
      const imgEl = new Image();
      imgEl.src = imgObject.src;
      imgEl.onload = () => {
        window.imgMeta = {
          ...window.imgMeta,
          [imgObject.name]: {
            src: imgObject.src,
            aspect: imgEl.width / imgEl.height,
          },
        };
      };
    });
    // const boxVideoEl = document.createElement("video");
    // boxVideoEl.src = boxVideo;
    // document.body.appendChild(boxVideoEl);
    // window.preloadedImages = [cherryImg, whiteBox];
  }, []);

  const endLoading = () => {
    setTransition("out");
  };

  useEffect(() => {
    if (transition === "done") {
      setLoading(false);
    }
  }, [transition]);

  const startLoading = () => setLoading(true);

  return (
    <LoadingContext.Provider
      value={{
        loading,
        endLoading,
        startLoading,
        transition,
        setTransition,
      }}
    >
      {children}
    </LoadingContext.Provider>
  );
}
