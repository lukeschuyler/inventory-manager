import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { compose  } from 'redux';

import { reduxForm, Field } from 'redux-form';

import * as actions from '../../actions/auth';

class SigninForm extends Component {
  onSubmit = formProps => {
    this.props.signin(formProps, () => {
      this.props.history.push('./');
    });
  }
  
  componentWillUnmount() {
    this.props.clearErrors();
  }

  render() {
    const { handleSubmit, errorMessage } = this.props;
    let error = errorMessage ? 
                <div className="text-center login-error alert alert-danger">{errorMessage}</div>
                : '';
    return (
      <form onSubmit={handleSubmit(this.onSubmit)} className="container login-form">
        <h2 className="text-center">Sign in</h2>
        <div className="form-group">
          <label htmlFor="">Email</label>
          <Field className="form-control" autoComplete="none" name="email" type="text" component="input" />
        </div>        
        <div className="form-group">
          <label htmlFor="">Password</label>
          <Field className="form-control" autoComplete="none" name="password" type="password" component="input" />
        </div>
        {error}
        <div className="login-btn-group">
          <button className="btn btn-block btn-primary">Sign in</button>
        </div>
        <hr/>
        <div className="text-center">
          Don't have an account? <Link className="btn btn-link" to="/signup">Sign up</Link>
        </div>
      </form>
    )
  }
}

function mapStateToProps({ auth }) {
  return { errorMessage: auth.errorMessage }
}

export default compose(
  connect(mapStateToProps, actions),
  reduxForm({ form: 'signin' })
)(SigninForm);
