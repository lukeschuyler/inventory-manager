import sessionsReducer from '../sessions';

import { 
  FETCH_ALL_SESSIONS,
  SESSIONS_ERROR } from '../../actions/types';

describe('sessionsReducer', () => {

  it('handles actions of type FETCH_ALL_SESSIONS', () => {
    const action = {
      type: FETCH_ALL_SESSIONS,
      payload: {
        inv:   ['Inventory'], 
        sales: ['Sales'], 
        waste: ['Waste'], 
        rec:   ['Receiving'] 
      } 
    };

    const newState = sessionsReducer({}, action);

    expect(newState.inv).toEqual(['Inventory']);
    expect(newState.sales).toEqual(['Sales']);
    expect(newState.waste).toEqual(['Waste']);
    expect(newState.rec).toEqual(['Receiving']);
  });

  it('handles actions of type SESSIONS_ERROR', () => {
    const action = {
      type: SESSIONS_ERROR,
      payload: 'Error Message'
    };

    const newState = sessionsReducer({}, action);

    expect(newState.errorMessage).toEqual('Error Message');
  });

  it('handles action with unknown type', () => {
    const action = {
      type: 'SESSIONS_UNKOWN',
      payload: 4
    };

    const newState = sessionsReducer({}, action);
    expect(newState).toEqual({});
  });

});
