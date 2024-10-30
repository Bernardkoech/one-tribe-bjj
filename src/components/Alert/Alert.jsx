// src/components/Alert.jsx
import React from "react";

const Alert = ({ message, type, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div
        className={`p-6 rounded-lg shadow-lg transition-all duration-300 transform ${
          type === "success" ? "bg-green-500" : "bg-red-500"
        } text-white animate-fadeIn`}
      >
        <h2 className="font-bold text-lg mb-2">{type === "success" ? "Success!" : "Error!"}</h2>
        <p>{message}</p>
        <button
          onClick={onClose}
          className="mt-4 bg-white text-gray-800 py-1 px-4 rounded-full shadow-md hover:bg-gray-200 transition duration-300"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Alert;
