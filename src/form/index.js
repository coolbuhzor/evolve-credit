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
        <div className="evolve-test-div" onClick={handleClose}>
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.2929 13.7071C12.6834 14.0976 13.3166 14.0976 13.7071 13.7071C14.0976 13.3166 14.0976 12.6834 13.7071 12.2929L8.41422 7L13.7071 1.70711C14.0976 1.31658 14.0976 0.683418 13.7071 0.292893C13.3166 -0.097631 12.6834 -0.097631 12.2929 0.292893L7 5.58579L1.70711 0.292893C1.31658 -0.0976311 0.683418 -0.097631 0.292894 0.292893C-0.0976312 0.683418 -0.0976312 1.31658 0.292894 1.70711L5.58579 7L0.292894 12.2929C-0.0976306 12.6834 -0.0976306 13.3166 0.292894 13.7071C0.683418 14.0976 1.31658 14.0976 1.70711 13.7071L7 8.41421L12.2929 13.7071Z"
              fill="#71759D"
            />
          </svg>
        </div>
        {formState === 1 && <FormOne setFormState={setFormState} />}
        {formState === 2 && <FormTwo setFormState={setFormState} />}
        {formState === 3 && <FormThree setFormState={setFormState} />}
        {formState === 4 && (
          <div style={{ width: "200px", height: "200px", background: "#fff" }}>
            Transaction Complete
          </div>
        )}
      </ModalContainer>
    </Container>
  );
};

// const Form = Styled.div``

export default Index;
