// modules
import React from "react";
import { connect } from "react-redux";

// components/functions
import StudentsDB from "./StudentsDB";
import TeamLeadsDB from "./TeamLeadsDB";

// styles

const Dashboards = props => {
  const { user } = props;
  console.log(user);
  if (user.role === "Student") {
    return <StudentsDB user={user} />;
  } else {
    return <TeamLeadsDB user={user}/>;
  }
};

function mapStateToProps(state) {
  return {
    user: state.auth.user
  };
}

export default connect(mapStateToProps)(Dashboards);
