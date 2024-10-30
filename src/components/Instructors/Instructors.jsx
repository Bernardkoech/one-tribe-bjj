// src/components/Instructors.jsx
import React from "react";
import instructor1 from "./tete.jpeg"; // Replace with actual image paths
import instructor2 from "./seraphin.jpeg";
import instructor3 from "./dan.jpeg";

const instructorsData = [
  {
    name: "Tete",
    role: "Head Instructor",
    bio: "With over 15 years in martial arts, Tete specializes in Brazilian Jiu-Jitsu and Mixed Martial Arts. Known for his strategic approach and dedication, he has led students to multiple championships.",
    expertise: ["Brazilian Jiu-Jitsu", "Mixed Martial Arts"],
    image: instructor1,
  },
  {
    name: "Seraphin",
    role: "Kickboxing Coach",
    bio: "Seraphin is a certified kickboxing instructor with a passion for fitness and competitive sports. She brings a high-energy approach to every class, helping students build strength and endurance.",
    expertise: ["Kickboxing", "Strength Training"],
    image: instructor2,
  },
  {
    name: "Dan",
    role: "Wrestling Coach",
    bio: "Dan has a background in collegiate wrestling and over 10 years of coaching experience. His training focuses on technique and conditioning, ensuring students perform at their best.",
    expertise: ["Wrestling", "Conditioning"],
    image: instructor3,
  },
];

const Instructors = () => {
  return (
    <section className="py-12 bg-gray-100 mt-2">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">Meet Our Instructors</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {instructorsData.map((instructor, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
            >
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Instructors;
