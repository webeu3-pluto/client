// modules
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

// components/functions
import {
  TextButton,
  ButtonTertiary,
  ButtonPrimary,
  ButtonSecondary
} from "../../../~reusables/atoms/Buttons";
import DeleteModal from "../../../~reusables/molecules/DeleteModal";
import { updateQuizStatus } from "../../../store/actions/quizActions";

// styles
import {
  medium_space_2,
  medium_space_1,
  small_space,
  xs_space
} from "../../../~reusables/variables/spacing";
import { headings, primary } from "../../../~reusables/variables/colors";

const QuizStatus = props => {
  const { selectedQuiz, updateQuizStatus } = props;
  const [modal, setModal] = useState(false);
  const [quizStatus, setQuizStatus] = useState(selectedQuiz.status);

  useEffect(() => {
    setQuizStatus(selectedQuiz.status);
  }, [selectedQuiz]);

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
        {quizStatus ? (
          <ButtonSecondary
            onClick={() => updateQuizStatus(false, selectedQuiz.uuid)}
          >
            Return to Draft
          </ButtonSecondary>
        ) : (
          <ButtonPrimary
            onClick={() => updateQuizStatus(true, selectedQuiz.uuid)}
          >
            Publish Quiz
          </ButtonPrimary>
        )}
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

export default connect(
  null,
  { updateQuizStatus }
)(QuizStatus);
