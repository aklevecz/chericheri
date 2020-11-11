import React, { createContext, useEffect, useState } from "react";

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

const SERVER_URL = "https://cheri-server.glitch.me";
export default function ({ children }) {
  const [metaphors, setMetaphors] = useState([]);
  const addMetaphor = (metaphor) => {
    fetch(`${SERVER_URL}/add-metaphor`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ metaphor }),
    });
    const duplicate = metaphors.find((m) => m === metaphor);
    if (duplicate) return alert("already there");
    // find first open slot -- TEST ONLY
    const openSlotItem = metaphors.find((m) => parseInt(m));
    const slotIndex = metaphors.indexOf(openSlotItem);

    metaphors[slotIndex] = metaphor;
    setMetaphors(metaphors);
  };
  useEffect(() => {
    setMetaphors(testMetaphors);
  }, []);
  return (
    <MetaContext.Provider value={{ addMetaphor, metaphors }}>
      {children}
    </MetaContext.Provider>
  );
}
