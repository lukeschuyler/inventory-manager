import React, { Component } from 'react';
import { connect } from 'react-redux';

/*
 *  HIGH ORDER FUNCTION
 *  requires authentication for component passed to this component
 */
export default Child => {

  // BEGIN CLASS INSIDE 
  class ComposedComponent extends Component {

    componentDidMount() {
      this.shouldNavigateAway();
    }  
    
    componentDidUpdate() {
      this.shouldNavigateAway();
    }
  
    shouldNavigateAway() {
      if (!this.props.auth) {
        this.props.history.push('/signin');
      }
    }
    
    render() {
      return <Child {...this.props} />;
    }
  }

  function mapStateToProps(state) {
    return { auth: state.auth.authenticated }
  }

  return connect(mapStateToProps)(ComposedComponent);
};
