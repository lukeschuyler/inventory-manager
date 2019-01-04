import React, { Component } from 'react';
import SignupForm from '../../components/forms/SignupForm';

class Signup extends Component {
  render() {
    return (
      <div>
        <h2 className="text-center">Inventory Manager</h2>
        <SignupForm />
      </div>
    )
  }
}

export default Signup;
