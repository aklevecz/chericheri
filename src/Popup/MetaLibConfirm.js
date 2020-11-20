import React, { useEffect, useContext, useState, useRef } from "react";
import { PopupContext } from "./";
import { Button, ButtonContainer, Container, Wrapper } from "./styles";

export default function MetaLibConfirm() {
  const [affirmation, setAffirmation] = useState(undefined);
  const popContext = useContext(PopupContext);

  const welcomeRef = useRef();

  const yes = () => setAffirmation(true);
  const no = () => setAffirmation(false);

  useEffect(() => {
    if (!popContext.open) return;
    if (affirmation) {
      popContext.callback.metalib();
      welcomeRef.current.style.opacity = 0;
      popContext.close();
    } else if (affirmation === false) {
      popContext.close();
    }
  }, [affirmation, popContext]);

  return (
    <Container>
      <div id="popup-wrapper">
        {affirmation === undefined && (
          <>
            <Wrapper>{popContext.content.metalib}</Wrapper>
            <ButtonContainer>
              <Button onClick={yes}>Send it</Button>
              <Button onClick={no}>Wait no!</Button>
            </ButtonContainer>
          </>
        )}
        {affirmation === true && (
          <>
            <Wrapper ref={welcomeRef}>Sent!</Wrapper>
          </>
        )}
        {affirmation === false && (
          <>
            <Wrapper>Okay!</Wrapper>
          </>
        )}
      </div>
    </Container>
  );
}
