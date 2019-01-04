import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actions from './actions/auth';

import Header from './components/Header';

const Loading = () => <div id="Loading"><h1 className="text-center">Loading...</h1></div>

class App extends Component {

  // May not be the best practice but it seems to be working fine
  // checking token in the App component to see if it's valid
  componentDidMount() {
    if (this.props.checking) {
      this.props.checkToken();
    }
  }

  render() {
    // loading while checking
    if (this.props.checking) {
      return <Loading />;
    }

    else {
      return (
        <div className="App">
          <Header /> 
          {this.props.children}
        </div>
      );
    }
    
  }
}

function mapStateToProps(state) {
  return { checking: state.auth.checking }
}

export default withRouter(connect(mapStateToProps, actions)(App));
