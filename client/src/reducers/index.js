import { combineReducers } from 'redux';
import auth from './auth';
import sessions from './sessions';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
    auth,
    sessions,
    form: formReducer
});
