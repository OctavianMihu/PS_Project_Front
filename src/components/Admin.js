// my-app/src/components/Admin.js

import React from 'react';
import { Link } from 'react-router-dom';

const Admin = () => {
    return (
        <div>
            <h1>Welcome to the Admin Page</h1>
            <h2><Link to="/users">View Users</Link></h2>
            <h2><Link to="/drivers">View Drivers</Link></h2>
        </div>
    );
}

export default Admin;