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
`;

const Cube = styled.div`
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

const rotations = [
  "show-front",
  "show-right",
  "show-left",
  "show-top",
  "show-bottom",
];

const CubeFace = styled.div`
  position: absolute;
  width: 200px;
  height: 200px;
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

export default function () {
  const [showFace, setShowFace] = useState(0);
  const changeMetaphor = () => {
    const nextFace = (showFace + 1) % 4;
    console.log(rotations[nextFace]);
    setShowFace(nextFace);
  };
  return (
    <div>
      {/* {metaphors.map((metaphor) => (
        <div className="wrapper">{metaphor}</div>
      ))} */}
      <Scene onClick={changeMetaphor}>
        <Cube className={rotations[showFace]}>
          {metaphors.map((metaphor) => {
            return (
              <>
                <CubeFace className="cube__face--front">{metaphor[0]}</CubeFace>
                <CubeFace className="cube__face--back">{metaphor[1]}</CubeFace>
                <CubeFace className="cube__face--right">{metaphor[2]}</CubeFace>
                <CubeFace className="cube__face--left">{metaphor[3]}</CubeFace>
                <CubeFace className="cube__face--top">{metaphor[4]}</CubeFace>
                <CubeFace className="cube__face--bottom">
                  {metaphor[5]}
                </CubeFace>
              </>
            );
          })}
        </Cube>
      </Scene>
    </div>
  );
}
