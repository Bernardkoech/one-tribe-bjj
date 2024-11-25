import React from "react";

const StrikingVideos = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8 mt-4">
      <div className="max-w-screen-lg mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Grappling Videos
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Example Video Card */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src="https://via.placeholder.com/300x200"
              alt="Video Thumbnail"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">
                Advanced Takedowns
              </h3>
              <p className="text-gray-600 mt-2">
                Learn advanced takedown techniques for grappling.
              </p>
            </div>
          </div>

          {/* Add more video cards here */}
        </div>
      </div>
    </div>
  );
};

export default StrikingVideos;
