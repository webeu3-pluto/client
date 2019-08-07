// modules
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

// components/functions
import {
  TextButton,
  ButtonPrimary,
  ButtonSecondary
} from "../../../~reusables/atoms/Buttons";
import DeleteModal from "../../../~reusables/molecules/DeleteModal";
import {
  updateQuizStatus,
  deleteQuiz
} from "../../../store/actions/quizActions";

// styles
import {
  medium_space_2,
  medium_space_1,
  small_space,
  xs_space
} from "../../../~reusables/variables/spacing";
import { headings, primary } from "../../../~reusables/variables/colors";

const QuizStatus = props => {
  const { selectedQuiz, updateQuizStatus, deleteQuiz, history } = props;
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
          functionArg={{ uuid: selectedQuiz.uuid, history }}
          functionCb={deleteQuiz}
          closeModal={setModal}
          heading="Delete Quiz"
          paragraph="Are you sure you wish to delete this quiz? This action cannot be undone."
        />
      )}
      <h4 className="label">
        Status: <span className={renderStatus}>{renderStatus}</span>
      </h4>
      <p>
        Changing the status of this quiz to <strong>published</strong> will send it to your list
        of students. Similarly, changing the status to <strong>draft</strong> will remove it from
        their list.
      </p>
      <section className="buttons">
        <TextButton color="#DA2640" onClick={() => setModal(true)}>
          Delete Quiz
        </TextButton>
        {/* <ButtonTertiary>Generate Quiz</ButtonTertiary> */}
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
  { updateQuizStatus, deleteQuiz }
)(withRouter(QuizStatus));
