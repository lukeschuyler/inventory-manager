import authReducer from '../auth';

import { 
  AUTH_USER, 
  AUTH_ERROR,
  SIGN_OUT, 
  CLEAR_ERRORS, 
  TOKEN_CHECKED, 
  AUTH_SUBMIT } from '../../actions/types';

describe('authReducer', () => {

  it('handles actions of type AUTH_USER', () => {
    const action = {
      type: AUTH_USER,
      payload: { token: 'abc123' }
    };

    const newState = authReducer({}, action);

    expect(newState.authenticated).toEqual('abc123');
    expect(newState.errorMessage).toEqual('');
    expect(newState.checking).toEqual(false);
    expect(newState.inProgress).toEqual(false);
  });

  it('handles actions of type AUTH_ERROR', () => {
    const action = {
      type: AUTH_ERROR,
      payload: 'Error Message'
    };

    const newState = authReducer({}, action);

    expect(newState.errorMessage).toEqual('Error Message');
    expect(newState.checking).toEqual(false);
    expect(newState.inProgress).toEqual(false);
  });

  it('handles actions of type AUTH_SUBMIT', () => {
    const action = {
      type: AUTH_SUBMIT,
      payload: true
    };

    const newState = authReducer({}, action);

    expect(newState.errorMessage).toEqual('');
    expect(newState.checking).toEqual(false);
    expect(newState.inProgress).toEqual(true);
  });

  it('handles actions of type CLEAR_ERRORS', () => {
    const action = {
      type: CLEAR_ERRORS,
      payload: true
    };

    const newState = authReducer({}, action);

    expect(newState.errorMessage).toEqual('');
    expect(newState.checking).toEqual(false);
  });

  it('handles actions of type TOKEN_CHECKED', () => {
    const action = {
      type: TOKEN_CHECKED,
      payload: 'abc123'
    };

    const newState = authReducer({}, action);

    expect(newState.authenticated).toEqual('abc123');
    expect(newState.checking).toEqual(false);
  });

  it('handles action with unknown type', () => {
    const action = {
      type: 'AUTH_UNKOWN',
      payload: 4
    };

    const newState = authReducer({}, action);
    expect(newState).toEqual({});
  });

});
