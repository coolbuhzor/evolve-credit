import React, { useState } from "react";

import { Container, ModalContainer } from "../styles";
import FormOne from "./form-one";
import FormThree from "./form-three";
import FormTwo from "./form-two";

const Index = ({ setShowForm }) => {
  const handleClose = () => {
    setShowForm(false);
  };
  const [formState, setFormState] = useState(1);

  return (
    <Container onClick={handleClose}>
      <ModalContainer
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {formState === 1 && <FormOne setFormState={setFormState} />}
        {formState === 2 && <FormTwo setFormState={setFormState} />}
        {formState === 3 && <FormThree setFormState={setFormState} />}
        {/* <FormOne setFormState={setFormState} formState={formState} /> */}
      </ModalContainer>
    </Container>
  );
};

// const Form = Styled.div``

export default Index;
