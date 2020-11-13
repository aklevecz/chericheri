import React from "react";
import styled from "styled-components";

const Button = styled.button`
  background: ${(props) => props.background};
  color: ${(props) => props.color};
  border: none;
  padding: 0px;
  border-radius: 40px;
  width: 170px;
  height: 39px;
  font-family: "Oswald";
  font-weight: 300;
  font-size: 18px;
  text-align: center;
`;

export default function ({
  children,
  background = "black",
  color = "white",
  onClick,
}) {
  return (
    <Button background={background} color={color} onClick={onClick}>
      {children}
    </Button>
  );
}
