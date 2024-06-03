import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home'; // Import the Home component
import './CSS/App.css';
import MapPage from "./components/MapPage"; // Import the CSS file

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
                    <Route path="/home" element={<Home />} /> {}
                    <Route path="/loggedin" element={<MapPage />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
