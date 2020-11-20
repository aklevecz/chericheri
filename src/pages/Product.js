import React from "react";
import styled from "styled-components";
import Product from "../Product";
import { animated, useSpring } from "react-spring";
const Container = styled.div`
  width: 100%;
`;

export default function () {
  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 3000 },
  });

  return (
    <Container>
      <animated.div style={props}>
        <Product />
      </animated.div>
    </Container>
  );
}
