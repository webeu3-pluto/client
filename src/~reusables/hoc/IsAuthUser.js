import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

const IsAuthUser = WrappedComponent => {

  const HOCComponent = props => {
    if (!props.isSignedIn) {
      return <Redirect to="/login" />;
    } else {
      return <WrappedComponent {...props} />;
    }
  };

  const mapStateToProps = state => {
    return {
      isSignedIn: state.auth.isSignedIn
    };
  };

  return connect(mapStateToProps)(HOCComponent);
};

export default IsAuthUser;