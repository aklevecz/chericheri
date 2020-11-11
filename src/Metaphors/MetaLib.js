import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  color: white;
  background: black;
  display: flex;
  padding: 40px;
  form {
    margin: auto;
  }
`;

const Verbs = styled.div`
  display: flex;
  user-select: none;
  cursor: pointer;
  div {
    border: white solid;
    padding: 10px;
    margin: 10px;
    transition: background 1s;
    &:first-of-type {
      margin-left: 0px;
    }
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

const Input = styled.input`
  background: black;
  border: white solid;
  color: white;
  font-size: 1rem;
  padding: 10px;
`;

const Button = styled.button`
  background: black;
  border: white solid;
  color: white;
  padding: 10px;
  margin-top: 10px;
  font-size: 1rem;
`;

const verbs = ["is", "like"];

export default function () {
  const [verb, setVerb] = useState(undefined);
  const selectVerb = (e) => setVerb(e.target.id);

  return (
    <Container>
      <form onClick={(e) => e.preventDefault()}>
        <div>Add a metaphor</div>
        <Verbs>
          {verbs.map((verbOption) => (
            <div
              id={verbOption}
              onClick={selectVerb}
              style={{ background: verb === verbOption ? "red" : "black" }}
            >
              {verbOption}
            </div>
          ))}
        </Verbs>
        <Inputs className={verb ? "shown" : "hidden"}>
          <Input placeholder="add..."></Input>
          <div>
            <Button>add</Button>
          </div>
        </Inputs>
      </form>
    </Container>
  );
}
