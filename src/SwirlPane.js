import React from "react";
import SVG from "react-inlinesvg";

export default function ({ file }) {
  return <SVG src={require(`./${file}.svg`)}></SVG>;
}
