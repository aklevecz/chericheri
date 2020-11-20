import React, { useContext, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Popup, { PopupContext } from "../Popup";
import { MetaContext } from "./Context";
import IntersectionVisible from "react-intersection-visible";

const Container = styled.div`
  color: white;
  background: black;
  display: flex;
  padding: 40px;
  /* text-transform: capitalize; */
  height: 530px;
  transition: opacity 1s, height 1s;
  form {
    margin: auto;
  }
`;

const Wrapper = styled.div`
  margin: 15%;
  width: 100%;
`;

const Heading = styled.div`
  font-size: 2rem;
  padding-bottom: 10px;
  text-transform: capitalize;
`;

const Verbs = styled.div`
  /* display: flex;
  flex-wrap: wrap; */
  display: grid;
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(75px, 1fr));
  width: 100%;
  user-select: none;
  cursor: pointer;
  div {
    border: white solid;
    padding: 10px;
    text-align: center;
    /* margin: 10px; */
    transition: background 1s;
    /* &:first-of-type {
      margin-left: 0px;
    } */
  }
`;

const Inputs = styled.div`
  transition: opacity 1s, transform 1s;
  &.hidden {
    opacity: 0;
    transform: translateY(-100px);
    visibility: hidden;
  }
  &.shown {
    opacity: 1;
  }
`;

const Like = styled.div`
  font-size: 30px;
  margin: 17px 0px;
`;

const Input = styled.input`
  background: black;
  border: white solid;
  color: white;
  font-size: 1.5rem;
  padding: 15px;
  width: 66%;
`;

const Button = styled.button`
  /* text-transform: capitalize; */
  background: black;
  border: white solid;
  color: white;
  padding: 0;
  margin-top: 24px;
  font-size: 1.6rem;
  cursor: pointer;
  width: 185px;
  height: 54px;
  font-family: Oswald;
`;

const verbs = ["is", "feels", "smells", "tastes", "tingles"];
const SUBMITTED = "SUBMITTED";
export default function () {
  const addMetaphor = useContext(MetaContext).addMetaphor;
  const popup = useContext(PopupContext);
  const [verb, setVerb] = useState(undefined);
  const [metaphor, setMetaphor] = useState("");
  const [showInput, setShowInput] = useState(false);
  const inputRef = useRef();
  const containerRef = useRef();

  const selectVerb = (e) => setVerb(e.target.id);
  const handleChange = (e) => setMetaphor(e.target.value);

  const handleAdd = () => {
    const metalib = `cheri cheri ${verb} like ${metaphor}`;
    popup.setContent({ metalib });
    popup.setCallback({
      metalib: () => {
        addMetaphor(metalib);
        setVerb(SUBMITTED);
      },
    });
    return popup.openPopup("metalib-confirm");
  };

  useEffect(() => {
    if (verb === SUBMITTED) {
      containerRef.current.style.opacity = 0;
      containerRef.current.style.height = 0;
      setTimeout(() => (containerRef.current.style.display = "none"), 1500);
      return;
    }
    if (verb) {
      inputRef.current.focus();
    }
  }, [verb]);

  return (
    <>
      <Container ref={containerRef}>
        <Wrapper>
          <Heading>cheri cheri</Heading>
          <IntersectionVisible onShow={() => setShowInput(true)}>
            <Verbs>
              {verbs.map((verbOption) => (
                <div
                  key={verbOption}
                  id={verbOption}
                  onClick={selectVerb}
                  style={{ background: verb === verbOption ? "red" : "black" }}
                >
                  {verbOption}
                </div>
              ))}
            </Verbs>
          </IntersectionVisible>
          <Inputs className={verb || showInput ? "shown" : "hidden"}>
            <Like>like</Like>
            <Input
              ref={inputRef}
              onChange={handleChange}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleAdd();
              }}
              name="metaphor"
              id="metaphor"
            ></Input>
            <div>
              <Button onClick={handleAdd}>add metaphor</Button>
            </div>
          </Inputs>
        </Wrapper>
      </Container>
    </>
  );
}
