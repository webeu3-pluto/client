// modules
import React from 'react';

// components/functions
import { Route } from 'react-router-dom';
import Landing from './views/Landing/Landing';
import SignUp from './views/SignUp/SignUp';
import Login from './views/Login/Login';

// styles

function App() {
  if(true) {
    // Marketing Site
    return (
      <div>
        <Route exact path="/" render={routeProps => <Landing />} />
        <Route exact path="/signup" render={routeProps => <SignUp />} />
        <Route exact path="/login" render={routeProps => <Login />} />
      </div>
    ) 
  } else {
    // Application
    return (
      <div>

      </div>
    )
  }
}

export default App;
