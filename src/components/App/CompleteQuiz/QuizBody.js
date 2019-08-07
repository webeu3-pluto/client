// modules
import React from "react";
import styled from "styled-components";

// components/functions
import AlertModal from "../../../~reusables/molecules/AlertModal";

// styles
import { body_2 } from "../../../~reusables/variables/font-sizes";
import { primary } from "../../../~reusables/variables/colors";
import { medium_space_1 } from "../../../~reusables/variables/spacing";

const QuizBody = props => {
  const {
    selectedRadio,
    answerArray,
    setSelectedRadio,
    modal,
    setModal,
    score,
    quizLength,
    history,
    isNextQuestion,
    completedQuiz
  } = props;

  const shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };

  const renderInputs = () => {
    if (!selectedRadio) shuffleArray(answerArray);
    return answerArray.map(answer => {
      if (Object.values(answer)[0]) {
        return (
          <label className="input-radio" key={Object.keys(answer)[0]}>
            {Object.values(answer)[0]}
            <input
              id={Object.keys(answer)[0]}
              type="radio"
              checked={Object.keys(answer)[0] === selectedRadio}
              value={Object.keys(answer)[0]}
              name="quiz"
              onChange={e => setSelectedRadio(e.target.value)}
            />
            <span className="checkmark" />
          </label>
        );
      }
      return null;
    });
  };

  const renderAnswer = () => {
    let answerToRender;
    answerArray.forEach(answer => {
      if (Object.keys(answer)[0] === "answer") answerToRender = answer.answer;
    });
    return <p className="answer">Answer: {answerToRender}</p>;
  };

  return (
    <StyledQuizBody>
      {modal && (
        <AlertModal
          closeModal={setModal}
          heading={`You got ${Math.round((score / quizLength) * 100)}%`}
          paragraph="Lorem ipsum"
          history={history}
        />
      )}
      <form>{renderInputs()}</form>
      {(isNextQuestion || completedQuiz) && renderAnswer()}
    </StyledQuizBody>
  );
};

const StyledQuizBody = styled.div`
  .answer {
    font-size: ${body_2};
    color: ${primary};
  }

  .input-radio {
    display: block;
    position: relative;
    padding-left: 35px;
    margin-bottom: ${medium_space_1};
    cursor: pointer;
    font-size: 16px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    input {
      position: absolute;
      opacity: 0;
      cursor: pointer;
    }
  }

  .input-radio input:checked ~ .checkmark {
    background-color: ${primary};
  }

  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
    background-color: #eee;
    border-radius: 25%;
  }

  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }

  .input-radio input:checked ~ .checkmark:after {
    display: block;
  }

  .input-radio .checkmark:after {
    top: 9px;
    left: 9px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: white;
  }
`;

export default QuizBody;
