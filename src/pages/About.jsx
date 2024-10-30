// src/pages/About.jsx
import React from "react";

const About = () => {
  return (
    <section className="py-10 px-5 bg-gray-100 text-gray-900 mt-4">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">About One Tribe BJJ Kenya</h1>

        {/* Introduction */}
        <div className="mb-8 text-lg leading-relaxed space-y-4">
          <p>
            One Tribe BJJ Kenya, located in Nairobi, was founded on the belief that Jiu Jitsu is for everyone. The gym is home to a diverse community of locals and internationals, with members ranging from students to seasoned professionals. Since moving to our new location, we’ve been growing consistently, welcoming one or two new members each month.
          </p>
          <p>
            We proudly accommodate a variety of skill levels, from white belts to our brown belt head coach, Séraphin. Established in 2013, the gym has a rich history rooted in dedication and inclusivity, attracting people from all walks of life.
          </p>
        </div>

        {/* Gym Story */}
        <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
          <h2 className="text-3xl font-semibold mb-4">Our Story</h2>
          <p className="leading-relaxed">
            In 2012, after years in the USA, I returned to Kenya and was eager to share my passion for Jiu Jitsu. At that time, BJJ was still a novelty in Nairobi, but in 2013, Dave Thompson, a BTT Canada brown belt, opened the first official BJJ school here. Over time, the gym evolved from “Westlands BJJ” into what we proudly call “One Tribe.”
          </p>
          <p className="leading-relaxed mt-4">
            Today, we offer daily classes in a permanent space, making BJJ accessible and affordable to locals. With Coach Séraphin’s expertise and dedication, the gym has become a home for beginners and competitors alike. We are united as one tribe, driven by a shared love for the art of Jiu Jitsu.
          </p>
        </div>

        {/* Key Facts */}
        <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
          <h2 className="text-3xl font-semibold mb-4">Key Facts</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>Location:</strong> Nairobi, Kenya</li>
            <li><strong>Members:</strong> Around 4 people per session, growing steadily</li>
            <li><strong>Skill Range:</strong> White belts to Coach Séraphin (brown belt)</li>
            <li><strong>Opened:</strong> 2013, now in a new location</li>
            <li><strong>Atmosphere:</strong> Friendly, community-driven, and accessible</li>
          </ul>
        </div>

        {/* Coach Tete's Profile */}
        <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
          <h2 className="text-3xl font-semibold mb-4">Meet Tete, Our Founder</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>Name:</strong> Tete</li>
            <li><strong>Age:</strong> 43</li>
            <li><strong>Belt:</strong> Purple</li>
            <li><strong>Profession:</strong> Real Estate Development</li>
            <li><strong>Experience:</strong> 11 years in BJJ, also trained in Muay Thai and Boxing</li>
          </ul>
          <p className="leading-relaxed mt-4">
            Tete began training Jiu Jitsu in the United States and brought his passion back to Kenya in 2012. As a pioneer of BJJ in Nairobi, Tete has been instrumental in building One Tribe’s foundation and culture, inspiring a new generation of martial artists.
          </p>
        </div>

        {/* Gym Life and Community */}
        <div className="bg-white p-6 rounded-lg shadow-lg mb-8 ">
          <h2 className="text-3xl font-semibold mb-4">Life at One Tribe</h2>
          <p className="leading-relaxed">
            Our gym is a mix of students and professionals, both local and international, with ages ranging from their twenties to forties. Many train for the sport, while some are preparing to compete – and we’re excited to foster their growth. Our community keeps expanding, with more locals joining due to our accessible membership options.
          </p>
          <p className="leading-relaxed mt-4">
            We face unique challenges, such as Nairobi’s intense traffic, but our members’ commitment never wavers. We aim to expand BJJ across Nairobi, hoping to one day have gyms in every corner of the city.
          </p>
        </div>

        {/* Future Vision */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold mb-4">Our Vision</h2>
          <p className="leading-relaxed">
            With Nairobi’s growing interest in Jiu Jitsu, we foresee a bright future for our gym and the sport in Kenya. One Tribe BJJ Kenya will continue to grow, nurturing both hobbyists and competitors, while offering a place where everyone, regardless of background, can belong.
          </p>
          <p className="leading-relaxed mt-4">
            If you’re visiting Nairobi, don’t miss out on the wildlife, live entertainment, and the vibrant spirit of our city – and, of course, drop by to train with us!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
