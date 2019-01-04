import { combineReducers } from 'redux';

// MY REDUCERS
import auth from './auth';
import sessions from './sessions';

// REDUX FORM
import { reducer as formReducer } from 'redux-form';

// TABLES
// import { DataTableReducer } from 'react-redux-datatable';

export default combineReducers({
    auth,
    sessions,
    // table: DataTableReducer,
    form: formReducer
});
