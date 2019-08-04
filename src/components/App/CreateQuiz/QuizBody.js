// modules
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

// components/functions
import { LineInput } from "../../../~reusables/atoms/Inputs";
import DeleteModal from "../../../~reusables/molecules/DeleteModal";
import {
  selectQuizQuestion,
  deleteQuestionOnQuiz,
  clickNewQuestion,
  saveQuestion,
  updateQuestion
} from "../../../store/actions/quizActions";

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

const QuizBody = props => {
  const {
    selectedQuiz,
    selectedQuestion,
    selectQuizQuestion,
    deleteQuestionOnQuiz,
    clickNewQuestion,
    saveQuestion,
    updateQuestion
  } = props;
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
  const [error, setError] = useState("");

  useEffect(() => {
    if (selectedQuestion) {
      setQuestion(selectedQuestion.question);
      setAnswer(selectedQuestion.answer);
      setpossAnswer1(selectedQuestion.p_answer1);
      setpossAnswer2(selectedQuestion.p_answer2);
      setpossAnswer3(selectedQuestion.p_answer3);
    } else {
      setQuestion("");
      setAnswer("");
      setpossAnswer1("");
      setpossAnswer2("");
      setpossAnswer3("");
    }
  }, [selectedQuestion]);

  const onClickSaveQuestion = () => {
    const questionObject = {
      question,
      p_answer1: possAnswer1,
      p_answer2: possAnswer2,
      p_answer3: possAnswer3,
      answer,
      quiz_id: selectedQuiz.id
    };
    if (
      !selectedQuestion &&
      question &&
      answer &&
      (possAnswer1 || possAnswer2 || possAnswer3)
    ) {
      saveQuestion(questionObject);
    } else if (
      question &&
      answer &&
      (possAnswer1 || possAnswer2 || possAnswer3)
    ) {
      updateQuestion(questionObject, selectedQuestion.id, selectedQuiz.uuid);
    } else {
      setError(
        "A quiz question must have one question, one correct answer and at least one incorrect answer"
      );
      setTimeout(() => {
        setError("");
      }, 10000);
    }
  };

  console.log(selectedQuestion, selectedQuiz);

  return (
    <StyledQuizBody>
      {modal && (
        <DeleteModal
          functionArg={{ uuid: selectedQuiz.uuid, id: selectedQuestion.id }}
          functionCb={deleteQuestionOnQuiz}
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
        {error && <p className="error">{error}</p>}
        <section className="buttons">
          {selectedQuestion ? (
            <TextButton color="#DA2640" onClick={() => setModal(true)}>
              Delete Question
            </TextButton>
          ) : null}
          <ButtonTertiary onClick={onClickSaveQuestion}>
            {selectedQuestion ? "Update Question" : "Save Question"}
          </ButtonTertiary>
        </section>
      </div>
      <div className="view">
        <h4>Questions on this quiz</h4>
        <ul>
          {selectedQuiz.questions.map(question => {
            return (
              <li
                onClick={() => selectQuizQuestion(question)}
                key={question.id}
              >
                {question.question}
              </li>
            );
          })}
        </ul>
        <ButtonPrimary onClick={clickNewQuestion}>New Question</ButtonPrimary>
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

  .error {
    text-align: center;
    color: #bb0000;
  }

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

export default connect(
  null,
  {
    selectQuizQuestion,
    deleteQuestionOnQuiz,
    clickNewQuestion,
    saveQuestion,
    updateQuestion
  }
)(QuizBody);
