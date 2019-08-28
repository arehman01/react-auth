import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Link } from "react-router-dom";
import './App.css';
import {AuthContext} from './Auth/AuthContext';
import Signin from './Auth/Signin';
import Dashboard from './Dashboard';


function PrivateRoute({ component: Component, ...rest }) {
  return (
    <AuthContext.Consumer>
      {({ isAuthenticated }) => 
        <Route
            {...rest}
            render={props =>
              isAuthenticated ? (
                <Component {...props} />
              ) : (
                <Redirect
                  to={{
                    pathname: "/",
                    state: { from: props.location }
                  }}
                />
              )
            }
          />
      }
    </AuthContext.Consumer>
  );
}

function App() {
  return (
    <div className="App">
      <Router>
          <Link to="/">Home</Link> | <Link to="/dashboard">Dashboard</Link>

          <Route path="/" exact component={Signin} />
          <PrivateRoute path="/dashboard" component={Dashboard} />
      </Router>
    </div>
  );
}


export default App;
