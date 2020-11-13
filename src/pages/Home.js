import React, { useEffect, useRef } from "react";
import Metaphors from "../Metaphors";

export default function () {
  const videoRef = useRef();
  useEffect(() => {
    videoRef.current.onclick = () => {
      videoRef.current.play();
    };
  }, []);

  return (
    <div>
      {/* <Nav /> */}
      {/* <Row src={cheri} /> */}
      {/* <Row src={jar} /> */}
      <div
        style={{ height: "100%", overflow: "hidden", marginBottom: "-10px" }}
      >
        <video
          ref={videoRef}
          autoPlay
          loop
          playsInline
          src={require("../assets/black.mp4")}
          style={{ width: "100%", filter: "contrast(1.2)" }}
        />
      </div>
      {/* <SwirlPane file="swirl1" />
      <div style={{ marginTop: -7 }}>
        <SwirlPane file="swirl2" />
      </div> */}
      <Metaphors />
      {/* <div
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          left: 0,
          top: 0,
          mixBlendMode: "difference",
        }}
      ></div> */}
      {/* <Popup>
        <Over21 />
      </Popup> */}
    </div>
  );
}
