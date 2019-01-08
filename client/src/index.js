// React/Router
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

// Redux and redux-helpers
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

// Components for routes
import App from './App';
import Main from './containers/Main';
import Signup  from './containers/auth/Signup';
import Signin  from './containers/auth/Signin';
import Sessions  from './containers/Sessions';
import Products  from './containers/Products';

// Reducer index
import reducers  from './reducers';

// Styles
import '../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css'
import './styles/index.css';

// Font Awesome TODO Figure out module bug
// import { library }  from '@fortawesome/fontawesome-svg-core';
// import { far } from '@fortawesome/free-regular-svg-icons';
// import { fas } from '@fortawesome/free-solid-svg-icons';

// library.add(far, fas);


const INITIAL_APP_STATE = {
  auth: { 
    checking: true,
    errorMessage: localStorage.getItem('forceLogout') || ''
  }
};

localStorage.removeItem('forceLogout');

const store = createStore(
  reducers,
  INITIAL_APP_STATE,
  applyMiddleware(reduxThunk)
);

ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <App>
          <Route path="/" exact component={Main} />
          <Route path="/signup" component={Signup} />
          <Route path="/sessions" component={Sessions} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/signin" component={Signin} />
        </App>
      </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
