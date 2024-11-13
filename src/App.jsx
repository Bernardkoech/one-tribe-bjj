// App.js
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
import WhatsAppLink from "./components/WhatsappLink/WhatsappLink";
import TrainingVideos from "./pages/TrainingVideos";
import useAuth from "./hooks/useAuth";
import { Navigate } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

const App = () => {
  const { user, role } = useAuth();

  return (
    <Router>
      <Navbar />

      <br />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/instructors" element={<Instructors />} />
        <Route path="/instructors/:instructorId" element={<InstructorDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/join" element={<JoinNow />} />
        <Route path="/events" element={<Events />} />
        <Route path="/events/:eventId" element={<EventDetails />} />

        {/* Protected route for training-videos */}
        <Route
          path="/training-videos"
          element={
            user && role === "member" ? (
              <TrainingVideos />
            ) : (
              <Navigate to="/login" />
            )
          }
        />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>

      <Footer />
      <WhatsAppLink />
    </Router>
  );
};

export default App;
