// Import necessary icons
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import React, { useState } from "react";
import emailjs from "emailjs-com";
import Alert from "../components/Alert/Alert";

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [alert, setAlert] = useState({ visible: false, message: "", type: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    emailjs.send(
      "service_fpizptm",
      "template_5wm5fq7",
      {
        to_name: "One Tribe BJJ",
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message
      },
      "odeWgS5PvV3YKOWsU"
    )
    .then((result) => {
      console.log("Message sent:", result.text);
      setAlert({ visible: true, message: "Your message has been sent successfully!", type: "success" });
      setFormData({ name: "", email: "", message: "" });
    })
    .catch((error) => {
      console.error("Error sending message:", error.text);
      setAlert({ visible: true, message: "There was an error sending your message. Please try again.", type: "error" });
    });
  };

  const handleAlertClose = () => {
    setAlert({ ...alert, visible: false });
  };

  return (
    <section className="py-10 px-5 bg-gray-100 text-gray-900 mt-4">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>

        {alert.visible && (
          <Alert message={alert.message} type={alert.type} onClose={handleAlertClose} />
        )}

        <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-center">Send Us a Message</h2>
          <form className="space-y-4 max-w-lg mx-auto" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-md font-medium mb-1">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Name"
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
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Email"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-md font-medium mb-1">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="5"
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-3 rounded-full shadow-lg hover:bg-green-700 transition duration-300 transform hover:scale-105"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Social Media Links */}
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <h2 className="text-2xl font-semibold mb-4">Follow Us</h2>
          <div className="flex justify-center space-x-6">
            <a href="https://www.facebook.com/OneTribeBJJ/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebookF className="text-2xl text-blue-600 hover:text-blue-700 transition duration-200" />
            </a>
            <a href="https://www.instagram.com/onetribebjj/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram className="text-2xl text-pink-500 hover:text-pink-600 transition duration-200" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
