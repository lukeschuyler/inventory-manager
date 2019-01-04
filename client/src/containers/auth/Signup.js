import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import SignupForm from '../../components/forms/SignupForm';

class Signup extends Component {
  render() {
    return (
      <div>
        <h2 className="text-center">Inventory Manager</h2>
        <SignupForm { ...this.props } />
      </div>
    )
  }
}

export default withRouter(Signup);
