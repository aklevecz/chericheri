import React, { useContext, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { MetaContext } from "./Context";

const Container = styled.div`
  color: white;
  background: black;
  display: flex;
  padding: 40px;
  text-transform: capitalize;
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
  text-transform: capitalize;
  background: black;
  border: white solid;
  color: white;
  padding: 0;
  margin-top: 24px;
  font-size: 1.6rem;
  cursor: pointer;
  width: 100px;
  height: 54px; ;
`;

const verbs = ["is", "feels", "smells", "tastes", "tingles"];
const SUBMITTED = "SUBMITTED";
export default function () {
  const addMetaphor = useContext(MetaContext).addMetaphor;
  const [verb, setVerb] = useState(undefined);
  const [metaphor, setMetaphor] = useState("");
  const inputRef = useRef();
  const containerRef = useRef();

  const selectVerb = (e) => setVerb(e.target.id);
  const handleChange = (e) => setMetaphor(e.target.value);

  const handleAdd = () => {
    addMetaphor(`cheri cheri ${verb} like ${metaphor}`);
    setVerb(SUBMITTED);
  };

  useEffect(() => {
    if (verb === SUBMITTED) {
      containerRef.current.style.opacity = 0;
      containerRef.current.style.height = 0;
      setTimeout(() => (containerRef.current.style.display = "none"), 1500);
      return;
    }
    // if (verb) {
    //   inputRef.current.focus();
    // }
  }, [verb]);

  return (
    <Container ref={containerRef}>
      {/* <form onClick={(e) => e.preventDefault()}> */}
      <Wrapper>
        <Heading>Add a metaphor</Heading>
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
        <Inputs className={verb ? "shown" : "hidden"}>
          <Like>like</Like>
          <Input
            ref={inputRef}
            onChange={handleChange}
            name="metaphor"
            id="metaphor"
          ></Input>
          <div>
            <Button onClick={handleAdd}>add</Button>
          </div>
        </Inputs>
      </Wrapper>
      {/* </form> */}
    </Container>
  );
}
