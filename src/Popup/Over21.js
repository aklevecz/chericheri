import React, { useEffect, useContext, useState, useRef } from "react";
import styled from "styled-components";
import { PopupContext } from "./";

const Container = styled.div`
  position: absolute;
  border: 2px solid;
  left: 50%;
  top: 50%;
  width: 300px;
  height: 150px;
  margin-left: calc(300px / 2 * -1);
  margin-top: calc(150px / 2 * -1);
  background: white;
  text-align: center;
  z-index: 999;
  padding: 5px;
  border-radius: 20px;
`;

const Wrapper = styled.div`
  padding: 18px;
  font-size: 1.5rem;
  transition: opacity 1s;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Button = styled.button`
  border: none;
  background: black;
  color: white;
  margin: 15px;
  padding: 10px;
  width: 70px;
  font-weight: bold;
  border-radius: 20px;
  cursor: pointer;
`;
export default function Over21() {
  const [affirmation, setAffirmation] = useState(undefined);
  const popContext = useContext(PopupContext);

  const welcomeRef = useRef();

  const yes = () => setAffirmation(true);
  const no = () => setAffirmation(false);

  useEffect(() => {
    if (affirmation) {
      welcomeRef.current.style.opacity = 0;
      setTimeout(() => popContext.close(), 1000);
    } else if (affirmation === false) {
      console.log("frog");
      setTimeout(() => (window.location.href = "https://disney.com"), 1000);
    }
  }, [affirmation, popContext]);

  return (
    <Container>
      {affirmation === undefined && (
        <>
          <Wrapper>Are you over 21?</Wrapper>
          <ButtonContainer>
            <Button onClick={yes}>Yes</Button>
            <Button onClick={no}>No</Button>
          </ButtonContainer>
        </>
      )}
      {affirmation === true && (
        <>
          <Wrapper ref={welcomeRef}>Welcome!</Wrapper>
        </>
      )}
      {affirmation === false && (
        <>
          <Wrapper>Sorry, this site is too sexy for you</Wrapper>
        </>
      )}
    </Container>
  );
}
