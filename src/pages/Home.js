import React, { useContext, useEffect, useRef } from "react";
import { DeviceContext } from "..";
import GetSome from "../Bits/Buttons/GetSome";
import Metaphors from "../Metaphors";
import { Popup, PopupContext } from "../Popup";
import Over21 from "../Popup/Over21";

export default function () {
  const device = useContext(DeviceContext);
  const popup = useContext(PopupContext);
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
      <div style={{ height: "100%", overflow: "hidden" }}>
        <video
          ref={videoRef}
          autoPlay
          loop
          playsInline
          src={require("../assets/black.mp4")}
          style={{ width: "100%", filter: "contrast(1.2)", marginBottom: -10 }}
        />
      </div>
      {device.isMobile && (
        <div style={{ display: "block", margin: "28px auto" }}>
          <GetSome />
        </div>
      )}
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
    </div>
  );
}
