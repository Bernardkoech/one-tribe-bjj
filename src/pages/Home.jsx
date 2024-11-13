// src/pages/Home.jsx
import React, { useRef } from "react";
import Hero from "../components/Hero/Hero";
import Programs from "../components/Programs/Programs";
import Instructors from "../components/Instructors/Instructors";
import JoinNow from "./JoinNow";
import Events from "../components/Events/Events";
import Gallery from "../components/Gallery/Gallery";
import WhatsAppLink from "../components/WhatsappLink/WhatsappLink";  // Make sure you're using this component if it's required.
import Rates from "../components/Rates/Rates";

const Home = () => {
  // Refs for smooth scrolling
  const programsRef = useRef(null);

  // Scroll to Programs section
  const scrollToPrograms = () => {
    if (programsRef.current) {
      programsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      {/* Hero section */}
      <Hero scrollToPrograms={scrollToPrograms} />

      {/* Programs section */}
      <section ref={programsRef} className="py-16">
        <Programs title="Our Programs" />
      </section>

      {/* Instructors section */}
      <section className="py-16 bg-gray-100">
        <Instructors />
      </section>

      {/* Rates section */}
      <section className="py-16">
        <Rates />
      </section>

       {/* Gallery section */}
       <section className="py-16">
        <Gallery />
      </section>
      
      {/* Events section */}
      <section className="py-16">
        <Events />
      </section>

      {/* JoinNow section */}
      <section className="py-16">
        <JoinNow />
      </section>

      {/* WhatsApp Link Section - If required */}
      <WhatsAppLink />
    </div>
  );
};

export default Home;
