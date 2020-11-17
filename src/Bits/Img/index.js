import React, { useContext, useEffect, useRef } from "react";
import styled from "styled-components";
import whiteBox from "../../assets/white_box.png";
import Cherry from "../Loading/Cherry";
import { LoadingContext } from "../Loading/Context";

const Img = styled.img`
  width: 100%;
  opacity: 0;
  transition: opacity 2s;
`;

export default function () {
  const imgRef = useRef();
  const loadingContext = useContext(LoadingContext);
  useEffect(() => {
    loadingContext.startLoading();
    // imgRef.current.onload = () => {
    //   alert("img loaded");
    loadingContext.endLoading();
    imgRef.current.style.opacity = 1;
    imgRef.current.style.visibility = "visible";
    // };

    return () => {
      imgRef.current.opacity = 0;
      imgRef.current.visibility = "hidden";
    };
  }, []);
  return (
    <div
      style={{
        position: "relative",
        height:
          window.imgMeta["white-box"] &&
          window.preRenderWidth / window.imgMeta["white-box"].aspect,
        minHeight: 200,
      }}
    >
      <Img ref={imgRef} src={whiteBox} />
      {loadingContext.loading && <Cherry />}
    </div>
  );
}
