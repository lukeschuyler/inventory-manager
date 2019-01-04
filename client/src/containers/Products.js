import React, { Component } from 'react';
import requireAuth from '../components/high-order/requireAuth';

class Products extends Component {
  render() {
    return <h1>Products</h1>
  }
}

export default requireAuth(Products);
