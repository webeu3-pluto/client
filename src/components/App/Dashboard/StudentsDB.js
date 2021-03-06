// modules
import React, { useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

// components/functions
import { ButtonTertiary } from "../../../~reusables/atoms/Buttons";
import QuizList from "../../../~reusables/molecules/QuizList";
import OverviewBlock from "../../../~reusables/molecules/OverviewBlock";
import { getQuizzesForStudent } from "../../../store/actions/quizActions";

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
import { getUserStSummary } from "../../../store/actions/authActions";

const StudentsDB = ({
  user,
  getQuizzesForStudent,
  quizzesFetched,
  getUserStSummary,
  userSummary
}) => {
  useEffect(() => {
    getQuizzesForStudent(user.id);
    getUserStSummary();
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
            secondHeading="Team Lead"
            thirdHeading="Quiz Score"
            fourthHeading="Status"
            listOfQuizzes={quizzesFetched.reverse()}
            user={user}
            limit="3"
            isStudent
          />
        </div>
        <div className="footer">
          <Link to={`app/quizzes/`}>
            <ButtonTertiary>View Quizzes</ButtonTertiary>
          </Link>
        </div>
      </div>
      <div className="kpi-wrapper">
        <OverviewBlock heading="Team Leads" stat={userSummary.teamleads} />
        <OverviewBlock heading="Quizzes" stat={userSummary.quizzesCreated} />
        <OverviewBlock heading="Completion Rate" stat={userSummary.completionRate || 0 } percentage />
        <OverviewBlock heading="Avg. Score" stat={userSummary.avgQuizScore || 0 } percentage />
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
  { getQuizzesForStudent, getUserStSummary }
)(StudentsDB);
