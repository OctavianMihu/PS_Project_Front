import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../CSS/Home.css';

function Home() {
    const [pickup, setPickup] = useState('');
    const [destination, setDestination] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const rideRequest = {
            pickup,
            destination
        };

        axios.post('http://localhost:8080/api/rides', rideRequest)
            .then(response => {
                console.log('Ride Requested:', response.data);
            })
            .catch(error => {
                console.error('There was an error requesting the ride!', error);
            });
    };

    return (
        <div className="home-container">
            <h2>Welcome to RideShare</h2>
            <form onSubmit={handleSubmit} className="ride-form">
                <div className="form-group">
                    <label>Pickup Location:</label>
                    <input
                        type="text"
                        value={pickup}
                        onChange={(e) => setPickup(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Destination:</label>
                    <input
                        type="text"
                        value={destination}
                        onChange={(e) => setDestination(e.target.value)}
                    />
                </div>
                <button type="submit">Request Ride</button>
            </form>
            <p>Go to your <Link to="/profile">Profile</Link></p>
        </div>
    );
}

export default Home;
