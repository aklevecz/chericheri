import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Img from "../Bits/Img";
import Boxes from "./Boxes";
import Svg from "react-inlinesvg";
import Three from "../pages/Three";
// const PageContainer = styled.div`
//   transition: transform 1s;
//   transform: translateX(0%);
// `;

export default function () {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const page = document.getElementById("page");
    // setTimeout(() => (page.style.transform = "translateX(0%)"), 100);
  }, []);
  const load = () => setTimeout(() => setLoaded(true), 1000);
  return (
    // <PageContainer id="page">
    <div>
      {/* <Img /> */}
      {/* <Boxes /> */}
      {loaded && <Three />}
      <Svg src={require("./cherigrowfull.svg")} onLoad={load} />
    </div>
    // </PageContainer>
  );
}
