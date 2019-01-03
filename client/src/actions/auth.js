import axios from '../lib/axios';
import { 
  AUTH_USER, 
  AUTH_ERROR, 
  DELETE_USER, 
  SIGN_OUT,
  CLEAR_ERRORS,
} from './types';


// USER
export const signup = (formProps, cb) => async dispatch => {
  try {
    const response = await axios.post('/signup', formProps);
    let data = response && response.data;

    // token will set information and redirect
    if (data.token) {
      dispatch({ type: AUTH_USER, payload: data });
      localStorage.setItem('token', data.token);
      return cb();
    }

    // check for message
    dispatch({ type: AUTH_ERROR, payload: data.message || 'No user matches these credentials.' });
  } catch (e) {
    console.log(e)
    dispatch({ type: AUTH_ERROR, payload: 'There was an issue signing up. Please try again later.' });
  }
};

export const signin = (formProps, cb) => async dispatch => {
  try {
    const response = await axios.post('/login', formProps);
    let data = response && response.data;
    
    // token will set information and redirect
    if (data.token) {
      dispatch({ type: AUTH_USER, payload: data });
      localStorage.setItem('token', data.token);
      return cb();
    }
    
    // check for message
    dispatch({ type: AUTH_ERROR, payload: data.message || 'No user matches these credentials.' });
  } 
  
  // Server Error
  catch (e) {
    dispatch({ type: AUTH_ERROR, payload: 'There was an issue signing in. Please try again later.' });
  }
};

export const clearErrors = () => {
  return { type: CLEAR_ERRORS, payload: '' }
}

export const deleteUser = id => {
  return { type: DELETE_USER, payload: id }
}

export const signout = cb => dispatch => {
  localStorage.removeItem('token');
  dispatch({ type: SIGN_OUT, payload: false });
  cb();
};
