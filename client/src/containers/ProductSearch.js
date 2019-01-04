import React, { Component } from 'react';
import requireAuth from '../components/high-order/requireAuth';

class ProductSearch extends Component {
  render() {
    return <h1>ProductSearch</h1>
  }
}

export default requireAuth(ProductSearch);
