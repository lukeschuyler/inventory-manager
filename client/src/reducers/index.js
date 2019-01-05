import { combineReducers } from 'redux';

// MY REDUCERS
import auth from './auth';
import sessions from './sessions';
import products from './products';

// REDUX FORM
import { reducer as formReducer } from 'redux-form';


export default combineReducers({
    auth,
    sessions,
    products,
    form: formReducer
});
