import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { compose  } from 'redux';
import * as actions from '../../actions/auth';

class Signin extends Component {
  onSubmit = formProps => {
    this.props.signin(formProps, () => {
      this.props.history.push('./');
    });
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <div>
        <form onSubmit={handleSubmit(this.onSubmit)} className="container login-form">
          <div className="form-group row">
            <label htmlFor="">Email</label>
            <Field className="form-control" autoComplete="none" name="email" type="text" component="input" />
          </div>        
          <div className="form-group row">
            <label htmlFor="">Password</label>
            <Field className="form-control" autoComplete="none" name="password" type="password" component="input" />
          </div>
          <div>{this.props.errorMessage}</div>
          <button>Sign in</button>
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
