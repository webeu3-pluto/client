// modules
import React from "react";
import { connect } from "react-redux";

// components/functions
import StudentsQV from "./StudentsQV";
import TeamLeadsQV from "./TeamLeadsQV";

// styles

const Quizzes = props => {
  const { user } = props;
  if (user.role === "Student") {
    return <StudentsQV user={user} />;
  } else {
    return <TeamLeadsQV user={user} />;
  }
};

function mapStateToProps(state) {
  return {
    user: state.auth.user
  };
}

export default connect(mapStateToProps)(Quizzes);
