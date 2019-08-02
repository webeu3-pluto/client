// modules
import React, { useState } from "react";
import styled from "styled-components";

// components/functions
import {
  TextButton,
  ButtonTertiary,
  ButtonPrimary
} from "../../../~reusables/atoms/Buttons";
import DeleteModal from "../../../~reusables/molecules/DeleteModal";

// styles
import {
  medium_space_2,
  medium_space_1,
  small_space,
  xs_space
} from "../../../~reusables/variables/spacing";
import { headings, primary } from "../../../~reusables/variables/colors";

const QuizStatus = props => {
  const { selectedQuiz } = props;
  const [modal, setModal] = useState(false);
  const [quizStatus, setQuizStatus] = useState(selectedQuiz.status);

  const renderStatus = quizStatus ? "Published" : "Draft";

  return (
    <StyledQuizStatus>
      {modal && (
        <DeleteModal
          // functionCb={deleteUser}
          closeModal={setModal}
          heading="Lorem ipsum lorem ipsum"
          paragraph="Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum."
        />
      )}
      <h4 className="label">
        Status: <span className={renderStatus}>{renderStatus}</span>
      </h4>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do. Lorem
        ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do. Lorem ipsum dolor si
      </p>
      <section className="buttons">
        <TextButton color="#DA2640" onClick={() => setModal(true)}>
          Delete Quiz
        </TextButton>
        <ButtonTertiary>Generate Quiz</ButtonTertiary>
        <ButtonPrimary>Publish Quiz</ButtonPrimary>
      </section>
    </StyledQuizStatus>
  );
};

const StyledQuizStatus = styled.div`
  background: #ffffff;
  box-shadow: 0px 3px 8px rgba(56, 105, 160, 0.25);
  padding: ${medium_space_2} ${medium_space_1};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 80%;

  .Published {
    color: ${primary};
  }

  .Draft {
    color: #bb0000;
  }

  h4 {
    color: ${headings};
  }

  .buttons {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap-reverse;

    button {
      margin: ${small_space} ${xs_space} 0 ${xs_space};
    }
  }
`;

export default QuizStatus;
