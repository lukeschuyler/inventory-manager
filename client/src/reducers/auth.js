import { AUTH_USER, AUTH_ERROR, SIGN_OUT, CLEAR_ERRORS, TOKEN_CHECKED, AUTH_SUBMIT } from '../actions/types';

const INITIAL_STATE = {
  authenticated: '',
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case AUTH_USER: 
      return { ...state, checking: false, authenticated: action.payload.token, errorMessage: '', inProgress: false }      
    case AUTH_SUBMIT: 
      return { ...state, checking: false, errorMessage: '', inProgress: action.payload }    
    case AUTH_ERROR: 
      return { ...state, checking: false, errorMessage: action.payload, inProgress: false }    
    case SIGN_OUT: 
      return { ...state, checking: false, authenticated: false }    
    case CLEAR_ERRORS: 
      return { ...state, checking: false, errorMessage: '' }    
    case TOKEN_CHECKED: 
      return { ...state, checking: false, authenticated: action.payload }
    default:
      return state;
  }
}
