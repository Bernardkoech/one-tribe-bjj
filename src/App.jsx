import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Programs from "./components/Programs/Programs";
import Navbar from "./components/Navbar/Navbar";
import Instructors from "./components/Instructors/Instructors";
import Footer from "./components/Footer/Footer";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import JoinNow from "./pages/JoinNow";
import Events from "./components/Events/Events";
import InstructorDetails from "./components/Instructors/InstructorDetails";
import EventDetails from "./components/Events/EventDetails";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const App = () => {
  return (
    <Router>
      <Navbar />
      
      <br />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/instructors" element={<Instructors />} />
        <Route path="/instructors/:instructorId" element={<InstructorDetails />} /> {/* Corrected here */}
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/join" element={<JoinNow />} />
        <Route path="/events" element={<Events />} />
        <Route path="/events/:eventId" element={<EventDetails />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
