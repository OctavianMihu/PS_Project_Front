// my-app/src/App.js

import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import Admin from './components/Admin';
import Users from './components/Users'; // Import the Users component
import Drivers from './components/Drivers'; // Import the Drivers component
import './CSS/App.css';
import MapPage from "./components/MapPage";

function App() {
    const [isLogged, setIsLogged] = useState(false);
    const login = () => setIsLogged(true);
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<Navigate to="/login" />} />
                    <Route path="/login" element={<Login onLogin={login} />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/loggedin" element={<MapPage />} />
                    <Route path="/admin" element={<Admin />} />
                    <Route path="/users" element={<Users />} /> {/* Add this line */}
                    <Route path="/drivers" element={<Drivers />} /> {/* Add this line */}
                </Routes>
            </div>
        </Router>
    );
}

export default App;