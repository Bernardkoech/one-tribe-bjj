// src/pages/TrainingVideos.jsx
import { useState } from 'react';

const TrainingVideos = () => {
  const [search, setSearch] = useState('');

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8 mt-5">
      <div className="max-w-screen-lg mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Jiu-Jitsu Training Videos</h2>
        
        {/* Search Bar */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search videos..."
            value={search}
            onChange={handleSearch}
            className="w-full p-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Example Video Thumbnail */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src="https://via.placeholder.com/300x200"
              alt="Video Thumbnail"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">Guard Passing Techniques</h3>
              <p className="text-gray-600 mt-2">A comprehensive guide to guard passing techniques in Jiu-Jitsu.</p>
            </div>
          </div>

          {/* Add more video cards */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src="https://via.placeholder.com/300x200"
              alt="Video Thumbnail"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">Armbar from Guard</h3>
              <p className="text-gray-600 mt-2">Mastering the armbar submission from closed guard.</p>
            </div>
          </div>

          {/* More video cards can be dynamically generated here */}
        </div>

        {/* Call to action for adding videos */}
        <div className="text-center mt-8">
          <button
            className="bg-green-500 text-white py-3 px-8 rounded-full text-lg hover:bg-green-600 transition duration-300"
            onClick={() => alert('Add new video functionality coming soon!')}
          >
            Add New Video
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrainingVideos;
