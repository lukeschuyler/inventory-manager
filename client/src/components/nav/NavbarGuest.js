import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actions from '../../actions/auth';

import { Navbar, NavItem, Nav } from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";

class NavbarGuest extends Component {
  state = {
    activeKey: null
  }

  handleSelect = key => {
    if (key === 4.1) {
      this.props.signout(() => {
        this.props.history.push('/signin');
      });
    }
    
    this.setState({activeKey: key});
  }

  renderLinks() {
    return (
      <Nav pullRight bsStyle="pills" activeKey={this.state.activeKey} onSelect={this.handleSelect}>
        <LinkContainer eventKey={1} to="/signin">
          <NavItem >Sign In</NavItem>
        </LinkContainer>    
        <LinkContainer eventKey={2} to="/signup">
          <NavItem>Sign Up</NavItem>
        </LinkContainer>                
      </Nav>
    );
  }

  render() {
    return (
      <Navbar inverse className="app-nav">
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">Inventory Manager</Link>
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
  return { authenticated: state.auth.authenticated }
}

export default withRouter(connect(mapStateToProps, actions)(NavbarGuest));
