// modules
import React, { useState } from "react";
import styled from "styled-components";

// components/functions
import { LineInput } from "../../../~reusables/atoms/Inputs";

// styles
import {
  medium_space_2,
  medium_space_1,
  xs_space,
  small_space,
  medium_space_3
} from "../../../~reusables/variables/spacing";
import { text, headings, primary } from "../../../~reusables/variables/colors";
import {
  TextButton,
  ButtonTertiary,
  ButtonPrimary
} from "../../../~reusables/atoms/Buttons";
import DeleteModal from "../../../~reusables/molecules/DeleteModal";

const QuizBody = props => {
  const { selectedQuiz, selectedQuestion } = props;
  const [modal, setModal] = useState(false);
  const [question, setQuestion] = useState(
    selectedQuestion ? selectedQuestion.question : ""
  );
  const [answer, setAnswer] = useState(
    selectedQuestion ? selectedQuestion.answer : ""
  );
  const [possAnswer1, setpossAnswer1] = useState(
    selectedQuestion ? selectedQuestion.p_answer1 : ""
  );
  const [possAnswer2, setpossAnswer2] = useState(
    selectedQuestion ? selectedQuestion.p_answer2 : ""
  );
  const [possAnswer3, setpossAnswer3] = useState(
    selectedQuestion ? selectedQuestion.p_answer3 : ""
  );

  return (
    <StyledQuizBody>
      {modal && (
        <DeleteModal
          // functionCb={deleteUser}
          closeModal={setModal}
          heading="Lorem ipsum lorem ipsum"
          paragraph="Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum."
        />
      )}
      <div className="create">
        <h4 className="label">Questions</h4>

        <LineInput
          placeholder="Start typing your question..."
          value={question}
          onChange={e => setQuestion(e.target.value)}
        />
        <h4 className="label">Answers</h4>
        <div className="correct">
          <div className="indicator" />
          <LineInput
            value={answer}
            onChange={e => setAnswer(e.target.value)}
            placeholder="Correct option"
          />
        </div>
        <div className="incorrect">
          <div className="indicator" />
          <LineInput
            value={possAnswer1}
            onChange={e => setpossAnswer1(e.target.value)}
            placeholder="Incorrect option"
          />
        </div>
        <div className="incorrect">
          <div className="indicator" />
          <LineInput
            value={possAnswer2}
            onChange={e => setpossAnswer2(e.target.value)}
            placeholder="Incorrect option"
          />
        </div>
        <div className="incorrect">
          <div className="indicator" />
          <LineInput
            value={possAnswer3}
            onChange={e => setpossAnswer3(e.target.value)}
            placeholder="Incorrect option"
          />
        </div>
        <section className="buttons">
          <TextButton color="#DA2640" onClick={() => setModal(true)}>
            Delete Question
          </TextButton>
          <ButtonTertiary>Save Question</ButtonTertiary>
        </section>
      </div>
      <div className="view">
        <h4>Questions on this quiz</h4>
        <ul>
          {selectedQuiz.questions.map(question => {
            return <li key={question.id}>{question.question}</li>;
          })}
        </ul>
        <ButtonPrimary>New Question</ButtonPrimary>
      </div>
    </StyledQuizBody>
  );
};

const StyledQuizBody = styled.div`
  display: flex;
  justify-content: space-between;
  background: #ffffff;
  box-shadow: 0px 3px 8px rgba(56, 105, 160, 0.25);
  padding: ${medium_space_2} ${medium_space_1};
  border-radius: 8px;

  .correct,
  .incorrect {
    display: flex;
    input {
      width: 100%;
    }

    .indicator {
      height: 16px;
      width: 16px;
      border-radius: 50%;
      margin-right: ${small_space};
      margin-top: 12px;
    }
  }

  .correct .indicator {
    background: ${primary};
  }

  .incorrect .indicator {
    background: #bb0000;
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

  .create {
    flex: 1 1 300px;
    display: flex;
    flex-direction: column;
  }

  .view {
    margin-left: ${medium_space_3};
    display: flex;
    flex-direction: column;
    align-items: center;

    ul li {
      color: ${text};
      margin-bottom: ${medium_space_2};
      text-decoration: underline;
      cursor: pointer;
    }
  }

  @media only screen and (max-width: 999px) {
    flex-direction: column;
    justify-content: center;

    .create {
      order: 1;
    }

    .view {
      order: 0;
      margin-left: 0;
      margin-top: ${small_space};
    }
  }
`;

export default QuizBody;
