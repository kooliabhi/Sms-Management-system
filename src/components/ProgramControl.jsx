import React, { useState } from 'react';

const ProgramControl = () => {
    const [status, setStatus] = useState('inactive');
    
    // Start program logic
    const handleStart = () => {
        setStatus('active');
    };

    // Stop program logic
    const handleStop = () => {
        setStatus('inactive');
    };

    // Restart program logic with delay
    const handleRestart = () => {
        setStatus('restarting');
        setTimeout(() => setStatus('active'), 2000); // Simulates delay for restart
    };

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-10 animate-fade-in">Program Control Dashboard</h2>

            {/* Current Status Section */}
            <div className="bg-white p-8 rounded-lg shadow-lg mb-8 text-center animate-fade-in">
                <h3 className="text-2xl font-semibold text-gray-700 mb-4">Program Status</h3>
                <div className={`text-3xl font-bold mb-4 ${status === 'active' ? 'text-green-500' : status === 'restarting' ? 'text-yellow-500' : 'text-red-500'}`}>
                    {status === 'active' ? 'Active' : status === 'restarting' ? 'Restarting...' : 'Inactive'}
                </div>
                <p className="text-gray-600">The current status of the SMS program is <span className="font-bold">{status}</span>.</p>
            </div>

            {/* Controls Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <button
                    onClick={handleStart}
                    className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out"
                >
                    Start Program
                </button>

                <button
                    onClick={handleStop}
                    className="bg-red-500 hover:bg-red-600 text-white font-bold py-4 px-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out"
                >
                    Stop Program
                </button>

                <button
                    onClick={handleRestart}
                    className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-4 px-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out"
                >
                    Restart Program
                </button>
            </div>

            {/* Animated Status Section */}
            <div className="mt-10 text-center">
                <p className="text-gray-600 text-lg">Click the buttons above to control the SMS program and see the current status update in real-time.</p>
            </div>
        </div>
    );
};

export default ProgramControl;
