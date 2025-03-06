import React, { useState } from "react";

const GrapplingVideos = () => {
  const videoCategories = {
    "Takedowns and Throws": [
      { title: "Single Leg Takedown", file: "Page.mp4", description: "Basic single leg takedown technique." },
      { title: "Double Leg Takedown", file: "Page.mp4", description: "Powerful double leg takedown execution." },
    ],
    "The Guard": [
      { title: "Closed Guard Basics", file: "Page.mp4", description: "Fundamentals of the closed guard position." },
      { title: "Sweeps from Guard", file: "Page.mp4", description: "Effective sweeps to reverse your opponent." },
    ],
    "Submissions and Finishes": [
      { title: "Triangle Choke", file: "Page.mp4", description: "How to apply a triangle choke from guard." },
      { title: "Armbar from Mount", file: "Page.mp4", description: "Executing an armbar from the mount position." },
    ],
    "Escapes and Defenses": [
      { title: "Hip Escape", file: "Page.mp4", description: "Essential movement for escaping bad positions." },
      { title: "Bridge and Roll", file: "Page.mp4", description: "Escape from mount using bridge and roll." },
    ],
    "Drills": [
      { title: "Guard Retention Drills", file: "Page.mp4", description: "Improve your guard retention skills." },
      { title: "Takedown Entry Drills", file: "Page.mp4", description: "Perfecting entries for takedowns." },
    ],
    "Rolls": [
      { title: "Flow Rolling", file: "Page.mp4", description: "Light sparring session for smooth movement." },
      { title: "Live Sparring", file: "Page.mp4", description: "Intense sparring session with a partner." },
    ],
  };

  const [selectedCategory, setSelectedCategory] = useState("Takedowns and Throws");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredVideos = videoCategories[selectedCategory].filter(video =>
    video.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen text-white p-8 pt-24 bg-cover bg-center bg-fixed relative" style={{ backgroundImage: "url('/pictures/martialbg.jpg')" }}>
      <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>
      <div className="relative max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-red-600 mb-6 uppercase">Grappling Videos</h2>

        {/* Search Bar */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search videos..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full p-2 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>

        {/* Mobile Dropdown for Categories */}
        <div className="relative md:hidden mb-6">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="w-full bg-gray-800 text-white py-2 px-4 rounded-lg flex justify-between items-center"
          >
            {selectedCategory} <span>{isDropdownOpen ? "▲" : "▼"}</span>
          </button>
          {isDropdownOpen && (
            <div className="absolute w-full bg-gray-900 mt-2 rounded-lg shadow-lg z-10">
              {Object.keys(videoCategories).map((category) => (
                <button
                  key={category}
                  onClick={() => {
                    setSelectedCategory(category);
                    setIsDropdownOpen(false);
                  }}
                  className="w-full text-left px-4 py-2 hover:bg-red-500"
                >
                  {category}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Desktop Categories */}
        <div className="hidden md:flex gap-4 overflow-x-auto pb-4 mb-6 border-b border-gray-700">
          {Object.keys(videoCategories).map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2 rounded-full font-semibold text-white transition-all ${
                selectedCategory === category ? "bg-red-600" : "bg-gray-800 hover:bg-red-500"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Video List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredVideos.map((video, index) => (
            <div key={index} className="cursor-pointer bg-gray-900 rounded-lg overflow-hidden shadow-lg transition-all transform hover:scale-105">
              <video
                className="w-full h-48"
                controls
                playsInline
                webkit-playsinline
                onClick={(e) => {
                  e.target.play();
                  if (e.target.requestFullscreen) {
                    e.target.requestFullscreen();
                  } else if (e.target.webkitRequestFullscreen) {
                    e.target.webkitRequestFullscreen();
                  } else if (e.target.msRequestFullscreen) {
                    e.target.msRequestFullscreen();
                  }
                }}
              >
                <source src={`/videos/${video.file}`} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="p-3">
                <h3 className="text-lg font-semibold text-red-500">{video.title}</h3>
                <p className="text-gray-400 text-sm">{video.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GrapplingVideos;
