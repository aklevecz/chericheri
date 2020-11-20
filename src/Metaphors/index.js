import React from "react";
import MetaCube from "./MetaCube";
import MetaLib from "./MetaLib";
import Provider from "./Context";
import styled from "styled-components";

const MetaContainer = styled.div`
  @media screen and (min-width: 500px) {
    justify-content: space-evenly;
    display: flex;
    background: black;
    align-items: center;
  }
`;
export default function () {
  return (
    <MetaContainer>
      <Provider>
        <MetaCube />
        <MetaLib />
      </Provider>
    </MetaContainer>
  );
}
