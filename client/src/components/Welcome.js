import React from 'react';
import requireAuth from './requireAuth';

const Welcome = () => <div id="welcome"><h3>Simply Managed</h3></div>

export default requireAuth(Welcome);
