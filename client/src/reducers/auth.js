import { AUTH_USER, AUTH_ERROR, SIGN_OUT, CLEAR_ERRORS, TOKEN_CHECKED } from '../actions/types';

const INITIAL_STATE = {
  authenticated: '',
  errorMessage: ''
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case AUTH_USER: 
      return { ...state, checking: false, authenticated: action.payload.token, errorMessage: '' }    
    case AUTH_ERROR: 
      return { ...state, checking: false, errorMessage: action.payload }    
    case SIGN_OUT: 
      return { ...state, checking: false, authenticated: false, errorMessage: '' }    
    case CLEAR_ERRORS: 
      return { ...state, checking: false, errorMessage: '' }    
    case TOKEN_CHECKED: 
      return { ...state, checking: false, authenticated: action.payload, errorMessage: '' }
    default:
      return state;
  }
}
