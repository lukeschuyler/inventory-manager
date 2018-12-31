import axios from '../../lib/axios';
import { 
  // USER
  AUTH_USER, 
  AUTH_ERROR, 
  GET_USERS, 
  DELETE_USER, 
} from '../types';


// USER
export const signup = (formProps, cb) => async dispatch => {
  try {
    const response = await axios.post('/signup', formProps);
    dispatch({ type: AUTH_USER, payload: response.data });
    localStorage.setItem('userId', response.data.userId);
    localStorage.setItem('token', response.data.token);
    cb();
  } catch (e) {
    dispatch({ type: AUTH_ERROR, payload: 'Email is in use.' })
  }
};

export const signin = (formProps, cb) => async dispatch => {
  try {
    const response = await axios.post('/login', formProps);
    dispatch({ type: AUTH_USER, payload: response.data });
    localStorage.setItem('userId', response.data.userId);
    localStorage.setItem('token', response.data.token);
    cb();
  } catch (e) {
    dispatch({ type: AUTH_ERROR, payload: 'No user matches these credentials.' });
  }
};


export const deleteUser = id => {
  return { type: DELETE_USER, payload: id }
}

export const signout = () => {
  localStorage.removeItem('token');
  return { type: AUTH_USER, payload: '' }
};
