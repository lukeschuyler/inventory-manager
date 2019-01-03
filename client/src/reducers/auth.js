import { AUTH_USER, AUTH_ERROR, SIGN_OUT, CLEAR_ERRORS } from '../actions/types';

const INITIAL_STATE = {
  authenticated: '',
  errorMessage: ''
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case AUTH_USER: 
      return { ...state, authenticated: action.payload.token, errorMessage: '' }    
    case AUTH_ERROR: 
      return { ...state, errorMessage: action.payload }    
    case SIGN_OUT: 
      return { ...state, authenticated: false, errorMessage: '' }    
    case CLEAR_ERRORS: 
      return { ...state, errorMessage: '' }
    default:
      return state;
  }
}
