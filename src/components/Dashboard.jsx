// import React, { useEffect, useState } from 'react';
// import { Bar } from 'react-chartjs-2';
// import { getMetrics } from '../services/api'; // Assuming this fetches real-time metrics

// const Dashboard = () => {
//     const [metrics, setMetrics] = useState([]);
//     const [chartData, setChartData] = useState({});

//     // useEffect(() => {
//     //     const fetchMetrics = async () => {
//     //         try {
//     //             const response = await getMetrics();
//     //             const data = response.data;
//     //             setMetrics(data);

//     //             // Prepare chart data based on metrics
//     //             const chartInfo = {
//     //                 labels: data.map(item => item.country),
//     //                 datasets: [
//     //                     {
//     //                         label: 'SMS Sent',
//     //                         backgroundColor: '#4CAF50',
//     //                         borderColor: '#4CAF50',
//     //                         data: data.map(item => item.sms_sent),
//     //                     },
//     //                     {
//     //                         label: 'Success Rate (%)',
//     //                         backgroundColor: '#3B82F6',
//     //                         borderColor: '#3B82F6',
//     //                         data: data.map(item => item.success_rate),
//     //                     },
//     //                     {
//     //                         label: 'Failures',
//     //                         backgroundColor: '#EF4444',
//     //                         borderColor: '#EF4444',
//     //                         data: data.map(item => item.errors),
//     //                     },
//     //                 ],
//     //             };
//     //             setChartData(chartInfo);
//     //         } catch (error) {
//     //             console.error('Error fetching metrics:', error);
//     //         }
//     //     };

//     //     fetchMetrics();
//     // }, []);
//     useEffect(() => {
//         const fetchMetrics = async () => {
//             try {
//                 const response = await getMetrics();
//                 const data = response.data;
//                 setMetrics(data);

//                 // Prepare chart data based on metrics
//                 const chartInfo = {
//                     labels: data.map(item => item.country),
//                     datasets: [
//                         {
//                             label: 'SMS Sent',
//                             backgroundColor: '#4CAF50',
//                             borderColor: '#4CAF50',
//                             data: data.map(item => item.sms_sent),
//                         },
//                         {
//                             label: 'Success Rate (%)',
//                             backgroundColor: '#3B82F6',
//                             borderColor: '#3B82F6',
//                             data: data.map(item => item.success_rate),
//                         },
//                         {
//                             label: 'Failures',
//                             backgroundColor: '#EF4444',
//                             borderColor: '#EF4444',
//                             data: data.map(item => item.errors),
//                         },
//                     ],
//                 };
//                 setChartData(chartInfo);
//             } catch (error) {
//                 console.error('Error fetching metrics:', error);
//             }
//         };

//         fetchMetrics();
//     }, []); // Empty dependency array ensures it only runs once on mount

//     return (
//         <div className="min-h-screen bg-gray-100 p-8">
//             <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Real-Time Metrics Dashboard</h2>

//             {/* Chart Section */}
//             <div className="bg-white shadow-lg rounded-lg p-6 mb-8 animate-fade-in">
//                 <h3 className="text-2xl font-semibold text-gray-800 mb-4">SMS Performance Overview</h3>
//                 <div className="relative">
//                     {chartData && chartData.datasets && (
//                         <Bar
//                             data={chartData}
//                             options={{
//                                 responsive: true,
//                                 plugins: {
//                                     legend: { position: 'top' },
//                                     title: { display: true, text: 'SMS Sent, Success Rates, and Failures' },
//                                 },
//                             }}
//                         />
//                     )}
//                 </div>
//             </div>

//             {/* Table Section */}
//             <div className="bg-white shadow-lg rounded-lg p-6 animate-fade-in">
//                 <h3 className="text-2xl font-semibold text-gray-800 mb-4">Detailed Metrics</h3>
//                 <table className="min-w-full bg-white shadow-lg rounded-lg">
//                     <thead>
//                         <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
//                             <th className="py-3 px-6 text-left">Country</th>
//                             <th className="py-3 px-6 text-left">SMS Sent</th>
//                             <th className="py-3 px-6 text-left">Success Rate (%)</th>
//                             <th className="py-3 px-6 text-left">Failures</th>
//                         </tr>
//                     </thead>
//                     <tbody className="text-gray-600 text-sm font-light">
//                         {metrics.map((metric, index) => (
//                             <tr key={index} className="border-b border-gray-200 hover:bg-gray-100">
//                                 <td className="py-3 px-6 text-left">{metric.country}</td>
//                                 <td className="py-3 px-6 text-left">{metric.sms_sent}</td>
//                                 <td className="py-3 px-6 text-left">{metric.success_rate}%</td>
//                                 <td className="py-3 px-6 text-left">{metric.errors}</td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );
// };

// export default Dashboard;
import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { getMetrics } from '../services/api';

// Import components and scales from Chart.js
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';

// Register necessary components and scales
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const Dashboard = () => {
    const [metrics, setMetrics] = useState([]);
    const [chartData, setChartData] = useState({});

    useEffect(() => {
        const fetchMetrics = async () => {
            try {
                const response = await getMetrics();
                const data = response.data;
                setMetrics(data);

                // Prepare chart data based on metrics
                const chartInfo = {
                    labels: data.map(item => item.country),
                    datasets: [
                        {
                            label: 'SMS Sent',
                            backgroundColor: '#4CAF50',
                            borderColor: '#4CAF50',
                            data: data.map(item => item.sms_sent),
                        },
                        {
                            label: 'Success Rate (%)',
                            backgroundColor: '#3B82F6',
                            borderColor: '#3B82F6',
                            data: data.map(item => item.success_rate),
                        },
                        {
                            label: 'Failures',
                            backgroundColor: '#EF4444',
                            borderColor: '#EF4444',
                            data: data.map(item => item.errors),
                        },
                    ],
                };
                setChartData(chartInfo);
            } catch (error) {
                console.error('Error fetching metrics:', error);
            }
        };

        fetchMetrics();
    }, []); // Empty dependency array ensures it only runs once on mount

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Real-Time Metrics Dashboard</h2>

            {/* Chart Section */}
            <div className="bg-white shadow-lg rounded-lg p-6 mb-8 animate-fade-in">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">SMS Performance Overview</h3>
                <div className="relative">
                    {chartData && chartData.datasets && (
                        <Bar
                            data={chartData}
                            options={{
                                responsive: true,
                                plugins: {
                                    legend: { position: 'top' },
                                    title: { display: true, text: 'SMS Sent, Success Rates, and Failures' },
                                },
                            }}
                        />
                    )}
                </div>
            </div>

            {/* Table Section */}
            <div className="bg-white shadow-lg rounded-lg p-6 animate-fade-in">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Detailed Metrics</h3>
                <table className="min-w-full bg-white shadow-lg rounded-lg">
                    <thead>
                        <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                            <th className="py-3 px-6 text-left">Country</th>
                            <th className="py-3 px-6 text-left">SMS Sent</th>
                            <th className="py-3 px-6 text-left">Success Rate (%)</th>
                            <th className="py-3 px-6 text-left">Failures</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-600 text-sm font-light">
                        {metrics.map((metric, index) => (
                            <tr key={index} className="border-b border-gray-200 hover:bg-gray-100">
                                <td className="py-3 px-6 text-left">{metric.country}</td>
                                <td className="py-3 px-6 text-left">{metric.sms_sent}</td>
                                <td className="py-3 px-6 text-left">{metric.success_rate}%</td>
                                <td className="py-3 px-6 text-left">{metric.errors}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Dashboard;
