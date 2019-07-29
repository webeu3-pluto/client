// modules
import React from "react";
import { Route } from "react-router-dom";

// components/functions
import DashboardTL from "./TeamLead/Dashboard/Dashboard";
import QuizzesTL from "./TeamLead/Quizzes/Quizzes";
import StudentsTL from "./TeamLead/Students/Students";
import DashboardST from "./Student/Dashboard/Dashboard";
import QuizzesST from "./Student/Quizzes/Quizzes";
import StudentsST from "./Student/TeamLeads/TeamLeads";

// styles

const App = () => {
  if (true) {
    return (
      <div>
        Sidebar
        <Route
          exact
          path="/app/dashboard"
          render={routeProps => <DashboardTL />}
        />
        <Route exact path="/app/quizzes" render={routeProps => <QuizzesTL />} />
        <Route
          exact
          path="/app/students"
          render={routeProps => <StudentsTL />}
        />
      </div>
    );
  } else {
    return (
      <div>
        Sidebar
        <Route
          exact
          path="/app/dashboard"
          render={routeProps => <DashboardST />}
        />
        <Route exact path="/app/quizzes" render={routeProps => <QuizzesST />} />
        <Route
          exact
          path="/app/students"
          render={routeProps => <StudentsST />}
        />
      </div>
    );
  }
};

export default App;
