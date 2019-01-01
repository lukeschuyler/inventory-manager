import React, { Component } from 'react';
import Header from './Header';

export default props => {
  return (
    <div className="App">
      <Header { ...props } /> 
      {props.children}
    </div>
  );
}
