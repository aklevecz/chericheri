import React from "react";
import styled from "styled-components";
import GetSome from "../Bits/Buttons/GetSome";
import Link from "./Link";

const Background = styled.div`
  width: ${(props) => props.width + props.width * props.m}px;
  height: ${(props) => props.height + props.height * 0.0}px;
  background: black;
  color: white;
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
  color: white;
  top: 94px;
  transition: left 0.5s ease-in;
  &.out {
    transition: left 0.1s ease-out;
  }
  z-index: 2;
  & div {
    font-weight: 300;
    font-size: 1.3rem;
  }
`;

const LinkGroup = styled.div`
  margin: 20px;
`;

const TextMe = () => (
  <div style={{ margin: 20 }}>
    <div>TEXT "🍒" TO</div>
    {/* <div>TO</div> */}
    <div>+1 (386) 968-2989</div>
  </div>
);

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
        contentLeft={openNav ? 49 : -200}
      >
        <GetSome inverted={true} />
        <LinkGroup>
          <div>
            <Link name="about" />
          </div>
          <div>
            <Link name="find-us" />
          </div>
        </LinkGroup>
        <LinkGroup>
          <div>
            <Link name="faq" />
          </div>
          <div>
            <Link name="blog" />
          </div>
        </LinkGroup>
        <LinkGroup>
          <div>
            <Link name="lookbook" />
          </div>
          <div>
            <Link name="tutorials" />
          </div>
        </LinkGroup>
        <LinkGroup>
          <div>
            <Link name="wholesale" />
          </div>
          <div>
            <Link name="terms" />
          </div>
        </LinkGroup>
        <LinkGroup>
          <div>
            <Link name="collabs" />
          </div>
          <div>
            <Link name="pr" />
          </div>
        </LinkGroup>
        <TextMe />
      </Content>
    </>
  );
}
//-1956.103082px
