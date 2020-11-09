import React from "react";
import styled from "styled-components";

const Link = styled.a`
  color: white;
  font-family: Oswald;
`;

export default function ({ name }) {
  return <Link>{name.split("-").join(" ").toUpperCase()}</Link>;
}
