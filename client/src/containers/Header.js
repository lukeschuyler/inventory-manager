import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actions from '../actions/auth';

import NavbarAuthenticated from '../components/nav/NavbarAuthenticated';
import NavbarGuest from '../components/nav/NavbarGuest';

class Header extends Component {
  render() {
    // Navbar difference based on authentication
    const { authenticated } = this.props;
    const nav = authenticated ? 
                <NavbarAuthenticated {...this.props} /> : 
                <NavbarGuest {...this.props} /> 
    return (
      <Fragment>
        {nav}
      </Fragment>
    );
  }
}

function mapStateToProps(state) {
  return { authenticated: state.auth.authenticated }
}

export default withRouter(connect(mapStateToProps, actions)(Header));
