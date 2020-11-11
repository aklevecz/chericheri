import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  background: black;
  color: white;
  text-align: center;
  .wrapper {
    padding: 10%;
  }
`;

const Scene = styled.div`
  width: 200px;
  height: 200px;
  perspective: 600px;
  margin: auto;
`;

const Cube = styled.div`
  cursor: grab;
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  transform: translateZ(-100px);
  transition: transform 1s;
  &.show-front {
    transform: translateZ(-100px) rotateY(0deg);
  }
  &.show-right {
    transform: translateZ(-100px) rotateY(-90deg);
  }
  &.show-back {
    transform: translateZ(-100px) rotateY(-180deg);
  }
  &.show-left {
    transform: translateZ(-100px) rotateY(90deg);
  }
  &.show-top {
    transform: translateZ(-100px) rotateX(-90deg);
  }
  &.show-bottom {
    transform: translateZ(-100px) rotateX(90deg);
  }
`;

const CubeFace = styled.div`
  position: absolute;
  width: 200px;
  height: 200px;
  padding-top: 50px;
  transition: color 1s;
  &.cube__face--front {
    transform: rotateY(0deg) translateZ(100px);
  }
  &.cube__face--right {
    transform: rotateY(90deg) translateZ(100px);
  }
  &.cube__face--back {
    transform: rotateY(180deg) translateZ(100px);
  }
  &.cube__face--left {
    transform: rotateY(-90deg) translateZ(100px);
  }
  &.cube__face--top {
    transform: rotateX(90deg) translateZ(100px);
  }
  &.cube__face--bottom {
    transform: rotateX(-90deg) translateZ(100px);
  }
`;

const metaphors = [
  "cheri cheri feels like my pussy is purring",
  "1",
  "2",
  "3",
  "4",
  "5",
];

for (let i = 6; i < 100; i++) {
  metaphors.push(`${i}`);
}

const rotations = [
  "show-back",
  "show-right",
  "show-left",
  "show-top",
  "show-bottom",
  "show-front",
];

const cubeFaceClasses = [
  "cube__face--back",
  "cube__face--right",
  "cube__face--left",
  "cube__face--top",
  "cube__face--bottom",
  "cube__face--front",
];

export default function () {
  const [showFace, setShowFace] = useState(0);
  const changeMetaphor = () => {
    const nextFace = (showFace + 1) % metaphors.length;
    setShowFace(nextFace);
  };
  const start = 5 * Math.floor(showFace / 5);
  const stop = showFace * Math.floor(showFace / 5) + 5;
  const metaSlice = metaphors.slice(start, stop);
  const cubeClass = rotations[showFace % 5];
  return (
    <Container>
      <Scene onClick={changeMetaphor}>
        <Cube className={cubeClass}>
          {metaSlice.map((metaphor, i) => {
            return (
              <CubeFace
                key={metaphor}
                style={{ color: showFace % 5 === i ? "white" : "black" }}
                className={cubeFaceClasses[i]}
              >
                {metaphor}
              </CubeFace>
            );
          })}
        </Cube>
      </Scene>
    </Container>
  );
}
