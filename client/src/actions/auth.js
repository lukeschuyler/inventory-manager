import axios from '../lib/axios';
import { 
  AUTH_SUBMIT,
  AUTH_USER, 
  AUTH_ERROR, 
  DELETE_USER, 
  SIGN_OUT,
  CLEAR_ERRORS,
  TOKEN_CHECKED,
} from './types';

// USER
export const signup = (formProps, cb) => async dispatch => {
  dispatch({ type: AUTH_SUBMIT, payload: true });

  const { email, password, fullName } = formProps;

  if (!(email && password && fullName)) {
    return dispatch({ type: AUTH_ERROR, payload: 'Missing Required Fields.' });
  }

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
  dispatch({ type: AUTH_SUBMIT, payload: true });
  
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

export const checkToken = () => async dispatch => {
  try {
    const response = await axios.post('/check-token');
    let data = response && response.data;
    if (data.message) {
      dispatch({ type: TOKEN_CHECKED, payload: localStorage.getItem('token') })
    }
  } 
  
  // Server Error
  catch (e) {
    dispatch({ type: AUTH_ERROR, payload: '' });
  }
}

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


const sleep = function () {
  return new Promise((res, rej) => {
    setTimeout(function() {
      res();
    }, 500)
  });
}
