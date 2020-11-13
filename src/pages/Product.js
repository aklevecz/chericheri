import React from "react";
import styled from "styled-components";
import Product from "../Product";

const Container = styled.div`
  width: 100%;
`;

export default function () {
  return (
    <Container>
      <Product />
    </Container>
  );
}
