// src/pages/Home.jsx
import React, { useRef, Suspense } from "react";
import Hero from "../components/Hero/Hero";
import WhatsAppLink from "../components/WhatsappLink/WhatsappLink";

// Lazy loading components
const Programs = React.lazy(() => import("../components/Programs/Programs"));
const Instructors = React.lazy(() => import("../components/Instructors/Instructors"));
const Rates = React.lazy(() => import("../components/Rates/Rates"));
const Gallery = React.lazy(() => import("../components/Gallery/Gallery"));
const Events = React.lazy(() => import("../components/Events/Events"));
const JoinNow = React.lazy(() => import("./JoinNow"));

const Home = () => {
  const programsRef = useRef(null);

  // Smooth scroll to Programs section
  const scrollToPrograms = () => {
    if (programsRef.current) {
      programsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <Hero scrollToPrograms={scrollToPrograms} />

      {/* Programs section */}
      <section ref={programsRef} className="py-16">
        <Suspense fallback={<div>Loading Programs...</div>}>
          <Programs title="Our Programs" />
        </Suspense>
      </section>

      {/* Instructors section */}
      <section className="py-16 bg-gray-100">
        <Suspense fallback={<div>Loading Instructors...</div>}>
          <Instructors />
        </Suspense>
      </section>

      {/* Rates section */}
      <section className="py-16">
        <Suspense fallback={<div>Loading Rates...</div>}>
          <Rates />
        </Suspense>
      </section>

      {/* Gallery section */}
      <section className="py-16">
        <Suspense fallback={<div>Loading Gallery...</div>}>
          <Gallery />
        </Suspense>
      </section>

      {/* Events section */}
      <section className="py-16">
        <Suspense fallback={<div>Loading Events...</div>}>
          <Events />
        </Suspense>
      </section>

      {/* JoinNow section */}
      <section className="py-16">
        <Suspense fallback={<div>Loading Join Now...</div>}>
          <JoinNow />
        </Suspense>
      </section>

      {/* WhatsApp Link */}
      <WhatsAppLink />
    </div>
  );
};

export default Home;
