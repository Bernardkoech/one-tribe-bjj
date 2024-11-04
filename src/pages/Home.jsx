// src/pages/Home.jsx
import React, { useRef } from "react";
import Hero from "../components/Hero/Hero";
import Programs from "../components/Programs/Programs";
import Instructors from "../components/Instructors/Instructors";
import JoinNow from "./JoinNow";
import Events from "../components/Events/Events";
import Gallery from "../components/Gallery/Gallery";
import WhatsAppLink from "../components/WhatsappLink/WhatsappLink";
import Rates from "../components/Rates/Rates";

const Home = () => {
  const programsRef = useRef(null);

  const scrollToPrograms = () => {
    programsRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      
      <Hero scrollToPrograms={scrollToPrograms} />
      <div ref={programsRef}>
        <Programs title="Our Programs" />
      </div>
      
      <Instructors />
      <Rates />
      <Gallery />
      
      <Events />
      <JoinNow />
      
    </div>
  );
};

export default Home;
