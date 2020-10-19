import React, { useEffect, useState } from "react";
import Nav from "./Nav";

function App() {
  const [filterNum, setFilterNum] = useState(0);
  useEffect(() => {
    console.log(filterNum);
    setTimeout(() => setFilterNum(360 + filterNum), 2000);
  }, [filterNum]);
  const jar = "https://wendellen.github.io/chericheriINVERT/assets/jar1.jpg";
  return (
    <div>
      <Nav />
      <img
        width="50%"
        alt="hi"
        src="https://wendellen.github.io/chericheriINVERT/assets/cheri_logo_hotpink_1.png"
        style={{ margin: "auto", display: "block" }}
      />
      <img
        width="50%"
        alt="hi"
        src={jar}
        style={{
          margin: "50px auto",
          display: "block",
          filter: `hue-rotate(${filterNum}deg)`,
        }}
      />
    </div>
  );
}

export default App;
