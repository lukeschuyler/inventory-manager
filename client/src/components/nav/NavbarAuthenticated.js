import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actions from '../../actions/auth';

import { Navbar, NavItem, Nav, NavDropdown, MenuItem } from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";

class NavbarAuthenticated extends Component {
  state = {
    activeKey: null
  }

  handleSelect = key => {
    if (key === 3.2) {
      this.props.signout(() => {
        this.props.history.push('/signin');
      });
    }
    
    this.setState({activeKey: key});
  }

  renderLinks() {
    return (
      <Nav pullRight bsStyle="pills" activeKey={this.state.activeKey} onSelect={this.handleSelect}>
        <LinkContainer eventKey={1} to="/sessions">
          <NavItem>Sessions</NavItem>
        </LinkContainer>  
        <LinkContainer eventKey={2} exact to="/products">
          <NavItem>Products</NavItem>
        </LinkContainer>                    
        <NavDropdown eventKey={3} 
          title={<span><i className="glyphicon glyphicon-cog"></i></span>} 
          id="nav-dropdown"
        >
          <MenuItem eventKey={3.1}>User Settings</MenuItem>
          <MenuItem eventKey={3.2}>Logout</MenuItem>
        </NavDropdown>
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

export default withRouter(connect(mapStateToProps, actions)(NavbarAuthenticated));
