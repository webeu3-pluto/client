// modules
import React from "react";
import styled from "styled-components";

// components/functions

// styles
import { support } from "../../../~reusables/variables/colors";

const QuizHeader = props => {
  const {
    setQuestion,
    selectedQuiz,
    setAnswerArray,
    index,
    quizLength,
    setIndex,
    setSelectedRadio,
    question,
    completedQuiz
  } = props;

  console.log(completedQuiz);

  const setQuestionAndAnswer = index => {
    setQuestion(selectedQuiz.questions[index]);
    setAnswerArray([
      { answer: selectedQuiz.questions[index].answer },
      { p_answer1: selectedQuiz.questions[index].p_answer1 },
      { p_answer2: selectedQuiz.questions[index].p_answer2 },
      { p_answer3: selectedQuiz.questions[index].p_answer3 }
    ]);
  };

  const onClickRightArrow = () => {
    if (index === quizLength) {
      // do nothing
    } else {
      setIndex(index + 1);
      setSelectedRadio("");
      setQuestionAndAnswer(selectedQuiz.questions.indexOf(question) + 1);
    }
  };

  const onClickLeftArrow = () => {
    if (index <= 1) {
      // do nothing
    } else {
      setIndex(index - 1);
      setSelectedRadio("");
      setQuestionAndAnswer(selectedQuiz.questions.indexOf(question) - 1);
    }
  };

  return (
    <StyledHeader>
      <p className="question">{question.question}</p>
      <div className="number">
        {completedQuiz &&  (
          <>
            <p>
              <i onClick={onClickLeftArrow} className={`material-icons`}>
                keyboard_arrow_left
              </i>
            </p>
            <p>
              <i onClick={onClickRightArrow} className={`material-icons`}>
                keyboard_arrow_right
              </i>
            </p>
          </>
        )}
        <p>
          {selectedQuiz && quizLength <= index ? quizLength : index}/
          {selectedQuiz ? quizLength : ""}
        </p>
      </div>
    </StyledHeader>
  );
};

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  .question {
    font-size: 18px;
  }
  .number {
    color: ${support};
    display: flex;
  }
`;

export default QuizHeader;
