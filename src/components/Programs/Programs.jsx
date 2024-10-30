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
      },
      {
        name: "Kickboxing",
        time: "19:30 - 20:30",
        level: "All Levels",
        image: kickboxingImg,
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
      },
      {
        name: "MMA",
        time: "19:00 - 20:30",
        level: "Advanced",
        image: mmaImg,
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
      },
      {
        name: "Gi/Nogi Open Mat",
        time: "11:30 - 13:00",
        level: "All Levels",
        image: giImg,
      },
    ],
  },
];

const Programs = ({title}) => {
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
                <div key={i} className="flex items-center p-4 border-b last:border-b-0">
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
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
