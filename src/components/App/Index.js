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

// styles

const App = props => {
  const { user } = props;
  console.log(user);

  if (true) {
    return (
      <StyledApp>
        <Sidebar />
        <div>
          <AppHeader />
          <Route exact path="/app" render={routeProps => <Dashboard />} />
          <Route exact path="/app/quizzes" render={routeProps => <Quizzes />} />
          <Route exact path="/app/people" render={routeProps => <People />} />
          <Route exact path="/app/profile" render={routeProps => <Profile />} />
          <AppFooter />
        </div>
      </StyledApp>
    );
  }
};

const StyledApp = styled.section`
  display: flex;
  & > div {
    width: 100%;
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
