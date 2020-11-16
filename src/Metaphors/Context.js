import React, { createContext, useEffect, useState } from "react";
import { getMetaphors, sendMetaphor } from "./fetchers";

const shape = { metaphors: [] };

export const MetaContext = createContext(shape);

const testMetaphors = [
  "cheri cheri feels like my pussy is purring",
  "1",
  "2",
  "3",
  "4",
  "5",
];

for (let i = 6; i < 100; i++) {
  testMetaphors.push(`${i}`);
}

export default function ({ children }) {
  const [metaphors, setMetaphors] = useState([]);
  const addMetaphor = (metaphor) => {
    const duplicate = metaphors.find((m) => m === metaphor);
    if (duplicate) return alert("already there");
    sendMetaphor(metaphor).then(updateMetaphors);
    return;
    // find first open slot -- TEST ONLY
    const openSlotItem = metaphors.find((m) => parseInt(m));
    const slotIndex = metaphors.indexOf(openSlotItem);

    metaphors[slotIndex] = metaphor;
    setMetaphors(metaphors);
  };

  const updateMetaphors = () => {
    getMetaphors().then((data) => {
      const metaphors = data.map((row) => row.metaphor);
      //   if (metaphors.length < 5) {
      //     for (let i = 6; i < 100; i++) {
      //       metaphors.push(`${i}`);
      //     }
      //   }
      setMetaphors(metaphors);
    });
  };
  useEffect(() => {
    updateMetaphors();
    // setMetaphors(testMetaphors);
  }, []);
  return (
    <MetaContext.Provider value={{ addMetaphor, metaphors }}>
      {children}
    </MetaContext.Provider>
  );
}
