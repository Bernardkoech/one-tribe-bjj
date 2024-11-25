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
  const [loading, setLoading] = useState(false); // State to track loading status

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true); // Show loading spinner

    emailjs.send(
      "service_ahm731q",
      "template_muabr3f",
      formData,
      "odeWgS5PvV3YKOWsU"
    )
    .then(
      (result) => {
        setAlert({ message: "Application submitted successfully!", type: "success", isVisible: true });
        setFormData({ name: "", age: "", occupation: "", phone: "", email: "", experience: "" });
      },
      (error) => {
        setAlert({ message: "An error occurred. Please try again.", type: "error", isVisible: true });
      }
    )
    .finally(() => {
      setLoading(false); // Hide loading spinner after completion
    });
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
              placeholder="Your Age"
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
              placeholder="Your Occupation"
              required
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
              placeholder="Your Phone Number"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-md font-medium mb-1">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Your Email Address"
              required
            />
          </div>

          <div>
            <label htmlFor="experience" className="block text-md font-medium mb-1">Previous Experience</label>
            <textarea
              id="experience"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Share your Jiu-Jitsu experience (if any)"
            ></textarea>
          </div>

          {/* Show loading spinner when form is being submitted */}
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-md shadow-lg hover:bg-green-700 transition duration-300"
            disabled={loading} // Disable button while loading
          >
            {loading ? (
              <span className="flex justify-center items-center">
                <div className="spinner-border animate-spin border-t-2 border-blue-600 rounded-full w-6 h-6 mr-2"></div>
                Submitting...
              </span>
            ) : (
              "Submit Application"
            )}
          </button>
        </form>
      </div>
    </section>
  );
};

export default JoinNow;
