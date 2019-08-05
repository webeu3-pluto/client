// modules
import React from "react";
import { Route } from "react-router-dom";
import styled from "styled-components";
import { connect } from "react-redux";
import { compose } from "redux";

// components/functions
import Dashboard from "./Dashboard/Dashboard";
import Quizzes from "./Quizzes/Quizzes";
import People from "./People/People";
import Profile from "./Profile/Profile";
import Sidebar from "../../~reusables/layout/Sidebar";
import AppHeader from "../../~reusables/layout/AppHeader";
import AppFooter from "../../~reusables/layout/AppFooter";
import IsAuthUser from "../../~reusables/hoc/IsAuthUser";
import CreateQuiz from "./CreateQuiz/CreateQuiz";
import CompleteQuiz from "./CompleteQuiz/CompleteQuiz";

// styles
import { tablet_max_width } from "../../~reusables/variables/media-queries";

const App = props => {
  if (true) {
    return (
      <StyledApp>
        <Sidebar />
        <div>
          <AppHeader />
          <Route
            exact
            path="/app"
            render={routeProps => <Dashboard {...routeProps} />}
          />
          <Route
            exact
            path="/app/quizzes"
            render={routeProps => <Quizzes {...routeProps} />}
          />
          <Route
            exact
            path="/app/quizzes/create/:id"
            render={routeProps => <CreateQuiz {...routeProps} />}
          />
          <Route
            exact
            path="/app/quizzes/complete/:id/:quiz_id/:student_id"
            render={routeProps => <CompleteQuiz {...routeProps} />}
          />
          <Route
            exact
            path="/app/people"
            render={routeProps => <People {...routeProps} />}
          />
          <Route
            exact
            path="/app/profile"
            render={routeProps => <Profile {...routeProps} />}
          />
        </div>
        <AppFooter />
      </StyledApp>
    );
  }
};

const StyledApp = styled.section`
  display: flex;
  & > div {
    width: 100%;
  }

  @media only screen and (max-width: ${tablet_max_width}) {
    & > div {
      margin-bottom: 80px;
    }
  }
`;

function mapStateToProps(state) {
  return {
    user: state.auth.user
  };
}

export default compose(
  connect(
    mapStateToProps,
    null
  ),
  IsAuthUser
)(App);
