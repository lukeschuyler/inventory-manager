import React, { Component } from 'react';
import SigninForm from '../../components/forms/SigninForm';

class Signin extends Component {
  render() {
    return (
      <div>
        <h2 className="text-center">Inventory Manager</h2>
        <SigninForm />
      </div>
    )
  }
}

export default Signin;
