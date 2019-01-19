// mock/thunk
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

// moxios/axios
import moxios from 'moxios';
import axios from '../../lib/axios';

import { 
  signup, 
  signin,
  signout, 
  clearErrors, 
  checkToken 
} from '../auth';

import { 
  AUTH_USER, 
  AUTH_ERROR,
  SIGN_OUT, 
  CLEAR_ERRORS, 
  TOKEN_CHECKED, 
  AUTH_SUBMIT 
} from '../types';

// Response creators
const mockSuccess = data => ({ status: 200, response: data });
const mockError = error => ({ status: 500, response: error });


describe('signup', () => {
  // build and bring down moxios each test
  beforeEach(() => {
    moxios.install(axios);
  });

  afterEach(() => {
    moxios.uninstall(axios);
  });
  
  const signupCreds = { 
    email: 'johnny@g.com', 
    password: 'abc123', 
    fullName: 'Johnny Utah'
  };

  it('dispatches correct actions when no creds are given',  () => {
    const expectedActions = [
      {type: AUTH_SUBMIT, payload: true},
      {type: AUTH_ERROR, payload: 'Missing Required Fields.'} 
    ];

    const store = mockStore({});
    store.dispatch(signup());

    expect(store.getActions()).toEqual(expectedActions);
  });

  it('dispatches correct actions when some but not all creds are given',  () => {
    const expectedActions = [
      {type: AUTH_SUBMIT, payload: true},
      {type: AUTH_ERROR, payload: 'Missing Required Fields.'} 
    ];

    const store = mockStore({});
    store.dispatch(signup({email: 'luke@g.com', password: 'abc123'}));

    expect(store.getActions()).toEqual(expectedActions);
  });

  it('dispatches correct actions when no token is provided but status is 200',  async () => {
    const store = mockStore({});
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith(mockSuccess({ message: 'Message!' }));
    });

    const expectedActions = [
      {type: AUTH_SUBMIT, payload: true},
      {type: AUTH_ERROR, payload: 'Message!'} 
    ];

    await store.dispatch(signup(signupCreds, () => true));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('dispatches correct actions when no token OR message is provided but status is 200',  async () => {
    const store = mockStore({});
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith(mockSuccess({}));
    });

    const expectedActions = [
      {type: AUTH_SUBMIT, payload: true},
      {type: AUTH_ERROR, payload: 'No user matches these credentials.'} 
    ];

    await store.dispatch(signup(signupCreds, () => true));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('dispatches correct actions when no data object is provided and status is 200',  async () => {
    const store = mockStore({});
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith(mockSuccess());
    });

    const expectedActions = [
      {type: AUTH_SUBMIT, payload: true},
      {type: AUTH_ERROR, payload: 'No user matches these credentials.'} 
    ];

    await store.dispatch(signup(signupCreds, () => true));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('dispatches correct actions when token is provided status is 200',  async () => {
    const store = mockStore({});
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith(mockSuccess({ token: 'abc123' }));
    });

    const expectedActions = [
      {type: AUTH_SUBMIT, payload: true},
      {type: AUTH_USER, payload: { token: 'abc123'} } 
    ];

    await store.dispatch(signup(signupCreds, () => true));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('dispatches correct actions when token is provided status is 500',  async () => {
    const store = mockStore({});
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith(mockError('Error'));
    });

    const expectedActions = [
      {type: AUTH_SUBMIT, payload: true},
      {type: AUTH_ERROR, payload: 'There was an issue signing up. Please try again later.' } 
    ];

    await store.dispatch(signup(signupCreds, () => true));
    expect(store.getActions()).toEqual(expectedActions);
  });

});


describe('signin', () => {
  // build and bring down moxios each test
  beforeEach(() => {
    moxios.install(axios);
  });

  afterEach(() => {
    moxios.uninstall(axios);
  });
  
  const signinCreds = { 
    email: 'johnny@g.com', 
    password: 'abc123', 
  };

  it('dispatches correct actions when no creds are given',  () => {
    const expectedActions = [
      {type: AUTH_SUBMIT, payload: true},
      {type: AUTH_ERROR, payload: 'Missing Required Fields.'} 
    ];

    const store = mockStore({});
    store.dispatch(signin());

    expect(store.getActions()).toEqual(expectedActions);
  });

  it('dispatches correct actions when some but not all creds are given',  () => {
    const expectedActions = [
      {type: AUTH_SUBMIT, payload: true},
      {type: AUTH_ERROR, payload: 'Missing Required Fields.'} 
    ];

    const store = mockStore({});
    store.dispatch(signin({email: 'luke@g.com'}));

    expect(store.getActions()).toEqual(expectedActions);
  });

  it('dispatches correct actions when no token is provided but status is 200',  async () => {
    const store = mockStore({});
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith(mockSuccess({ message: 'Message!' }));
    });

    const expectedActions = [
      {type: AUTH_SUBMIT, payload: true},
      {type: AUTH_ERROR, payload: 'Message!'} 
    ];

    await store.dispatch(signin(signinCreds, () => true));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('dispatches correct actions when no token OR message is provided but status is 200',  async () => {
    const store = mockStore({});
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith(mockSuccess({}));
    });

    const expectedActions = [
      {type: AUTH_SUBMIT, payload: true},
      {type: AUTH_ERROR, payload: 'No user matches these credentials.'} 
    ];

    await store.dispatch(signin(signinCreds, () => true));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('dispatches correct actions when no data object is provided and status is 200',  async () => {
    const store = mockStore({});
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith(mockSuccess());
    });

    const expectedActions = [
      {type: AUTH_SUBMIT, payload: true},
      {type: AUTH_ERROR, payload: 'No user matches these credentials.'} 
    ];

    await store.dispatch(signin(signinCreds, () => true));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('dispatches correct actions when token is provided status is 200',  async () => {
    const store = mockStore({});
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith(mockSuccess({ token: 'abc123' }));
    });

    const expectedActions = [
      {type: AUTH_SUBMIT, payload: true},
      {type: AUTH_USER, payload: { token: 'abc123'} } 
    ];

    await store.dispatch(signin(signinCreds, () => true));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('dispatches correct actions when token is provided status is 500',  async () => {
    const store = mockStore({});
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith(mockError('Error'));
    });

    const expectedActions = [
      {type: AUTH_SUBMIT, payload: true},
      {type: AUTH_ERROR, payload: 'There was an issue signing in. Please try again later.' } 
    ];

    await store.dispatch(signin(signinCreds, () => true));
    expect(store.getActions()).toEqual(expectedActions);
  });

});

describe('checkToken', () => {
  // it('dispatches correct actions when message is provided and status is 200', async () => {
  //   const store = mockStore({});
  //   // window.localStorage.setItem('token', 'abc123');
  //   moxios.wait(() => {
  //     const request = moxios.requests.mostRecent();
  //     request.respondWith(mockSuccess({ messsage: 'Message!' }));
  //   });

  //   const expectedActions = [
  //     {type: TOKEN_CHECKED, payload: 'abc123' } 
  //   ];

  //   await store.dispatch(checkToken());
  //   expect(store.getActions()).toEqual(expectedActions);
  // });  

  // it('dispatches correct actions when no message is provided and status is 200', async () => {
  //   const store = mockStore({});
  //   moxios.wait(() => {
  //     const request = moxios.requests.mostRecent();
  //     request.respondWith(mockSuccess());
  //   });

  //   const expectedActions = [
  //     {type: AUTH_ERROR, payload: '' } 
  //   ];

  //   await store.dispatch(checkToken());
  //   expect(store.getActions()).toEqual(expectedActions);
  // });

  // it('dispatches correct actions when message is provided and status is 200', async () => {
  //   const store = mockStore({});
  //   window.localStorage.setItem('token', 'abc123');
  //   moxios.wait(() => {
  //     const request = moxios.requests.mostRecent();
  //     request.respondWith(mockSuccess({ message: 'Message!' }));
  //   });

  //   const expectedActions = [
  //     {type: TOKEN_CHECKED, payload: 'abc123' } 
  //   ];

  //   await store.dispatch(checkToken());
  //   expect(store.getActions()).toEqual(expectedActions);
  // });
});
