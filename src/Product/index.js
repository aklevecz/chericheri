import React from "react";
import styled from "styled-components";
import whiteBox from "../assets/white_box.png";
import Boxes from "./Boxes";

const Img = styled.img`
  width: 100%;
`;

export default function () {
  return (
    <div>
      <Img src={whiteBox} /> <Boxes />
    </div>
  );
}
