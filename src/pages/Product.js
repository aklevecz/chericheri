import React from "react";
import styled from "styled-components";
import Product from "../Product";
import { animated, useSpring } from "react-spring";
const Container = styled.div`
  width: 100%;
`;

export default function () {
  const props = useSpring({
    transform: "translateX(0%)",
    from: { transform: "translateX(100%)" },
  });
  return (
    <Container>
      <animated.div style={props}>
        <Product />
      </animated.div>
    </Container>
  );
}
