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
import { animated, useSpring } from "react-spring";
const aspect = 1024 / 688.02;

export default function () {
  const device = useContext(DeviceContext);
  const popup = useContext(PopupContext);
  const loadingContext = useContext(LoadingContext);
  const videoRef = useRef();
  const pageContainer = useRef();
  const props = useSpring({ opacity: 1, from: { opacity: 0 } });
  useEffect(() => {
    videoRef.current.onclick = () => {
      videoRef.current.play();
    };
    videoRef.current.src = blackBoxVideo;
    videoRef.current.onloadeddata = () => loadingContext.endLoading();

    // setTimeout(
    //   () =>
    //     (document.getElementById("home").style.transform = "translateX(0%)"),
    //   100
    // );
  }, []);

  return (
    <animated.div
      style={props}
      id="home"
      className="page-container"
      // style={{ transition: "transform 1s", transform: "translateX(100%)" }}
    >
      {/* <Nav /> */}
      {/* <Row src={cheri} /> */}
      {/* <Row src={jar} /> */}
      <div
        style={{
          height:
            window.innerWidth > 500 ? 420 : window.innerWidth / aspect - 1,
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
    </animated.div>
  );
}
