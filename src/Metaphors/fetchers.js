// const SERVER_URL = "https://cheri-server.glitch.me";
const SERVER_URL = "https://relay.raptor.pizza/cheri";
export const getMetaphors = () =>
  fetch(`${SERVER_URL}/get-metaphors`).then((r) => r.json());

export const sendMetaphor = (metaphor) => {
  return fetch(`${SERVER_URL}/add-metaphor`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ metaphor }),
  });
};
