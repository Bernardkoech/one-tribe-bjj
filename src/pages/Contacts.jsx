// src/pages/Contacts.jsx
import React from "react";

const Contacts = () => {
  return (
    <section className="py-10 px-5 bg-gray-100 text-gray-900 mt-4">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>

        {/* Contact Information */}
        <div className="mb-8 text-lg leading-relaxed space-y-4 text-center">
          <p>We’d love to hear from you! Whether you're interested in joining, scheduling a trial class, or just want to learn more about Brazilian Jiu Jitsu, reach out and let’s connect.</p>
        </div>

        {/* Contact Details */}
        <div className="bg-white p-6 rounded-lg shadow-lg mb-8 text-center">
          <h2 className="text-2xl font-semibold mb-4">Location</h2>
          <p className="text-md">The Clubhouse, Ramata Greens Apartments</p>
          <p className="text-md">(Google "One Tribe BJJ Kenya" or "Ramata Greens Apartments")</p>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-center">Send Us a Message</h2>
          <form className="space-y-4 max-w-lg mx-auto">
            <div>
              <label htmlFor="name" className="block text-md font-medium mb-1">Name</label>
              <input
                type="text"
                id="name"
                name="name"
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

        {/* Additional Contact Methods */}
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <h2 className="text-2xl font-semibold mb-4">Connect with Us</h2>
          <p className="text-md mb-2">For quick responses, feel free to reach us at:</p>
          <p className="text-md font-medium">Phone: +254-700-123456</p>
          <p className="text-md font-medium">Email: info@onetribebjjkenya.com</p>

          {/* Social Media Links */}
          <div className="flex justify-center mt-4 space-x-4">
            <a href="https://facebook.com/OneTribeBJJKenya" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 transition duration-200">
              Facebook
            </a>
            <a href="https://instagram.com/OneTribeBJJKenya" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 transition duration-200">
              Instagram
            </a>
            <a href="https://twitter.com/OneTribeBJJKenya" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 transition duration-200">
              Twitter
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
