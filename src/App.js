import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import Row from "./Row";

function App() {
  const jar = "https://wendellen.github.io/chericheriINVERT/assets/jar1.jpg";
  const cheri =
    "https://wendellen.github.io/chericheriINVERT/assets/cheri_logo_hotpink_1.png";
  return (
    <div>
      <Nav />
      <Row src={cheri} />
      <Row src={jar} />
      <div
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          left: 0,
          top: 0,
          mixBlendMode: "difference",
        }}
      ></div>
    </div>
  );
}

export default App;
