import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../CSS/App.css'; // Import the CSS file

function Signup() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [vehicleID, setVehicleID] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        const signupType = e.nativeEvent.submitter.name; // Get the name of the button that was clicked
        const signupData = {
            username,
            email,
            password,
            vehicleID: parseInt(vehicleID, 10),
            role: signupType === 'driver' ? 'driver' : 'rider' // Set role based on button clicked
        };

        // Call your backend API to handle signup
        axios.post('http://localhost:8080/api/signup', signupData)
            .then(response => {
                console.log('Signup successful:', response.data);
                // Redirect or perform further actions based on response
            })
            .catch(error => {
                console.error('There was an error signing up:', error);
            });
    };

    return (
        <div className="container">
            <h2>Signup</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username:</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
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
                <div>
                    <label>Confirm Password:</label>
                    <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </div>
                <div>
                    <label>Vehicle ID:</label>
                    <input
                        type="number"
                        value={vehicleID}
                        onChange={(e) => setVehicleID(e.target.value)}
                    />
                </div>
                <button type="submit" name="rider">Signup</button>
                <button type="submit" name="driver">Signup as Driver</button>
            </form>
            <p>Already have an account? <Link to="/login">Login here</Link></p>
        </div>
    );
}

export default Signup;
