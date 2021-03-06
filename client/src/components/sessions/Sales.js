import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import SessionGeneral from './SessionGeneral.js';

class Sales extends Component {
  constructor(props) {
    super();
    this.state = {
      sessions: props.sessions
    }
    this.colFormatter = this.colFormatter.bind(this)
    this.dateFormatter = this.dateFormatter.bind(this)
  }

  componentWillUpdate(nextProps, nextState) {
    nextState.salesSessions = nextProps.sessions;
  }


  colFormatter(cell, row) {
    return (
      <Link to={`${this.props.match.url}/${row.id}`}>
        View
      </Link>
    );
  }

  dateFormatter(cell, row) {
    cell = new Date(cell);
    return `${('0' + (cell.getMonth() + 1)).slice(-2)}/${('0' + cell.getDate()).slice(-2)}/${cell.getFullYear()}`;
  }

  mapSessions() {
    return this.props.sessions.map(s => {
      return {
        ...s,
        username: s.user.name
      }
    });
  }

  render() {
    let sessions = !this.props.sessions ? [] : this.mapSessions();

    return (
      <div>
        <Route exact path={this.props.match.url} render={(props) => (
          <div className="container">
            <BootstrapTable pagination className="table" exportCSV data={sessions} striped={ true } hover={ true } multiColumnSearch={ true }>
                <TableHeaderColumn dataSort={true} width="100" isKey dataField='id'>Session ID</TableHeaderColumn>
                <TableHeaderColumn dataSort={true} dataFormat={ this.dateFormatter } filter={ { type: 'RegexFilter' } } dataField='date'>Session Date</TableHeaderColumn>
                <TableHeaderColumn dataSort={true} filter={ { type: 'RegexFilter', delay: 200 } } dataField='username'>User</TableHeaderColumn>
                <TableHeaderColumn dataSort={true} dataFormat={ this.colFormatter }>View Session</TableHeaderColumn>
            </BootstrapTable>
          </div>
        )}/>
        <Route exact path={`${this.props.match.url}/:session`} render={(props) => (
          <SessionGeneral {...props}  sessionType='sales'  />
        )} />
      </div>
    );
  }
}

export default Sales;
