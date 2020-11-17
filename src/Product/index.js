import React, { useEffect } from "react";
import styled from "styled-components";
import Img from "../Bits/Img";
import Boxes from "./Boxes";

const PageContainer = styled.div`
  transition: transform 1s;
  transform: translateX(100%);
`;

export default function () {
  useEffect(() => {
    const page = document.getElementById("page");
    setTimeout(() => (page.style.transform = "translateX(0%)"), 100);
  }, []);
  return (
    <PageContainer id="page">
      <Img />
      <Boxes />
    </PageContainer>
  );
}
