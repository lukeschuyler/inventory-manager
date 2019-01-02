import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { compose  } from 'redux';

import * as actions from '../../actions/auth';

class Signup extends Component {
  onSubmit = (formProps) => {
    this.props.signup(formProps, () => {
      this.props.history.push('./notes');
    });
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit)} className="container login-form">
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
          <button className="btn btn-success">Sign up</button>
          <Link className="btn btn-info" to="/signin">Back to Signin</Link>
        </div>
      </form>
    )
  }
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.errorMessage }
}

export default compose(
  connect(mapStateToProps, actions ),
  reduxForm({ form: 'signup' })
)(Signup);
