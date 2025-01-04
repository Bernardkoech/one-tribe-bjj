// src/components/Navbar.jsx
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import logo from "./logo.jpeg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav className="navbar">
      <div className="container mx-auto flex items-center justify-between px-4 py-3 ">
        {/* Left Links */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="nav-link" onClick={() => { scrollToTop(); setIsOpen(false); }}>Home</Link>
          <Link to="/programs" className="nav-link" onClick={() => { scrollToTop(); setIsOpen(false); }}>Programs</Link>
          <Link to="/instructors" className="nav-link" onClick={() => { scrollToTop(); setIsOpen(false); }}>Instructors</Link>
          <Link to="/events" className="nav-link" onClick={() => { scrollToTop(); setIsOpen(false); }}>Events</Link>
          <Link to="/training-videos" className="nav-link" onClick={() => { scrollToTop(); setIsOpen(false); }}>Training videos</Link>
        </div>

        {/* Center Logo and Name as a Link to Home */}
        <Link to="/" className="flex items-center flex-1 justify-center" onClick={() => { scrollToTop(); setIsOpen(false); }}>
          <span className="font-bold text-xl sm:text-2xl bg-gradient-to-r from-black via-red-600 to-green-600 bg-clip-text text-transparent">
            ONE
          </span>
          <img src={logo} alt="One Tribe Logo" className="h-10 sm:h-12 mx-2" />
          <span className="font-bold text-xl sm:text-2xl bg-gradient-to-r from-black via-red-600 to-green-600 bg-clip-text text-transparent">
            TRIBE
          </span>
        </Link>

        {/* Right Buttons */}
        <div className="hidden md:flex space-x-4">
          <Link to="/about" className="button-link" onClick={() => { scrollToTop(); setIsOpen(false); }}>About</Link>
          <Link to="/contacts" className="button-link" onClick={() => { scrollToTop(); setIsOpen(false); }}>Contact Us</Link>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="focus:outline-none text-2xl">
            &#9776;
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mobile-menu md:hidden">
          <Link to="/" onClick={() => { scrollToTop(); setIsOpen(false); }} className="mobile-link">Home</Link>
          <Link to="/programs" onClick={() => { scrollToTop(); setIsOpen(false); }} className="mobile-link">Programs</Link>
          <Link to="/instructors" onClick={() => { scrollToTop(); setIsOpen(false); }} className="mobile-link">Instructors</Link>
          <Link to="/events" onClick={() => { scrollToTop(); setIsOpen(false); }} className="mobile-link">Events</Link>
          <Link to="/about" onClick={() => { scrollToTop(); setIsOpen(false); }} className="mobile-link">About</Link>
          <Link to="/contacts" onClick={() => { scrollToTop(); setIsOpen(false); }} className="mobile-link">Contact</Link>
          <Link to="/training-videos" onClick={() => { scrollToTop(); setIsOpen(false); }} className="mobile-link">Training Videos</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
