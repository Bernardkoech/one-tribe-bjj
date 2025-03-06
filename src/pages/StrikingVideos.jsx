import React, { useState, useEffect } from "react";

const StrikingVideos = () => {
  const videoCategories = {
    "Boxing": [
      { title: "Boxing Fundamentals", file: "Page.mp4", thumbnail: "/pictures/martialbg.jpg", description: "Learn the basics of boxing techniques." },
      { title: "Advanced Boxing Combos", file: "Page.mp4", thumbnail: "/pictures/martialbg.jpg", description: "Master advanced boxing combinations." },
    ],
    "Kickboxing": [
      { title: "Kickboxing Strikes", file: "Page.mp4", thumbnail: "/pictures/martialbg.jpg", description: "Improve your kickboxing striking skills." },
      { title: "Kickboxing Defense", file: "Page.mp4", thumbnail: "/pictures/martialbg.jpg", description: "Learn how to defend in kickboxing." },
    ],
    "MMA": [
      { title: "MMA Takedowns", file: "Page.mp4", thumbnail: "/pictures/martialbg.jpg", description: "Master takedowns in MMA." },
      { title: "MMA Ground Game", file: "Page.mp4", thumbnail: "/pictures/martialbg.jpg", description: "Improve your ground control in MMA." },
    ],
    "Muay Thai": [
      { title: "Muay Thai Basics", file: "Page.mp4", thumbnail: "/pictures/martialbg.jpg", description: "Learn the fundamentals of Muay Thai." },
      { title: "Muay Thai Clinch", file: "Page.mp4", thumbnail: "/pictures/martialbg.jpg", description: "Master the clinch game in Muay Thai." },
    ]
  };

  const [selectedCategory, setSelectedCategory] = useState("Boxing");
  const [searchQuery, setSearchQuery] = useState("");
  const [hoveredVideo, setHoveredVideo] = useState(null);
  const [fullScreenVideo, setFullScreenVideo] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setFullScreenVideo(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleVideoClick = (file) => {
    setFullScreenVideo(file);
  };

  const filteredVideos = videoCategories[selectedCategory].filter(video =>
    video.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen text-white p-8 pt-24 bg-cover bg-center bg-fixed relative" style={{ backgroundImage: "url('/pictures/strikingbg.jpg')" }}>
      <div className="absolute inset-0 bg-black bg-opacity-20 backdrop-blur-sm"></div>
      <div className="relative max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-red-600 mb-6 uppercase">Striking Videos</h2>

        <div className="mb-6">
          <input
            type="text"
            placeholder="Search videos..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full p-2 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>

        <div className="mb-6 sm:hidden">
          <button className="bg-gray-700 text-white px-4 py-2 rounded-lg w-full" onClick={() => setDropdownOpen(!dropdownOpen)}>
            Select Category
          </button>
          {dropdownOpen && (
            <div className="mt-2 bg-gray-800 rounded-lg overflow-hidden">
              {Object.keys(videoCategories).map(category => (
                <button
                  key={category}
                  onClick={() => { setSelectedCategory(category); setDropdownOpen(false); }}
                  className="block w-full text-left px-4 py-2 hover:bg-red-500"
                >
                  {category}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="mb-6 hidden sm:flex flex-wrap justify-center gap-4">
          {Object.keys(videoCategories).map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full font-semibold transition-all transform hover:scale-110 hover:bg-red-500 duration-300 ${selectedCategory === category ? 'bg-red-600 text-white' : 'bg-gray-700 text-gray-300'}`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredVideos.map((video, index) => (
            <div 
              key={index} 
              className="cursor-pointer bg-gray-900 rounded-lg overflow-hidden shadow-lg transition-all transform hover:scale-105"
              onClick={() => handleVideoClick(video.file)}
            >
              <div className="relative w-full h-48" onMouseEnter={() => setHoveredVideo(index)} onMouseLeave={() => setHoveredVideo(null)}>
                {hoveredVideo === index ? (
                  <video className="absolute top-0 left-0 w-full h-full object-cover" loop muted autoPlay>
                    <source src={`/videos/${video.file}`} type="video/mp4" />
                  </video>
                ) : (
                  <img src={video.thumbnail} alt={video.title} className="absolute top-0 left-0 w-full h-full object-cover" />
                )}
              </div>
              <div className="p-2 text-center">
                <h3 className="font-bold text-lg">{video.title}</h3>
                <p className="text-sm text-gray-400">{video.description}</p>
              </div>
            </div>
          ))}
        </div>

        {fullScreenVideo && (
          <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50" onClick={() => setFullScreenVideo(null)}>
            <video className="max-w-full max-h-full" controls autoPlay>
              <source src={`/videos/${fullScreenVideo}`} type="video/mp4" />
            </video>
          </div>
        )}
      </div>
    </div>
  );
};

export default StrikingVideos;
