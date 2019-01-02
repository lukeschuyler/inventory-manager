import { FETCH_ALL_SESSIONS, SESSIONS_ERROR } from '../actions/types';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_ALL_SESSIONS: 
      return { ...state, 
        inv: action.payload.inv, 
        sales: action.payload.sales, 
        waste: action.payload.waste, 
        rec: action.payload.rec 
      }    
    case SESSIONS_ERROR: 
      return { ...state, errorMessage: action.payload }    
    default:
      return state;
  }
}
