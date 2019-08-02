// modules
import React, { useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import uuid from "uuid";

// components/functions
import { ButtonTertiary } from "../../../~reusables/atoms/Buttons";
import QuizList from "../../../~reusables/molecules/QuizList";
import { createQuizWithQuestion, getQuizByTeamLeadId } from "../../../store/actions/quizActions";

// styles
import {
  medium_space_2,
  large_space,
  medium_space_3,
  small_space,
  medium_space_1
} from "../../../~reusables/variables/spacing";
import { support } from "../../../~reusables/variables/colors";

const TeamLeadsQV = props => {
  const { history, createQuizWithQuestion, user, getQuizByTeamLeadId, quizzesFetched } = props;

  useEffect(() => {
    getQuizByTeamLeadId(user.id);
  }, [])

  return (
    <StyledQuizView>
      <div className="wrapper">
        <div className="header">
          <h4>QUIZZES</h4>
          <ButtonTertiary
            onClick={() => createQuizWithQuestion(uuid(), user.id, history)}
          >
            Create Quiz
          </ButtonTertiary>
        </div>
        <div className="body">
          <QuizList
            firstHeading="Quiz"
            secondHeading="Completion Rate"
            thirdHeading="Avg. Score"
            fourthHeading="Status"
            listOfQuizzes={quizzesFetched}
          />
        </div>
      </div>
    </StyledQuizView>
  );
};

const StyledQuizView = styled.main`
  margin: ${medium_space_2} ${large_space};

  background: #ffffff;
  box-shadow: 0px 3px 8px rgba(56, 105, 160, 0.25);
  border-radius: 8px;

  .wrapper {
    padding: ${medium_space_3} ${medium_space_2} ${medium_space_1}
      ${medium_space_2};
    display: flex;
    flex-direction: column;
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    h4 {
      color: ${support};
      letter-spacing: 0.25rem;
    }
  }

  @media only screen and (max-width: 767px) {
    margin: ${small_space};

    .wrapper {
      padding: ${medium_space_1} ${small_space};
    }

    .header {
      h4 {
        font-size: 14px;
        letter-spacing: 0.2rem;
      }
    }
  }
`;

function mapStateToProps(state) {
  return {
    quizzesFetched: state.quiz.quizzes
  }
}

export default connect(
  mapStateToProps,
  { createQuizWithQuestion, getQuizByTeamLeadId }
)(withRouter(TeamLeadsQV));
