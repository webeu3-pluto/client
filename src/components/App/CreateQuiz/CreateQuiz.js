// modules
import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import styled from "styled-components";
import {
  medium_space_2,
  large_space,
  small_space
} from "../../../~reusables/variables/spacing";
import QuizDetails from "./QuizDetails";

// components/functions

// styles

const CreateQuiz = props => {
  const { user } = props;
  if (user.role === "Student") {
    return <Redirect to="/app" />;
  } else {
    return (
      <StyledCreateQuiz>
        <div className="quiz-header">
          <div className="quiz-details">
            <QuizDetails />
          </div>
          <div className="quiz-status">
            <QuizDetails />
          </div>
        </div>
        <div className="quiz-body" />
      </StyledCreateQuiz>
    );
  }
};

const StyledCreateQuiz = styled.div`
  margin: ${medium_space_2} ${large_space};
  border: 1px solid red;
  display: flex;
  flex-direction: column;

  .quiz-header {
    display: flex;
    justify-content: space-between;

    div {
      flex: 1 1 200px;
    }

    .quiz-details {
      margin-right: ${small_space};
    }

    .quiz-status {
      margin-left: ${small_space};
    }
  }

  @media only screen and (max-width: 767px) {
    margin: ${small_space};
  }
`;

function mapStateToProps(state) {
  return {
    user: state.auth.user
  };
}

export default connect(mapStateToProps)(CreateQuiz);
