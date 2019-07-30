// modules
import React from 'react';

// components/functions
import { Route } from 'react-router-dom';
import Landing from './Landing/Landing';
import SignUp from './Signup/SignUp';
import Login from './Login/Login';

const App = () => {
  return (
    <div>
      <Route exact path="/" render={routeProps => <Landing />} />
      <Route exact path="/signup" render={routeProps => <SignUp />} />
      <Route exact path="/login" render={routeProps => <Login />} />
    </div>
  );
}

export default App;
