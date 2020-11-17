import React, { useContext, useEffect, useRef } from "react";
import Svg from "react-inlinesvg";
import styled from "styled-components";
import { LoadingContext } from "./Context";

const Container = styled.div`
  position: absolute;
  width: 200px;
  height: 200px;
  left: 50%;
  top: 50%;
  margin-left: -100px;
  margin-top: -100px;
  transition: opacity 1s;
`;

export default function Cherry() {
  const containerRef = useRef();
  const frameRef = useRef();

  const loadingContext = useContext(LoadingContext);
  useEffect(() => {
    if (loadingContext.transition === "out") {
      containerRef.current.style.opacity = 0;
      setTimeout(() => loadingContext.setTransition("done"), 1000);
    }
  }, [loadingContext.transition]);

  useEffect(() => {
    return () => cancelAnimationFrame(frameRef.current);
  }, []);

  const loaded = () => {
    const container = containerRef.current;
    let counter = 0;
    const animate = () => {
      const wave = 1 + Math.sin(counter * 0.1) * 5;
      container.style.transform = `rotate3d(${wave}, ${1}, ${1}, ${counter}deg)`;
      counter++;
      frameRef.current = requestAnimationFrame(animate);
    };
    animate();
  };
  console.log(`${process.env.PUBLIC_URL}`);
  return (
    <Container ref={containerRef}>
      <Svg src={`${process.env.PUBLIC_URL}/cherry.svg`} onLoad={loaded} />
    </Container>
  );
}
