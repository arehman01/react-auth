import React from 'react';
import { AuthContext } from '../Auth/AuthContext';

export class Dashboard extends React.Component {
  render() {
    return (
      <AuthContext.Consumer>
        {({signout}) => {
          return <div className="Dashboard">
            <p>This is the Dashboard.</p>
            <button type="button" onClick={() => {signout(()=>{this.props.history.push('/')})}}>Sign out</button>
          </div>
        }}
      </AuthContext.Consumer>
    )
  }
}

export default Dashboard;