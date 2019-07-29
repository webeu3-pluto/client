// modules
import React from "react";

// components/functions
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import Marketing from './components/Marketing/Index';
import Application from './components/App/Index';

// styles

function App(props) {
  const { isSignedIn } = props;

  if (isSignedIn === null) {
    return <div>loader</div>;
  } else {
    return (
      <div>
        <Route path="/" render={routeProps => <Marketing />} />
        <Route path="/app" render={routeProps => <Application />} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isSignedIn: state.auth.isSignedIn
  };
};

export default connect(
  mapStateToProps,
  null
)(App);
