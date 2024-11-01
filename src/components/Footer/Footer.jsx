// Import necessary icons
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  // Function to scroll to the top
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <footer className="bg-black text-white py-10 px-5">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
        
        {/* Contact and Location */}
        <div className="text-center md:text-left space-y-4">
          <h3 className="text-xl font-bold">One Tribe Jiu Jitsu</h3>
          <p>Unleash Your Inner Warrior</p>
          <address className="not-italic">
            The Clubhouse, Ramata Greens Apartments<br />
            Nairobi, Kenya
          </address>
          <p>Email: <a href="mailto:info@onetribebjj.com" className="hover:underline">info@onetribebjj.com</a></p>
        </div>

        {/* Quick Links */}
        <div className="space-y-4 text-center md:text-left">
          <h4 className="text-lg font-semibold">Quick Links</h4>
          <ul className="space-y-2">
            <li><Link to="/about" className="hover:underline" onClick={scrollToTop}>About Us</Link></li>
            <li><Link to="/programs" className="hover:underline" onClick={scrollToTop}>Programs</Link></li>
            <li><Link to="/join" className="hover:underline" onClick={scrollToTop}>Join Now</Link></li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div className="space-y-4 text-center md:text-left">
          <h4 className="text-lg font-semibold">Follow Us</h4>
          <div className="flex space-x-4 justify-center md:justify-start">
            <a href="https://www.facebook.com/OneTribeBJJ/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebookF className="text-2xl text-blue-600 hover:text-blue-700 transition duration-200" />
            </a>
            <a href="https://www.instagram.com/onetribebjj/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram className="text-2xl text-pink-500 hover:text-pink-600 transition duration-200" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="mt-8 text-center border-t border-gray-800 pt-4">
        <p className="text-sm text-gray-500">© {new Date().getFullYear()} One Tribe Jiu Jitsu. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
