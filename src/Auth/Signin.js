import React from 'react';
import { Redirect } from 'react-router-dom';
import { AuthContext } from './AuthContext';

export class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };

  }

  render() {
    return (
      <AuthContext.Consumer>
      {(Auth) => {
        if (Auth.isAuthenticated){
          return <Redirect to={{
            pathname: "/dashboard",
            state: { from: this.props.location } }}/>
        } else {
          return <div className="Signin">
            <h1>Signin</h1>
            <button onClick={() => {Auth.signin(()=>{this.props.history.push('/dashboard')})}}>Sign in</button>
          </div>
        }
      }
      }
      </AuthContext.Consumer>
    )
  }
}

export default Signin;
