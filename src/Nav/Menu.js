import React from "react";
import styled from "styled-components";

const Background = styled.div`
  width: ${(props) => props.width + props.width * props.m}px;
  height: ${(props) => props.height + props.height * 0.0}px;
  background: white;
  position: fixed;
  z-index: 0;
  transform: rotate(45deg);
  transform-origin: top;
  top: ${(props) => props.side}px;
  left: ${(props) => props.side}px;
  transition: left 0.5s, top 0.5s;
  &.out {
    transition: left 1s, top 1s;
  }
  z-index: 1;
`;

const Content = styled.div`
  position: absolute;
  left: ${(props) => props.contentLeft}px;
  color: "black";
  top: 80px;
  transition: left 0.7s ease-in;
  &.out {
    transition: left 0.3s ease-out;
  }
  div {
    margin: 10px 0px;
  }
  z-index: 2;
`;

const Button = styled.button`
  background: black;
  color: white;
  border: none;
  padding: 14px;
  letter-spacing: 3px; ;
`;

export default function Menu({ openNav }) {
  const a = window.innerWidth;
  const b = window.innerHeight;
  const c = Math.sqrt(a * a + b * b);
  const mobileAspect = window.innerHeight > window.innerWidth;
  const side = openNav ? 0 : -c;
  const m = mobileAspect ? 0 : 0.5;
  return (
    <>
      <Background
        className={openNav ? "in" : "out"}
        width={c}
        height={c}
        side={side}
        m={m}
      />
      <Content
        className={openNav ? "in" : "out"}
        contentLeft={openNav ? 49 : -149}
      >
        <Button>ORDER SOME</Button>
        <div>Shop</div>
        <div>Faq</div>
        <div>About</div>
        <div>Contact</div>
      </Content>
    </>
  );
}
//-1956.103082px
