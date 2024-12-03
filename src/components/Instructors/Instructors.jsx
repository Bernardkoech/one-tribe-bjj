// src/components/Instructors.jsx
import React from "react";
import { Link } from "react-router-dom"; // Import Link
import instructor1 from "./tete.jpeg"; 
import instructor2 from "./seraphin.jpeg";
import instructor3 from "./george.jpg";
import instructor4 from "./norman1.jpeg";

const instructorsData = [
  {
    name: "Tete",
    role: "Founder One tribe",
    bio: "With over 15 years in martial arts, Tete specializes in Brazilian Jiu-Jitsu and Mixed Martial Arts.",
    expertise: ["Brazilian Jiu-Jitsu", "Mixed Martial Arts"],
    image: instructor1,
  },
  {
    name: "Seraphin",
    role: "Head Instructor",
    bio: "Seraphin is a dedicated Brazilian Jiu-Jitsu coach with a deep understanding of grappling techniques and a passion for student development.",
    expertise: ["Brazilian Jiu-Jitsu", "Grappling"],
    image: instructor2,
  },
  {
    name: "George",
    role: "Striking and Grappling Coach",
    bio: "George is a skilled striking coach with a background in Kickboxing.",
    expertise: ["Striking (Kickboxing, Muay Thai)", "Grappling(Brazilian Jiu-Jitsu, Wrestling)"],
    image: instructor3,
  },
  {
    name: "Norman",
    role: "Assistant Striking and Grappling Coach",
    bio: "Norman is a skilled striking coach with a background in Kickboxing.",
    expertise: ["Striking (Kickboxing, Muay Thai)", "Grappling(Brazilian Jiu-Jitsu, Wrestling)"],
    image: instructor4,
  },
];

const Instructors = () => {
  return (
    <section className="py-12 bg-gray-100 mt-2">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">Meet Our Instructors</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {instructorsData.map((instructor, index) => (
            <Link to={`/instructors/${index}`} key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <img
                src={instructor.image}
                alt={`${instructor.name} - ${instructor.role}`}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{instructor.name}</h3>
                <p className="text-red-600 font-medium">{instructor.role}</p>
                <p className="text-gray-700 mt-4">{instructor.bio}</p>
                <h4 className="mt-6 font-semibold">Expertise:</h4>
                <ul className="list-disc list-inside text-gray-600">
                  {instructor.expertise.map((skill, i) => (
                    <li key={i}>{skill}</li>
                  ))}
                </ul>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Instructors;
