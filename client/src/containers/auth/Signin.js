import React, { Component } from 'react';
import SigninForm from '../../components/forms/SigninForm';
import { withRouter } from 'react-router-dom';

class Signin extends Component {
  render() {
    return (
      <div>
        <h2 className="text-center">Inventory Manager</h2>
        <SigninForm { ...this.props } />
      </div>
    )
  }
}

export default withRouter(Signin);
