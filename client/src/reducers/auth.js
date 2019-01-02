import { AUTH_USER, AUTH_ERROR, SIGN_OUT } from '../actions/types';

const INITIAL_STATE = {
  authenticated: '',
  errorMessage: ''
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case AUTH_USER: 
      return { ...state, authenticated: action.payload.token, userId: action.payload.userId }    
    case AUTH_ERROR: 
      return { ...state, errorMessage: action.payload }    
    case SIGN_OUT: 
      return { ...state, authenticated: false }
    default:
      return state;
  }
}
