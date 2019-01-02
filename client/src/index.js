import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import App from './components/App';
import Welcome from './components/Welcome';
import Signup  from './components/auth/Signup';
import Signin  from './components/auth/Signin';
import Sessions  from './components/sessions/Sessions';
import reducers  from './reducers';

import './styles/index.css';
import '../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css'

const INITIAL_APP_STATE = {
  auth: { 
    authenticated: localStorage.getItem('token')
  }
}

const store = createStore(
  reducers,
  INITIAL_APP_STATE,
  applyMiddleware(reduxThunk)
);

ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <App>
          <Route path="/" exact component={Welcome} />
          <Route path="/signup" component={Signup} />
          <Route path="/signin" component={Signin} />
          <Route path="/sessions" component={Sessions} />
        </App>
      </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
