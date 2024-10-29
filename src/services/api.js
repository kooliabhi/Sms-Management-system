// api.js
import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000';  // Backend URL

const axiosConfig = {
    withCredentials: true, // Include cookies in requests for authentication
};

// Login and authentication
export const login = async (username, password) => {
    try {
        const response = await axios.post(
            `${API_URL}/auth/login`,
            { username, password },
            axiosConfig
        );
        return response;
    } catch (error) {
        console.error("Login failed:", error.response?.data?.detail || error.message);
        return error.response;
    }
};

// Get real-time metrics
export const getMetrics = () => {
    return axios.get(`${API_URL}/metrics/metrics`, axiosConfig);
};

// Start, stop, and restart SMS sessions (Process Management)
export const startSession = (country, operator) => {
    return axios.post(`${API_URL}/process/start/${country}/${operator}`, {}, axiosConfig);
};

export const stopSession = (country, operator) => {
    return axios.post(`${API_URL}/process/stop/${country}/${operator}`, {}, axiosConfig);
};

export const restartSession = (country, operator) => {
    return axios.post(`${API_URL}/process/restart/${country}/${operator}`, {}, axiosConfig);
};

// CRUD operations for country-operator pairs
export const addCountryOperator = (data) => {
    return axios.post(`${API_URL}/country_operator/pairs`, data, axiosConfig);
};

export const getCountryOperators = () => {
    return axios.get(`${API_URL}/country_operator/pairs`, axiosConfig);
};

export const updateCountryOperator = (pairId, data) => {
    return axios.put(`${API_URL}/country_operator/pairs/${pairId}`, data, axiosConfig);
};

export const deleteCountryOperator = (pairId) => {
    return axios.delete(`${API_URL}/country_operator/pairs/${pairId}`, axiosConfig);
};
