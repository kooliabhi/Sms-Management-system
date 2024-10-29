// Login.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../services/api";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLoginClick = async (e) => {
    e.preventDefault();

    try {
      const result = await login(username, password);
      if (result && result.status === 200) {
        console.log("Login successful");
        navigate("/dashboard");
      } else {
        throw new Error("Login failed. Please try again.");
      }
    } catch (error) {
      setError(error.message);
      console.error("Login error:", error.message);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 flex justify-center items-center">
      <div className="bg-white p-10 rounded-lg shadow-lg max-w-md w-full animate-fade-in">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6 animate-bounce">
          Sms-Management-Sys-Login!
        </h2>
        <form onSubmit={handleLoginClick}>
          <div className="mb-6">
            <label className="block text-gray-700 font-bold mb-2">
              Username
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 transition duration-300 ease-in-out transform hover:scale-105 focus:scale-105"
              placeholder="username"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 transition duration-300 ease-in-out transform hover:scale-105 focus:scale-105"
              placeholder="password"
            />
          </div>
          {error && <p className="text-red-500 text-center mb-4">{error}</p>}
          <button
            type="submit"
            className="w-full bg-purple-500 text-white font-bold py-3 px-4 rounded-lg hover:bg-purple-600 transition-transform duration-300 transform hover:scale-105 focus:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-600"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
