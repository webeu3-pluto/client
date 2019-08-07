// modules
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

// functions/components
import {
  getQuizAndQsByUUID,
  completeQuiz,
  fetchCompletedQuiz,
  clearQuizState
} from "../../../store/actions/quizActions";

// styles
import {
  medium_space_2,
  large_space,
  small_space,
  medium_space_1,
} from "../../../~reusables/variables/spacing";
import QuizHeader from "./QuizHeader";
import QuizFooter from "./QuizFooter";
import QuizBody from "./QuizBody";

const CompleteQuiz = props => {
  const {
    match,
    getQuizAndQsByUUID,
    user,
    selectedQuiz,
    completeQuiz,
    completedQuiz,
    fetchCompletedQuiz,
    clearQuizState,
    history
  } = props;
  const [question, setQuestion] = useState("");
  const [answerArray, setAnswerArray] = useState([]);
  const [selectedRadio, setSelectedRadio] = useState("");
  const [isNextQuestion, setIsNextQuestion] = useState(false);
  const [modal, setModal] = useState(false);
  const [score, setScore] = useState(0);
  const [index, setIndex] = useState(1);

  let quizLength = 1;
  if (selectedQuiz) quizLength = selectedQuiz.questions.length;

  useEffect(() => {
    getQuizAndQsByUUID(match.params.id);
    fetchCompletedQuiz(match.params.quiz_id, match.params.student_id);
    return () => {
      clearQuizState();
    };
  }, []);

  useEffect(() => {
    if (!question && selectedQuiz) {
      setQuestion(selectedQuiz.questions[0]);
      setAnswerArray([
        { answer: selectedQuiz.questions[0].answer },
        { p_answer1: selectedQuiz.questions[0].p_answer1 },
        { p_answer2: selectedQuiz.questions[0].p_answer2 },
        { p_answer3: selectedQuiz.questions[0].p_answer3 }
      ]);
    }
  }, [question, selectedQuiz]);

  return (
    <StyledCompleteQuiz>
      <div className="quiz-header">
        <QuizHeader
          setQuestion={setQuestion}
          selectedQuiz={selectedQuiz}
          setAnswerArray={setAnswerArray}
          index={index}
          quizLength={quizLength}
          setIndex={setIndex}
          setSelectedRadio={setSelectedRadio}
          question={question}
          completedQuiz={completedQuiz}
        />
      </div>
      <div className="quiz-body">
        <QuizBody
          selectedRadio={selectedRadio}
          answerArray={answerArray}
          setSelectedRadio={setSelectedRadio}
          modal={modal}
          setModal={setModal}
          score={score}
          quizLength={quizLength}
          history={history}
          isNextQuestion={isNextQuestion}
          completedQuiz={completedQuiz}
        />
        <div className="footer">
          <QuizFooter
            selectedRadio={selectedRadio}
            index={index}
            quizLength={quizLength}
            setScore={setScore}
            score={score}
            setIsNextQuestion={setIsNextQuestion}
            setIndex={setIndex}
            selectedQuiz={selectedQuiz}
            setQuestion={setQuestion}
            setAnswerArray={setAnswerArray}
            setSelectedRadio={setSelectedRadio}
            setModal={setModal}
            completeQuiz={completeQuiz}
            match={match}
            user={user}
            completedQuiz={completedQuiz}
            isNextQuestion={isNextQuestion}
          />
        </div>
      </div>
    </StyledCompleteQuiz>
  );
};

const StyledCompleteQuiz = styled.div`
  margin: ${medium_space_2} ${large_space};
  display: flex;
  flex-direction: column;

  .footer {
    display: flex;
    justify-content: flex-end;
  }

  .quiz-header,
  .quiz-body {
    background: #ffffff;
    box-shadow: 0px 3px 8px rgba(56, 105, 160, 0.25);
    padding: ${medium_space_2} ${medium_space_1};
    border-radius: 8px;
  }

  .quiz-body {
    margin-top: ${medium_space_2};
  }

  @media only screen and (max-width: 999px) {
    margin: ${small_space};

    .quiz-body {
      margin-top: ${small_space};
    }
  }
`;

function mapStateToProps(state) {
  return {
    user: state.auth.user,
    quizzes: state.quiz.quizzes,
    selectedQuiz: state.quiz.selectedQuiz,
    completedQuiz: state.quiz.completedQuiz
  };
}

export default connect(
  mapStateToProps,
  { getQuizAndQsByUUID, completeQuiz, fetchCompletedQuiz, clearQuizState }
)(withRouter(CompleteQuiz));
