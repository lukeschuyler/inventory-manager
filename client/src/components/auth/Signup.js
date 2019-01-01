import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { compose  } from 'redux';
import * as actions from '../../actions';

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
        <div>{this.props.errorMessage }</div>
        <button>Sign up</button>
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
