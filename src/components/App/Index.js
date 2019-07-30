// modules
import React from "react";
import { Route } from "react-router-dom";

// components/functions
import Dashboard from "./Dashboard/Dashboard";
import Quizzes from "./Quizzes/Quizzes";
import People from "./People/People";
import Profile from "./Profile/Profile";
import Sidebar from "../../~reusables/layout/Sidebar";

// styles

const App = () => {
  if (true) {
    return (
      <div>
        <Sidebar />
        <Route
          exact
          path="/app"
          render={routeProps => <Dashboard />}
        />
        <Route exact path="/app/quizzes" render={routeProps => <Quizzes />} />
        <Route exact path="/app/people" render={routeProps => <People />} />
        <Route exact path="/app/profile" render={routeProps => <Profile />} />
      </div>
    );
  }
};

export default App;
