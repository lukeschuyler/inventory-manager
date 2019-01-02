import axios from '../lib/axios';
import { 
  // USER
  FETCH_ALL_SESSIONS,
  SESSIONS_ERROR,
} from './types';

export const fetchAllSessions = () => async dispatch => {
  let response;
  try {
    response = await axios.get('/all_sessions');
    let data = response && response.data;
    console.log(data);
    // token will set information and redirect
    if (data) {
      dispatch({ type: FETCH_ALL_SESSIONS, payload: data });
    }
    
    // check for message
    dispatch({ type: SESSIONS_ERROR, payload: 'There was an issue fetching sessions data.' });
  }

  catch(e) {
    dispatch({ type: SESSIONS_ERROR, payload: 'There was an issue fetching sessions data.' })
  }
}
