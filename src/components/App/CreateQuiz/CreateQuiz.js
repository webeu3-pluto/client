// modules
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import styled from "styled-components";

// components/functions
import QuizDetails from "./QuizDetails";
import QuizStatus from "./QuizStatus";
import QuizBody from "./QuizBody";
import ComponentLoader from "../../../~reusables/molecules/ComponentLoader";
import { getQuizAndQsByUUID } from "../../../store/actions/quizActions";

// styles
import {
  medium_space_2,
  large_space,
  small_space
} from "../../../~reusables/variables/spacing";
import { primary } from "../../../~reusables/variables/colors";

const CreateQuiz = props => {
  const { user, selectedQuiz, selectedQuestion, getQuizAndQsByUUID, match, history } = props;
  console.log(props);

  useEffect(() => {
    getQuizAndQsByUUID(match.params.id, history)
  }, [])

  if (user.role === "Student") {
    return <Redirect to="/app" />;
  } else if (selectedQuiz) {
    return (
      <StyledCreateQuiz>
        <div className="quiz-header">
          <div className="quiz-details">
            <QuizDetails user={user} selectedQuiz={selectedQuiz} />
          </div>
          <div className="quiz-status">
            <QuizStatus user={user} selectedQuiz={selectedQuiz} />
          </div>
        </div>
        <div className="quiz-body">
          <QuizBody
            user={user}
            selectedQuiz={selectedQuiz}
            selectedQuestion={selectedQuestion}
          />
        </div>
      </StyledCreateQuiz>
    );
  } else {
    return <ComponentLoader color={primary} />;
  }
};

const StyledCreateQuiz = styled.div`
  margin: ${medium_space_2} ${large_space};
  display: flex;
  flex-direction: column;

  .quiz-body {
    margin-top: ${medium_space_2};
  }

  .quiz-header {
    display: flex;
    justify-content: space-between;
    align-items: stretch;

    & > div {
      flex: 1 1 200px;
    }

    .quiz-details {
      margin-right: ${small_space};
    }

    .quiz-status {
      margin-left: ${small_space};
    }
  }

  @media only screen and (max-width: 999px) {
    .quiz-header {
      flex-direction: column;
      justify-content: center;

      .quiz-details,
      .quiz-status {
        margin: 0;
      }
      .quiz-status {
        order: 0;
        margin-bottom: ${medium_space_2};
      }
      .quiz-details {
        order: 1;
      }
    }
  }

  @media only screen and (max-width: 767px) {
    margin: ${small_space};

    .quiz-body {
      margin-top: ${small_space};
    }

    .quiz-header .quiz-status {
      margin-bottom: ${small_space};
    }
  }
`;

function mapStateToProps(state) {
  return {
    user: state.auth.user,
    selectedQuiz: state.quiz.selectedQuiz,
    selectedQuestion: state.quiz.selectedQuestion
  };
}

export default connect(mapStateToProps, { getQuizAndQsByUUID })(CreateQuiz);
