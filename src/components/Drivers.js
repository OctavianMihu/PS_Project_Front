// my-app/src/components/Drivers.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../CSS/Drivers.css'; // Import the CSS file

const Drivers = () => {
    const [drivers, setDrivers] = useState([]);
    const [newDriver, setNewDriver] = useState({id: '', vehicleID: '', username: '', email: '', password: '', isDriving: false, isWorking: false});

    useEffect(() => {
        axios.get('http://localhost:8080/api/drivers')
            .then(response => {
                console.log('Driver data:', response.data);
                setDrivers(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the driver data:', error);
            });
    }, []);

    const addDriver = () => {
        axios.post('http://localhost:8080/api/drivers', newDriver)
            .then(response => {
                console.log('Driver added:', response.data);
                // Add the new driver to the state
                setDrivers([...drivers, response.data]);
                // Reset the newDriver state
                setNewDriver({id: '', vehicleID: '', username: '', email: '', password: '', isDriving: false, isWorking: false});
            })
            .catch(error => {
                console.error('There was an error adding the driver:', error);
            });
    };

    const deleteDriver = (id) => {
        axios.delete(`http://localhost:8080/api/drivers/${id}`)
            .then(response => {
                console.log('Driver deleted:', response.data);
                // Remove the driver from the state
                setDrivers(drivers.filter(driver => driver.id !== id));
            })
            .catch(error => {
                console.error('There was an error deleting the driver:', error);
            });
    };

    const handleInputChange = (event) => {
        setNewDriver({...newDriver, [event.target.name]: event.target.value});
    };

    return (
        <div>
            <h1>Drivers</h1>
            <table>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Vehicle ID</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Is Driving</th>
                    <th>Is Working</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {drivers.map(driver => (
                    <tr key={driver.id}>
                        <td>{driver.id}</td>
                        <td>{driver.vehicleID}</td>
                        <td>{driver.username}</td>
                        <td>{driver.email}</td>
                        <td>{driver.isDriving ? 'Yes' : 'No'}</td>
                        <td>{driver.isWorking ? 'Yes' : 'No'}</td>
                        <td>
                            <button onClick={() => deleteDriver(driver.id)}>Delete</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            <input type="text" name="id" placeholder="ID" value={newDriver.id} onChange={handleInputChange} />
            <input type="text" name="vehicleID" placeholder="Vehicle ID" value={newDriver.vehicleID} onChange={handleInputChange} />
            <input type="text" name="username" placeholder="Username" value={newDriver.username} onChange={handleInputChange} />
            <input type="text" name="email" placeholder="Email" value={newDriver.email} onChange={handleInputChange} />
            <input type="password" name="password" placeholder="Password" value={newDriver.password} onChange={handleInputChange} />
            <button onClick={addDriver}>Add Driver</button>
        </div>
    );
}

export default Drivers;