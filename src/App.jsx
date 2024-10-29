// App.jsx
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import ProgramControl from './components/ProgramControl';
import CountryManagement from './components/CountryManagement';
import Navbar from './components/Navbar';
import Cookies from 'js-cookie';

function App() {
    const [token, setToken] = useState(Cookies.get('jwt_token') || null);

    useEffect(() => {
        setToken(Cookies.get('jwt_token'));
    }, []);

    const handleLogout = () => {
        Cookies.remove('jwt_token');
        setToken(null);
    };

    // Protect routes by checking if the user is logged in
    const ProtectedRoute = ({ children }) => {
        if (!token) {
            return <Navigate to="/" />;
        }
        return children;
    };

    return (
        <Router>
            <div>
                {token && <Navbar handleLogout={handleLogout} />}
                <Routes>
                    <Route path="/" element={<Login setToken={setToken} />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/program-control" element={<ProgramControl />} />
                    <Route path="/country-management" element={<CountryManagement />} />
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
