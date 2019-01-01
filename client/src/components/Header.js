import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { Navbar, NavItem, MenuItem, NavDropdown, Nav } from 'react-bootstrap';
import Headroom from 'react-headroom';

import * as actions from '../actions/auth';

class Header extends Component {
  constructor(props) {
    super(props);
  }

  handleSelect = key => {
    if (key == 4) {
      this.props.signout(() => {
        console.log(this.props)
        this.props.history.push('/signin');
      });
    }
  }

  renderLinks() {
    if (this.props.authenticated) {
      return (
        <div>
          <Nav>
            <NavItem eventKey={1} href="/sessions">Sessions</NavItem>
          </Nav>
          <Nav pullRight bsStyle="pills" activeKey={1} onSelect={this.handleSelect}>
            <NavItem eventKey={2} href="/products">View Products</NavItem>
            <NavItem eventKey={2} href="/products/search">Search Products</NavItem>
            <NavItem eventKey={4} href="#">Sign Out</NavItem>
          </Nav>
        </div>
      );
    } else {
      return (
        <span>
          <Nav pullRight>
            <NavItem eventKey={2} href="/signup">Sign Up</NavItem>
            <NavItem eventKey={2} href="/signin">Sign In</NavItem>
          </Nav>
        </span>
      );
    }
  }

  render() {
    return (
      <Navbar inverse className="app-nav">
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/">Simply Managed</a>
          </Navbar.Brand>
        </Navbar.Header>
          <div className="right-links">
            {this.renderLinks()}
          </div>
      </Navbar>
    );
  }
}

function mapStateToProps(state) {
  return { authenticated: state.auth.authenticated, userId: state.auth.userId }
}

export default connect(mapStateToProps, actions)(Header);
