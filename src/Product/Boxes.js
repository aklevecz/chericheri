import React from "react";
import styled from "styled-components";
import Flower from "../Bits/Icons/Flower";
const Container = styled.div`
  display: flex;
  justify-content: space-around;
  /* border: solid black; */

  /* div {
    border: solid red;
  } */
`;

const Box = styled.div`
  width: 100%;
  height: 100%;
  padding: 30px;
`;

export default function () {
  return (
    <Container>
      <Box>
        <Flower />
      </Box>
      <Box>
        <Flower />
      </Box>
      <Box>
        <Flower />
      </Box>
    </Container>
  );
}
