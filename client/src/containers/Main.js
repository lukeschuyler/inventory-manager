import React from 'react';
import requireAuth from '../components/high-order/requireAuth';

const Main = () => <div id="welcome"><h1>Inventory Manager</h1></div>

export default requireAuth(Main);
