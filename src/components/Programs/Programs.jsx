// src/components/Programs.jsx
import React from "react";

// Import images for each program
import wrestlingImg from "./wrestling.jpg"; // Replace with your actual image path
import kickboxingImg from "./kickboxing.jpg";
import nogiImg from "./nogi.jpg";
import giImg from "./gi.jpg";
import mmaImg from "./mma.jpg";

const programsData = [
  {
    day: "Monday",
    programs: [
      {
        name: "Wrestling",
        time: "18:00 - 19:30",
        level: "All Levels",
        image: wrestlingImg,
        description: "A combat sport focusing on grappling techniques, takedowns, and control. Perfect for building strength and learning how to dominate opponents on the mat.",
      },
      {
        name: "Kickboxing",
        time: "19:30 - 20:30",
        level: "All Levels",
        image: kickboxingImg,
        description: "A striking-based martial art that combines punches, kicks, and footwork, ideal for self-defense and cardio fitness.",
      },
    ],
  },
  {
    day: "Tuesday",
    programs: [
      {
        name: "Nogi",
        time: "18:00 - 20:00",
        level: "All Levels",
        image: nogiImg,
        description: "A style of Brazilian Jiu-Jitsu practiced without the traditional gi, focusing on grappling techniques using grips on the opponent's body instead of clothing.",
      },
    ],
  },
  {
    day: "Wednesday",
    programs: [
      {
        name: "Gi",
        time: "18:00 - 20:00",
        level: "All Levels",
        image: giImg,
        description: "Brazilian Jiu-Jitsu training using the gi, which allows for more control and submission options by gripping the clothing.",
      },
    ],
  },
  {
    day: "Thursday",
    programs: [
      {
        name: "Nogi",
        time: "18:00 - 20:00",
        level: "All Levels",
        image: nogiImg,
        description: "Brazilian Jiu-Jitsu training without the gi, emphasizing speed, leverage, and control in grappling techniques.",
      },
    ],
  },
  {
    day: "Friday",
    programs: [
      {
        name: "Kickboxing",
        time: "18:00 - 19:00",
        level: "All Levels",
        image: kickboxingImg,
        description: "Striking-based training focusing on punches, kicks, and combinations. A great way to improve fitness and learn powerful self-defense skills.",
      },
      {
        name: "MMA",
        time: "19:00 - 20:30",
        level: "Advanced",
        image: mmaImg,
        description: "Mixed Martial Arts combines striking and grappling techniques from multiple disciplines. Designed for advanced students to develop versatile fighting skills.",
      },
    ],
  },
  {
    day: "Saturday",
    programs: [
      {
        name: "Striking",
        time: "10:30 - 11:30",
        level: "All Levels",
        image: kickboxingImg,
        description: "A high-intensity class focused on boxing and kickboxing fundamentals. Great for building speed, power, and agility in striking.",
      },
      {
        name: "Gi/Nogi Open Mat",
        time: "11:30 - 13:00",
        level: "All Levels",
        image: giImg,
        description: "Open mat session where students can practice techniques in either gi or nogi. Ideal for sparring and skill refinement in a relaxed environment.",
      },
    ],
  },
];


const Programs = ({ title }) => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">{title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programsData.map((day, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl overflow-hidden"
            >
              <div className="bg-gray-800 p-4 text-white text-center">
                <h3 className="text-xl font-semibold">{day.day}</h3>
              </div>
              {day.programs.map((program, i) => (
                <div key={i} className="p-4 border-b last:border-b-0">
                  <div className="flex items-center mb-2">
                    <img
                      src={program.image}
                      alt={program.name}
                      className="w-16 h-16 rounded-lg mr-4 shadow-md"
                    />
                    <div>
                      <h4 className="text-lg font-medium">{program.name}</h4>
                      <p className="text-gray-700">{program.time}</p>
                      <p className="text-gray-500">{program.level}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mt-2">{program.description}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default Programs;
