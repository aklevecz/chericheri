import React, { useState } from "react";
import styled from "styled-components";
import Cart from "../Bits/Icons/Cart";
import Menu from "./Menu";

const Container = styled.div``;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 74%;
  margin: auto;
  height: 80px;
  z-index: 0;
  position: relative;
  color: white;
  transition: color 3.5s, fill 0.5s;
  z-index: 2;
  margin: 12px 62px 0px;
`;

const MenuButton = styled.div`
  position: absolute;
  transform: rotate(-45deg);
  top: -26px;
  left: -52px;
  width: 120px;
  text-align: center;
  height: 30px;
  padding-top: 40px;
  line-height: 35px;
  background: black;
  color: white;
  font-size: 0.8rem;
  cursor: pointer;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-tap-highlight-color: transparent;
  z-index: 2;
`;

export default function Nav() {
  const [openNav, setOpenNav] = useState(true);
  const toggleOpenNav = () => setOpenNav(!openNav);
  return (
    <Container>
      <Menu openNav={openNav} />
      <MenuButton onClick={toggleOpenNav}>
        {!openNav ? "MENU" : "CLOSE"}
      </MenuButton>
      <Wrapper>
        <div
          style={{
            fontWeight: 800,
            color: openNav ? "white" : "black",
            transition: "color .3s",
            fontSize: "1.7rem",
            fontFamily: "'Open Sans', sans-serif",
          }}
        >
          CHERI CHERI
        </div>
        <Cart fill={openNav ? "white" : "black"} />
      </Wrapper>
    </Container>
  );
}
