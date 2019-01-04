import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from './components/Header';

import * as actions from './actions/auth';


const Loading = () => <div id="Loading"><h1 className="text-center">Loading...</h1></div>

class App extends Component {
  componentDidMount() {
    if (this.props.checking) {
      this.props.checkToken();
    }
  }

  render() {
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
