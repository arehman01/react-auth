import { createContext } from "react";
import * as React from "react";
import { Cookies } from "../utils";

export const AuthContext = createContext({
    name: null,
    update: (value) => {}
});

export class AuthContextProvider extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        signin: this.signinUser,
        signout: this.signoutUser,
        isAuthenticated: Cookies.get('authtoken') !== null
      };
      console.log(this.state.isAuthenticated)
    }

    signinUser = (callback) => {
      this.setState({
        isAuthenticated: true
      }, () => {
        callback()
      });
    }

    signoutUser = (callback) => {
      Cookies.delete('authtoken');
      this.setState({
        isAuthenticated: false
      }, () => {
        callback()
      });
    }

    render() {
      return (
        <AuthContext.Provider value={this.state}>
          {this.props.children}
        </AuthContext.Provider>
      );
    }
  }