import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { compose  } from 'redux';

import * as actions from '../../actions/auth';

// redux-form validation helper lib
import * as validate from '../../lib/redux-form';

// moved out of render method to fix redux form infinite loop issue 
const valComparePW = [validate.required, validate.minLength(6), validate.comparePassword];

class SignupForm extends Component {
  onSubmit = formProps => {
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
      <form onSubmit={handleSubmit(this.onSubmit)} className="was-validated container login-form">
        <h2 className="text-center">Sign up</h2>
        <Field
          name="email"
          type="text"
          component={validate.renderField}
          label="Email"
          validate={[validate.required, validate.email]}
        />        
        <Field
          name="fullName"
          type="text"
          component={validate.renderField}
          label="Full Name"
          validate={[validate.required]}
        />            
        <Field
          name="password"
          type="password"
          component={validate.renderField}
          label="Password"
          validate={[validate.required, validate.minLength(6)]}
        />                     
        <Field
          name="confirmPassword"
          type="password"
          component={validate.renderField}
          label="Confirm Password"
          validate={valComparePW}
        />                
        {error}
        <div className="login-btn-group">
          <button className="btn btn-block btn-primary">Sign up!</button>
        </div>
        <hr/>
        <div className="text-center">
           <Link className="btn btn-link" to="/signin">Back to Signin</Link>
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
