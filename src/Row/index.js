import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background: black;
  margin: 50px 0px;
  &:nth-child(odd) {
    background: white;
  }
`;

export default function Row({ src }) {
  return (
    <Container>
      <img
        width="50%"
        alt="hi"
        src={src}
        style={{ margin: "auto", display: "block" }}
      />
    </Container>
  );
}
