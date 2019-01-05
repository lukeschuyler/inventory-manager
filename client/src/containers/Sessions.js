import React, { Component } from 'react';
import { Route, NavLink }  from 'react-router-dom';
import { connect } from 'react-redux';

import Sales from '../components/sessions/Sales';
import Receiving from '../components/sessions/Receiving';
import Inventory from '../components/sessions/Inventory';
import Waste from '../components/sessions/Waste';

import * as actions from '../actions/sessions';

import requireAuth from '../components/high-order/requireAuth';


class Sessions extends Component {
  componentDidMount() {
    this.props.fetchAllSessions();
  }

  render() {
    let match = this.props.match.url;
    
    return (
      <div>
        <div className="container session-navbar">
          <NavLink className="dark" activeClassName='active-link' to={`${match}/waste`}><div className="darken nav-item waste-nav-item">Waste</div></NavLink>
          <NavLink className="dark" activeClassName='active-link' to={`${match}/inventory`}><div className="darken nav-item inv-nav-item">Inventory</div></NavLink>
          <NavLink className="dark" activeClassName='active-link' to={`${match}/sales`}><div className="darken nav-item sales-nav-item">Sales</div></NavLink>
          <NavLink className="dark" activeClassName='active-link' to={`${match}/receiving`}><div className="darken nav-item rec-nav-item">Receiving</div></NavLink>
        </div>
        <hr />
        <Route path={match} render={(props) => (
          <div>
            { this.props.children }
          </div>
        )}/>
         <Route path={`${match}/sales`} render={(props) =>  (
            <Sales { ...props } sessions={this.props.sales} />
         )} />
         <Route path={`${match}/receiving`} render={(props) => (
            <Receiving { ...props } sessions={this.props.rec} />
         )} />
         <Route path={`${match}/waste`} render={(props) => (
            <Waste { ...props } sessions={this.props.waste} />
         )} />
         <Route path={`${match}/inventory`} render={(props) => (
            <Inventory { ...props } sessions={this.props.inv} />
         )} />
      </div>
    );   
  }
}

function mapStateToProps(state) {
  console.log(state)
  return { 
    inv: state.sessions.inv, 
    sales: state.sessions.sales, 
    waste: state.sessions.waste, 
    rec: state.sessions.rec  
  }
}

export default connect(mapStateToProps, actions)(requireAuth(Sessions));
