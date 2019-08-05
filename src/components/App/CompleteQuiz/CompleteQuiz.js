// modules
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

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
  medium_space_1
} from "../../../~reusables/variables/spacing";
import { support } from "../../../~reusables/variables/colors";
import { body_1 } from "../../../~reusables/variables/font-sizes";
import {
  ButtonPrimary,
  ButtonTertiary
} from "../../../~reusables/atoms/Buttons";
import AlertModal from "../../../~reusables/molecules/AlertModal";

const CompleteQuiz = props => {
  const {
    match,
    getQuizAndQsByUUID,
    user,
    selectedQuiz,
    completeQuiz,
    completedQuiz,
    fetchCompletedQuiz,
    clearQuizState
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

  console.log(completedQuiz);

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
  }, [selectedQuiz]);

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
          <div className="input-radio" key={Object.keys(answer)[0]}>
            <input
              type="radio"
              id={Object.keys(answer)[0]}
              value={Object.keys(answer)[0]}
              name="quiz"
              checked={selectedRadio === Object.keys(answer)[0]}
              onChange={e => setSelectedRadio(e.target.value)}
            />
            <label htmlFor={Object.keys(answer)[0]}>
              {Object.values(answer)[0]}
            </label>
          </div>
        );
      }
      return null;
    });
  };

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
    completeQuiz(studentQuiz, match.params.id);
  };

  return (
    <StyledCompleteQuiz>
      <div className="quiz-header">
        <p className="question">{question.question}</p>
        <p className="number">
          {selectedQuiz && quizLength <= index ? quizLength : index}/
          {selectedQuiz ? quizLength : ""}
        </p>
      </div>
      <div className="quiz-body">
        {modal && (
          <AlertModal
            closeModal={setModal}
            heading={`You got ${Math.round((score / quizLength) * 100)}%`}
            paragraph="Lorem ipsum"
          />
        )}
        <form>{renderInputs()}</form>
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
      </div>
    </StyledCompleteQuiz>
  );
};

const StyledCompleteQuiz = styled.div`
  margin: ${medium_space_2} ${large_space};
  display: flex;
  flex-direction: column;

  .quiz-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .question {
      font-size: ${body_1};
    }
    .number {
      color: ${support};
    }
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
    selectedQuiz: state.quiz.selectedQuiz,
    completedQuiz: state.quiz.completedQuiz
  };
}

export default connect(
  mapStateToProps,
  { getQuizAndQsByUUID, completeQuiz, fetchCompletedQuiz, clearQuizState }
)(CompleteQuiz);
