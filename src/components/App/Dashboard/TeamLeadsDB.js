// modules
import React, { useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import uuid from "uuid";

// components/functions
import { ButtonTertiary } from "../../../~reusables/atoms/Buttons";
import QuizList from "../../../~reusables/molecules/QuizList";
import OverviewBlock from "../../../~reusables/molecules/OverviewBlock";
import {
  getQuizByTeamLeadId,
  createQuizWithQuestion
} from "../../../store/actions/quizActions";

// styles
import {
  medium_space_2,
  large_space,
  medium_space_3,
  small_space,
  medium_space_1
} from "../../../~reusables/variables/spacing";
import { support, text, headings } from "../../../~reusables/variables/colors";
import { heading_1, body_1 } from "../../../~reusables/variables/font-sizes";
import { getUserTLSummary } from "../../../store/actions/authActions";

const TeamLeadsDB = ({
  user,
  getQuizByTeamLeadId,
  quizzesFetched,
  createQuizWithQuestion,
  history,
  getUserTLSummary,
  userSummary
}) => {
  useEffect(() => {
    getQuizByTeamLeadId(user.id);
    getUserTLSummary();
  }, []);

  return (
    <StyledQuizView>
      <div className="wrapper">
        <div className="header">
          <h1>Hi {user.firstName}!</h1>
          <h4>QUIZZES</h4>
        </div>
        <p>Here are your recent quizzes</p>
        <div className="body">
          <QuizList
            firstHeading="Quiz"
            secondHeading="Completion Rate"
            thirdHeading="Avg. Score"
            fourthHeading="Status"
            listOfQuizzes={quizzesFetched}
            user={user}
            limit="3"
          />
        </div>
        <div className="footer">
          <ButtonTertiary
            onClick={() => createQuizWithQuestion(uuid(), user.id, history)}
          >
            Create Quiz
          </ButtonTertiary>
        </div>
      </div>
      <div className="kpi-wrapper">
        <OverviewBlock heading="Students" stat={userSummary.students || 0} />
        <OverviewBlock heading="Quizzes Published" stat={userSummary.quizzesCreated || 0} />
        <OverviewBlock heading="Completion Rate" stat={userSummary.completionRate || 0 } percentage />
        <OverviewBlock heading="Avg. Score" stat={userSummary.avgStudentScore || 0 } percentage />
      </div>
    </StyledQuizView>
  );
};

const StyledQuizView = styled.main`
  margin: ${medium_space_2} ${large_space};

  .kpi-wrapper {
    margin-top: ${medium_space_3};
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    div {
      flex: 1 1 100px;
      margin: ${small_space};
    }
  }

  .wrapper {
    padding: ${medium_space_3} ${medium_space_2} ${medium_space_1}
      ${medium_space_2};
    background: #ffffff;
    box-shadow: 0px 3px 8px rgba(56, 105, 160, 0.25);
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    & > p {
      font-size: ${body_1};
      color: ${text};
    }
  }

  .footer {
    margin: ${small_space} 0;
    button {
      float: right;
    }
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1 {
      font-size: ${heading_1};
      color: ${headings};
      margin-bottom: 0;
    }

    h4 {
      color: ${support};
      letter-spacing: 0.25rem;
    }
  }

  @media only screen and (max-width: 767px) {
    margin: ${small_space};

    .kpi-wrapper {
      margin-top: 0;
    }

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
    quizzesFetched: state.quiz.quizzes,
    userSummary: state.auth.userSummary
  };
}

export default connect(
  mapStateToProps,
  { getQuizByTeamLeadId, createQuizWithQuestion, getUserTLSummary }
)(withRouter(TeamLeadsDB));
