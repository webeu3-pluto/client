// modules
import React from "react";
import { connect } from "react-redux";

// components/functions
import StudentsPPL from "./StudentsPPL";
import TeamLeadsPPL from "./TeamLeadsPPL";

// styles

const Students = props => {
  const { user } = props;
  if (user.role === "Student") {
    return <StudentsPPL />;
  } else {
    return <TeamLeadsPPL />;
  }
};

function mapStateToProps(state) {
  return {
    user: state.auth.user
  };
}

export default connect(mapStateToProps)(Students);
