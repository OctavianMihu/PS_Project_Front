// my-app/src/components/Users.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../CSS/Users.css'; // Import the CSS file

const Users = () => {
    const [users, setUsers] = useState([]);
    const [newUser, setNewUser] = useState({id: '', username: '', email: '', password: '', wantsRide: false});

    useEffect(() => {
        axios.get('http://localhost:8080/api/users')
            .then(response => {
                console.log('User data:', response.data);
                setUsers(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the user data:', error);
            });
    }, []);

    const addUser = () => {
        axios.post('http://localhost:8080/api/users', newUser)
            .then(response => {
                console.log('User added:', response.data);
                // Add the new user to the state
                setUsers([...users, response.data]);
                // Reset the newUser state
                setNewUser({id: '', username: '', email: '', password: '', wantsRide: false});
            })
            .catch(error => {
                console.error('There was an error adding the user:', error);
            });
    };

    const deleteUser = (id) => {
        axios.delete(`http://localhost:8080/api/users/${id}`)
            .then(response => {
                console.log('User deleted:', response.data);
                // Remove the user from the state
                setUsers(users.filter(user => user.id !== id));
            })
            .catch(error => {
                console.error('There was an error deleting the user:', error);
            });
    };

    const handleInputChange = (event) => {
        setNewUser({...newUser, [event.target.name]: event.target.value});
    };

    return (
        <div>
            <h1>Users</h1>
            <table>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Wants Ride</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {users.map(user => (
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                        <td>{user.wantsRide ? 'Yes' : 'No'}</td>
                        <td>
                            <button onClick={() => deleteUser(user.id)}>Delete</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            <input type="text" name="id" placeholder="ID" value={newUser.id} onChange={handleInputChange} />
            <input type="text" name="username" placeholder="Username" value={newUser.username} onChange={handleInputChange} />
            <input type="text" name="email" placeholder="Email" value={newUser.email} onChange={handleInputChange} />
            <input type="password" name="password" placeholder="Password" value={newUser.password} onChange={handleInputChange} />
            <button onClick={addUser}>Add User</button>
        </div>
    );
}

export default Users;