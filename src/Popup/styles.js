import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
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
  transition: opacity 1s;
  /* opacity: ${(props) => props.opacity}; */
`;

export const Wrapper = styled.div`
  padding: 18px;
  font-size: 1.5rem;
  transition: opacity 1s;
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.button`
  border: none;
  background: black;
  color: white;
  margin: 15px;
  padding: 10px;
  width: 70px;
  font-weight: bold;
  border-radius: 20px;
  cursor: pointer;
  transition: background 0.5s;
  &:hover {
    background: red;
  }
`;
