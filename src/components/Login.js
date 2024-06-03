import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../CSS/App.css'; // Import the CSS file

function Login({ onLogin }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        // Perform your login logic here. If login is successful, call the onLogin function and navigate to the '/loggedin' page.
        onLogin();
        navigate('/loggedin');
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const loginData = {
            email,
            password
        };

        if (email === 'admin@admin.com' && password === 'admin') {
            onLogin();
            navigate('/admin'); // Redirect to the Admin page
        } else {
            axios.post('http://localhost:8080/api/login', loginData)
                .then(response => {
                    console.log('Login successful:', response.data);
                    onLogin();
                    navigate('/loggedin'); // Redirect to the LoggedInPage after successful login
                })
                .catch(error => {
                    console.error('There was an error logging in:', error);
                });
        }
    };

    return (
        <div className="container">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit">Login</button>
                <button type="submit">Login as Driver</button>
            </form>
            <p>Don't have an account? <Link to="/signup">Signup here</Link></p>
        </div>
    );
}

export default Login;
