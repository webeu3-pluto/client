// modules
import React, { useEffect } from "react";

// components/functions
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import Marketing from './components/Marketing/Index';
import Application from './components/App/Index';
import { validateUser } from "./store/actions/authActions";
import ComponentLoader from "./~reusables/molecules/ComponentLoader";

// styles
import { primary } from "./~reusables/variables/colors";

function App(props) {
  const { isSignedIn, validateUser } = props;
  console.log(isSignedIn);

  useEffect(() => {
    validateUser();
  }, [])

  if (isSignedIn === null) {
    return <ComponentLoader color={primary} />;
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
  { validateUser }
)(App);
