import React, { useContext } from "react";
import styled from "styled-components";
import { DeviceContext } from "..";
import whiteBox from "../assets/white_box.png";
import GetSome from "../Bits/Buttons/GetSome";
import Boxes from "./Boxes";

const Img = styled.img`
  width: 100%;
`;

export default function () {
  const device = useContext(DeviceContext);
  return (
    <div>
      <Img src={whiteBox} /> <Boxes />
    </div>
  );
}
