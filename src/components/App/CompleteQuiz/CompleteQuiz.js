// modules
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';

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
  xs_space
} from "../../../~reusables/variables/spacing";
import { support, primary, text } from "../../../~reusables/variables/colors";
import { body_2 } from "../../../~reusables/variables/font-sizes";
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
  }, [selectedQuiz]);

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
      if(Object.keys(answer)[0] === 'answer') answerToRender = answer.answer
    })
    return <p className="answer">Answer: {answerToRender}</p>;
  }

  return (
    <StyledCompleteQuiz>
      <div className="quiz-header">
        <p className="question">{question.question}</p>
        <div className="number">
          {completedQuiz && (
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
      </div>
      <div className="quiz-body">
        {modal && (
          <AlertModal
            closeModal={setModal}
            heading={`You got ${Math.round((score / quizLength) * 100)}%`}
            paragraph="Lorem ipsum"
            history={history}
          />
        )}
        <form>{renderInputs()}</form>
        {(isNextQuestion || completedQuiz) &&  renderAnswer()}
        <div className="footer">
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
      </div>
    </StyledCompleteQuiz>
  );
};

const StyledCompleteQuiz = styled.div`
  margin: ${medium_space_2} ${large_space};
  display: flex;
  flex-direction: column;

  .answer {
    font-size: ${body_2};
    color: ${primary};
  }

  .footer {
    display: flex;
    justify-content: flex-end;

    h3 {
      color: ${text};
      margin: 0;
    }
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

  .material-icons {
    margin-right: ${xs_space};
    cursor: pointer;
  }

  .quiz-header {
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
