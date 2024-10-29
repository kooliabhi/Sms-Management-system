import React, { useState } from "react";

const CountryManagement = () => {
  const [pairs, setPairs] = useState([
    { country: "USA", operator: "Verizon", isPriority: false },
    { country: "UK", operator: "Vodafone", isPriority: false },
  ]);
  const [newPair, setNewPair] = useState({
    country: "",
    operator: "",
    isPriority: false,
  });
  const [editIndex, setEditIndex] = useState(null);

  // Add or update country-operator pair
  const addOrUpdatePair = () => {
    if (newPair.country && newPair.operator) {
      if (editIndex !== null) {
        const updatedPairs = [...pairs];
        updatedPairs[editIndex] = newPair;
        setPairs(updatedPairs);
        setEditIndex(null);
      } else {
        setPairs([...pairs, newPair]);
      }
      setNewPair({ country: "", operator: "", isPriority: false });
    }
  };

  // Edit existing pair
  const handleEdit = (index) => {
    setEditIndex(index);
    setNewPair(pairs[index]);
  };

  // Remove pair
  const handleRemove = (index) => {
    const updatedPairs = pairs.filter((_, i) => i !== index);
    setPairs(updatedPairs);
  };

  // Toggle priority
  const togglePriority = (index) => {
    const updatedPairs = [...pairs];
    updatedPairs[index].isPriority = !updatedPairs[index].isPriority; // Toggle priority status
    setPairs(updatedPairs); // Update state
  };

  // Separate prioritized and non-prioritized pairs
  const prioritizedPairs = pairs.filter((pair) => pair.isPriority);
  const regularPairs = pairs.filter((pair) => !pair.isPriority);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10 animate-fade-in">
        Country-Operator Management
      </h2>

      {/* Add/Edit Form */}
      <div className="bg-white p-8 rounded-lg shadow-lg mb-8 animate-fade-in">
        <h3 className="text-2xl font-semibold text-gray-700 mb-4">
          {editIndex !== null
            ? "Edit Country-Operator Pair"
            : "Add New Country-Operator Pair"}
        </h3>
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            placeholder="Country"
            value={newPair.country}
            onChange={(e) =>
              setNewPair({ ...newPair, country: e.target.value })
            }
            className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 transition"
          />
          <input
            type="text"
            placeholder="Operator"
            value={newPair.operator}
            onChange={(e) =>
              setNewPair({ ...newPair, operator: e.target.value })
            }
            className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 transition"
          />
          <button
            onClick={addOrUpdatePair}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-6 rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105"
          >
            {editIndex !== null ? "Update" : "Add Pair"}
          </button>
        </div>

        <div className="mt-4">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              checked={newPair.isPriority}
              onChange={(e) =>
                setNewPair({ ...newPair, isPriority: e.target.checked })
              }
              className="form-checkbox h-5 w-5 text-purple-600"
            />
            <span className="ml-2 text-gray-700">Mark as Priority</span>
          </label>
        </div>
      </div>

      {/* Regular Pairs */}
      <div className="bg-white shadow-lg rounded-lg p-6 mb-8 animate-fade-in">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
          Country-Operator Pairs
        </h3>
        <table className="min-w-full bg-white shadow-lg rounded-lg">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">Country</th>
              <th className="py-3 px-6 text-left">Operator</th>
              <th className="py-3 px-6 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {regularPairs.map((pair, index) => (
              <tr
                key={index}
                className="border-b border-gray-200 hover:bg-gray-100"
              >
                <td className="py-3 px-6 text-left">{pair.country}</td>
                <td className="py-3 px-6 text-left">{pair.operator}</td>
                <td className="py-3 px-6 text-center">
                  <button
                    onClick={() => handleEdit(pairs.indexOf(pair))} // Use full list index
                    className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-1 px-4 rounded-lg mx-1"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleRemove(pairs.indexOf(pair))} // Use full list index
                    className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-4 rounded-lg mx-1"
                  >
                    Remove
                  </button>
                  <button
                    onClick={() => togglePriority(pairs.indexOf(pair))} // Use full list index
                    className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-1 px-4 rounded-lg mx-1"
                  >
                    Prioritize
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Prioritized Pairs */}
      <div className="bg-white shadow-lg rounded-lg p-6 animate-fade-in">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
          Prioritized Country-Operator Pairs
        </h3>
        <table className="min-w-full bg-white shadow-lg rounded-lg">
          <thead>
            <tr className="bg-green-200 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">Country</th>
              <th className="py-3 px-6 text-left">Operator</th>
              <th className="py-3 px-6 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {prioritizedPairs.map((pair, index) => (
              <tr
                key={index}
                className="border-b border-gray-200 hover:bg-gray-100"
              >
                <td className="py-3 px-6 text-left">{pair.country}</td>
                <td className="py-3 px-6 text-left">{pair.operator}</td>
                <td className="py-3 px-6 text-center">
                  <button
                    onClick={() => handleEdit(pairs.indexOf(pair))} // Use full list index
                    className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-1 px-4 rounded-lg mx-1"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleRemove(pairs.indexOf(pair))} // Use full list index
                    className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-4 rounded-lg mx-1"
                  >
                    Remove
                  </button>
                  <button
                    onClick={() => togglePriority(pairs.indexOf(pair))} // Use full list index
                    className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-1 px-4 rounded-lg mx-1"
                  >
                    Unprioritize
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CountryManagement;
