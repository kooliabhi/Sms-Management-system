import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ handleLogout }) => {
    return (
        <nav className="bg-blue-600 text-white py-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-lg font-bold">SMS Management System</div>
                <ul className="flex space-x-6">
                    <li>
                        <Link to="/dashboard" className="hover:underline">
                            Dashboard
                        </Link>
                    </li>
                    <li>
                        <Link to="/program-control" className="hover:underline">
                            Program Control
                        </Link>
                    </li>
                    <li>
                        <Link to="/country-management" className="hover:underline">
                            Country Management
                        </Link>
                    </li>
                    <li>
                        <button
                            onClick={handleLogout}
                            className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md"
                        >
                            Logout
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
