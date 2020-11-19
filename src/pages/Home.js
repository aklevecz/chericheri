import React, { useContext, useEffect, useRef } from "react";
import { DeviceContext } from "..";
import GetSome from "../Bits/Buttons/GetSome";
import FallingCherries from "../Bits/FallingCherries";
import Metaphors from "../Metaphors";
import { Popup, PopupContext } from "../Popup";
import Over21 from "../Popup/Over21";
import blackBoxVideo from "../assets/black.mp4";
import Cherry from "../Bits/Loading/Cherry";
import Triangles from "../Bits/Triangles";
import { LoadingContext } from "../Bits/Loading/Context";

const aspect = 1024 / 688.02;

export default function () {
  const device = useContext(DeviceContext);
  const popup = useContext(PopupContext);
  const loadingContext = useContext(LoadingContext);
  const videoRef = useRef();
  const pageContainer = useRef();
  useEffect(() => {
    videoRef.current.onclick = () => {
      videoRef.current.play();
    };
    videoRef.current.src = blackBoxVideo;
    videoRef.current.onloadeddata = () => loadingContext.endLoading();
  }, []);

  return (
    <div style={{ transition: "transform 1s" }}>
      {/* <Nav /> */}
      {/* <Row src={cheri} /> */}
      {/* <Row src={jar} /> */}
      <div
        style={{
          height: window.innerWidth / aspect - 1,
          overflow: "hidden",
          position: "relative",
        }}
      >
        <video
          ref={videoRef}
          autoPlay
          loop
          playsInline
          // src={require("../assets/black.mp4")}
          style={{
            width: "100%",
            filter: "contrast(1.2)",
            marginBottom: -10,
            opacity: loadingContext.loading ? 0 : 1,
            transition: "opacity 1s",
          }}
        />
        {loadingContext.loading && <Cherry />}
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
      <div>
        <FallingCherries />
      </div>
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
