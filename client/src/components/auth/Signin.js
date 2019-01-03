import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { compose  } from 'redux';

import { reduxForm, Field } from 'redux-form';

import * as actions from '../../actions/auth';

class Signin extends Component {
  onSubmit = formProps => {
    this.props.signin(formProps, () => {
      this.props.history.push('./');
    });
  }
  
  componentWillUnmount() {
    this.props.clearErrors();
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <div>
        <h2 className="text-center">Inventory Manager</h2>
        <form onSubmit={handleSubmit(this.onSubmit)} className="container login-form">
          <h2 className="text-center">Sign in</h2>
          <div className="form-group row">
            <label htmlFor="">Email</label>
            <Field className="form-control" autoComplete="none" name="email" type="text" component="input" />
          </div>        
          <div className="form-group row">
            <label htmlFor="">Password</label>
            <Field className="form-control" autoComplete="none" name="password" type="password" component="input" />
          </div>
          <div className="text-center text-danger login-error">{this.props.errorMessage}</div>
          <div className="login-btn-group">
            <button className="btn btn-success">Sign in</button>
            <Link className="btn btn-info" to="/signup">Sign up</Link>
          </div>
        </form>
      </div>
    )
  }
}

function mapStateToProps({ auth }) {
  return { errorMessage: auth.errorMessage }
}

export default compose(
  connect(mapStateToProps, actions),
  reduxForm({ form: 'signin' })
)(Signin);
