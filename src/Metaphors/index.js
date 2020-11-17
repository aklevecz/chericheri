import React from "react";
import MetaCube from "./MetaCube";
import MetaLib from "./MetaLib";
import Provider from "./Context";

export default function () {
  return (
    <div>
      <Provider>
        <MetaCube />
        <MetaLib />
      </Provider>
    </div>
  );
}
