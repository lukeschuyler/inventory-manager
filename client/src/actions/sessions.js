import axios from '../lib/axios';
import { 
  // USER
  FETCH_ALL_SESSIONS,
  SESSIONS_ERROR,
} from './types';

export const fetchAllSessions = () => async dispatch => {
  let response;
  let safetyMessage = 'There was an issue fetching sessions data.';
  try {
    response = await axios.get('/all_sessions');
    console.log(response);
    let data = response && response.data;

    if (data) {
      dispatch({ type: FETCH_ALL_SESSIONS, payload: data });
    }
    
    dispatch({ type: SESSIONS_ERROR, payload: safetyMessage });
  }

  catch(e) {
    dispatch({ type: SESSIONS_ERROR, payload: safetyMessage })
  }
}
