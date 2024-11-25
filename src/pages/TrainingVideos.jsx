import React from "react";
import { useNavigate } from "react-router-dom";
import strikingImage from "./striking.jpeg";
import grapplingImage from "./hero.jpeg";
import { BsPlayCircleFill } from "react-icons/bs";

const TrainingVideos = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 p-8 mt-4">
      <div className="max-w-screen-lg mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-800 drop-shadow-lg">
            Training Videos
          </h2>
          <p className="mt-3 text-lg text-gray-600">
            Enhance your skills with expertly curated training content.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* Striking Category Card */}
          <div
            onClick={() => navigate("/training-videos/striking")}
            className="relative group bg-white rounded-lg shadow-2xl overflow-hidden cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-xl"
          >
            <img
              src={strikingImage}
              alt="Striking Techniques"
              className="w-full h-56 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-0 group-hover:opacity-80 transition duration-300"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-2xl font-bold drop-shadow-lg">Striking</h3>
              <p className="text-sm drop-shadow-lg">
                Explore striking techniques and drills to sharpen your skills.
              </p>
            </div>
            {/* Play Icon */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white opacity-0 group-hover:opacity-100 transition duration-300">
              <BsPlayCircleFill size={32} />
            </div>
          </div>

          {/* Grappling Category Card */}
          <div
            onClick={() => navigate("/training-videos/grappling")}
            className="relative group bg-white rounded-lg shadow-2xl overflow-hidden cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-xl"
          >
            <img
              src={grapplingImage}
              alt="Grappling Techniques"
              className="w-full h-56 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-0 group-hover:opacity-80 transition duration-300"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-2xl font-bold drop-shadow-lg">Grappling</h3>
              <p className="text-sm drop-shadow-lg">
                Learn advanced grappling moves and techniques to dominate the
                mat.
              </p>
            </div>
            {/* Play Icon */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white opacity-0 group-hover:opacity-100 transition duration-300">
              <BsPlayCircleFill size={32} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainingVideos;
