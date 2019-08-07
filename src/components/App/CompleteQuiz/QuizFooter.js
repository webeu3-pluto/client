// modules
import React from "react";
import styled from "styled-components";

// component/functions
import {
  ButtonPrimary,
  ButtonTertiary
} from "../../../~reusables/atoms/Buttons";

// styles
import { text } from "../../../~reusables/variables/colors";

const QuizFooter = props => {
  const {
    selectedRadio,
    index,
    quizLength,
    setScore,
    score,
    setIsNextQuestion,
    setIndex,
    selectedQuiz,
    setQuestion,
    setAnswerArray,
    setSelectedRadio,
    setModal,
    completeQuiz,
    match,
    user,
    completedQuiz,
    isNextQuestion
  } = props;

  const onSubmitRadio = e => {
    e.preventDefault();
    if (selectedRadio && index <= quizLength) {
      if (selectedRadio === "answer") {
        setScore(score + 1);
      }
      setIsNextQuestion(true);
      if (index + 1 > quizLength) {
        setIndex(index + 1);
      }
    } else {
      console.log("select an option");
    }
  };

  const onClickNextQuestion = e => {
    e.preventDefault();
    if (index !== quizLength) {
      setQuestion(selectedQuiz.questions[index]);
      setAnswerArray([
        { answer: selectedQuiz.questions[index].answer },
        { p_answer1: selectedQuiz.questions[index].p_answer1 },
        { p_answer2: selectedQuiz.questions[index].p_answer2 },
        { p_answer3: selectedQuiz.questions[index].p_answer3 }
      ]);
    }
    setIndex(index + 1);
    setSelectedRadio("");
    setIsNextQuestion(false);
  };

  const onSubmitQuiz = e => {
    e.preventDefault();
    const result = Math.round((score / quizLength) * 100);
    const studentQuiz = {
      quiz_id: selectedQuiz.id,
      student_id: user.id,
      result,
      completed: true
    };

    setModal(true);
    completeQuiz(studentQuiz, match.params.id, match.params.quiz_id);
  };

  return (
    <StyledFooter>
      {completedQuiz && <h3>Quiz Score: {completedQuiz.result}</h3>}
      {!isNextQuestion && !completedQuiz && (
        <ButtonPrimary onClick={onSubmitRadio}>Submit Question</ButtonPrimary>
      )}
      {isNextQuestion && index < quizLength && (
        <ButtonTertiary onClick={onClickNextQuestion}>
          Next Question
        </ButtonTertiary>
      )}
      {selectedQuiz && quizLength < index && (
        <ButtonPrimary onClick={onSubmitQuiz}>Submit Quiz</ButtonPrimary>
      )}
    </StyledFooter>
  );
};

const StyledFooter = styled.div`
  h3 {
    color: ${text};
    margin: 0;
  }
`;

export default QuizFooter;
