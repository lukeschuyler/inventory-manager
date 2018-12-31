import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { compose  } from 'redux';
import * as actions from '../../actions/auth';

class Signin extends Component {
  onSubmit = formProps => {
    this.props.signin(formProps, () => {
      this.props.history.push('./notes');
    });
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <div>
        <form onSubmit={handleSubmit(this.onSubmit)} className="container log-form">
          <div className="form-group row">
            <label htmlFor="">Email</label>
            <Field autoComplete="none" name="email" type="text" component="input" />
          </div>        
          <fieldset>
            <label htmlFor="">Password</label>
            <Field autoComplete="none" name="password" type="password" component="input" />
          </fieldset>
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
