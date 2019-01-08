import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { compose  } from 'redux';

import { reduxForm, Field } from 'redux-form';

import * as actions from '../../actions/auth';

import * as validate from '../../lib/redux-form';

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
    const { handleSubmit, errorMessage, inProgress } = this.props;
    let button = inProgress ?
                <button disabled className="btn btn-block btn-primary">Submitting...</button> :
                <button className="btn btn-block btn-primary">Sign in</button>;
    let error = errorMessage ? 
                <div className="text-center login-error alert alert-danger">{errorMessage}</div>
                : '';
    return (
      <form onSubmit={handleSubmit(this.onSubmit)} className="container login-form">
        <h2 className="text-center">Sign in</h2>
        <Field
          name="email"
          type="text"
          component={validate.renderField}
          label="Email"
          validate={[validate.required, validate.email]}
        />     
        <Field
          name="password"
          type="password"
          component={validate.renderField}
          label="Password"
          validate={[validate.required]}
        />           
        {error}
        <div className="login-btn-group">
          {button}
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
  return { errorMessage: auth.errorMessage, inProgress: auth.inProgress }
}

export default compose(
  connect(mapStateToProps, actions),
  reduxForm({ form: 'signin' })
)(SigninForm);
