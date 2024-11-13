// src/pages/JoinNow.jsx
import React, { useState } from "react";
import emailjs from '@emailjs/browser';
import Alert from "../components/Alert/Alert";

const JoinNow = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    occupation: "",
    phone: "",
    email: "",
    experience: ""
    
  });

  const [alert, setAlert] = useState({ message: "", type: "", isVisible: false });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      "service_ahm731q", // Replace with your EmailJS service ID
      "template_muabr3f", // Your template ID
      formData,
      "odeWgS5PvV3YKOWsU" // Replace with your EmailJS user ID
    )
    .then(
      (result) => {
        // Show success alert
        setAlert({ message: "Application submitted successfully!", type: "success", isVisible: true });
        setFormData({ name: "", age: "", occupation: "", phone: "", email: "", experience: "" });
      },
      (error) => {
        // Show error alert
        setAlert({ message: "An error occurred. Please try again.", type: "error", isVisible: true });
      }
    );
  };

  const handleCloseAlert = () => {
    setAlert({ ...alert, isVisible: false });
  };

  return (
    <section className="py-10 px-5 bg-gray-100 text-gray-900 mt-4">
      {alert.isVisible && <Alert message={alert.message} type={alert.type} onClose={handleCloseAlert} />}
      <div className="container mx-auto max-w-xl">
        <h1 className="text-4xl font-bold text-center mb-8">Join the Tribe</h1>
        <p className="text-lg text-center mb-6">
          Ready to start your journey in Brazilian Jiu-Jitsu? Fill out the form below, and we'll reach out with details on how to get started with us!
        </p>

        {/* Join Form */}
        <form className="bg-white p-6 rounded-lg shadow-lg space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="block text-md font-medium mb-1">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter your full name"
              required
            />
          </div>

          <div>
            <label htmlFor="age" className="block text-md font-medium mb-1">Age</label>
            <input
              type="number"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter your age"
              required
            />
          </div>

          <div>
            <label htmlFor="occupation" className="block text-md font-medium mb-1">Occupation</label>
            <input
              type="text"
              id="occupation"
              name="occupation"
              value={formData.occupation}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Your occupation or field of study"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-md font-medium mb-1">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter your phone number"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-md font-medium mb-1">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter your email address"
              required
            />
          </div>

          <div>
            <label htmlFor="experience" className="block text-md font-medium mb-1">Previous Martial Arts Experience</label>
            <textarea
              id="experience"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              rows="4"
              placeholder="Briefly describe any previous martial arts experience"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-full shadow-lg hover:bg-green-700 transition duration-300 transform hover:scale-105"
          >
            Submit Application
          </button>
        </form>
      </div>
    </section>
  );
};

export default JoinNow;
