import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import GetSome from "../Bits/Buttons/GetSome";
import Cart from "../Bits/Icons/Cart";
import Menu from "./Menu";

const Container = styled.div``;

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  /* width: 74%; */
  margin: auto;
  height: 80px;
  z-index: 0;
  position: relative;
  color: white;
  transition: color 3.5s, fill 0.5s;
  z-index: 2;
  margin: 0px 23px 0px;
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

export default function Nav({ device }) {
  const [openNav, setOpenNav] = useState(false);
  const location = useLocation();
  const toggleOpenNav = () => setOpenNav(!openNav);
  useEffect(() => {
    setOpenNav(false);
  }, [location]);
  return (
    <Container>
      <Menu openNav={openNav} setOpenNav={setOpenNav} />
      <Wrapper>
        {/* <div
          style={{
            fontWeight: 800,
            color: openNav ? "white" : "black",
            transition: "color .3s",
            fontSize: "1.7rem",
            fontFamily: "'Open Sans', sans-serif",
          }}
        >
          CHERI CHERI
        </div> */}
        <div style={{ display: "flex" }}>
          {/* {location.pathname !== "/product" && !device.isMobile && <GetSome />} */}
          <Cart fill={openNav ? "white" : "black"} />
        </div>
      </Wrapper>
      <MenuButton onClick={toggleOpenNav}>
        <div onClick={toggleOpenNav} style={{ cursor: "pointer" }}>
          {!openNav ? "MENU" : "CLOSE"}
        </div>
      </MenuButton>
    </Container>
  );
}
