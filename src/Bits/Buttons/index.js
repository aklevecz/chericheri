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
  font-weight: 300;
  font-size: 18px;
  text-align: center;
  margin: inherit;
  display: block;
  cursor: pointer;
  font-family: Oswald;
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
