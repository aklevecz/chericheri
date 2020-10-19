import React, { useState } from "react";
import styled from "styled-components";
import Cart from "../Icons/Cart";
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
  background: white;
  font-size: 0.8rem;
  cursor: pointer;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-tap-highlight-color: transparent;
  z-index: 2;
`;

export default function Nav() {
  const [openNav, setOpenNav] = useState(false);
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
            fontWeight: "bold",
            color: openNav ? "black" : "white",
            transition: "color .3s",
          }}
        >
          CHERICHERI
        </div>
        <Cart fill={openNav ? "black" : "white"} />
      </Wrapper>
    </Container>
  );
}
