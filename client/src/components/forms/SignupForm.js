import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { compose  } from 'redux';

import * as actions from '../../actions/auth';

class SignupForm extends Component {
  onSubmit = (formProps) => {
    console.log(formProps);
    this.props.signup(formProps, () => {
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
        <h2 className="text-center">Sign up</h2>
        <div className="form-group row">
          <label htmlFor="">Email</label>
          <Field className="form-control" autoComplete="none" name="email" type="text" component="input" />
        </div>           
        <div className="form-group row">
          <label htmlFor="">Full Name</label>
          <Field className="form-control" autoComplete="none" name="fullName" type="text" component="input" />
        </div>        
        <div className="form-group row">
          <label htmlFor="">Password</label>
          <Field className="form-control" autoComplete="none" name="password" type="password" component="input" />
        </div>          
        <div className="form-group row">
          <label htmlFor="">Confirm Password</label>
          <Field className="form-control" autoComplete="none" name="confirmPassword" type="password" component="input" />
        </div>
        {error}
        <div className="login-btn-group">
          <button className="btn btn-block btn-primary">Sign up!</button>
        </div>
        <hr/>
        <div className="text-center">
           <Link className="btn btn-link" to="/signin">Back to signin</Link>
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
)(SignupForm);
