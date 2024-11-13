import React from "react";
import { Link } from "react-router-dom";
import eventPoster1 from "./eventposter1.jpeg";
import eventPoster2 from "./eventposter2.jpeg";
import eventPoster3 from "./eventposter1.jpeg";

const eventsData = [
  {
    id: "1",
    title: "Jiu Jitsu Seminar with Tete",
    date: "November 18, 2024",
    location: "One Tribe Jiu Jitsu Gym, Nairobi",
    description:
      "Join our head instructor, Tete, for a special seminar focusing on advanced Brazilian Jiu-Jitsu techniques. Open to all levels!",
    poster: eventPoster1,
  },
  {
    id: "2",
    title: "Jiu Jitsu Potluck League",
    date: "November 16, 2024",
    location: "Decathlon Kenya",
    description:
      "Showcase your skills at the Jiu Jitsu Potluck League",
    poster: eventPoster2,
  },
  {
    id: "3",
    title: "Self-Defense Workshop",
    date: "January 10, 2025",
    location: "One Tribe Jiu Jitsu Gym, Nairobi",
    description:
      "Learn practical self-defense techniques in this beginner-friendly workshop. Suitable for all ages.",
    poster: eventPoster3,
  },
];

const Events = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-gray-100 to-gray-200">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Upcoming Events
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {eventsData.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transform transition-all duration-300"
            >
              {/* Event Poster */}
              <div className="w-full h-60 overflow-hidden flex items-center justify-center">
  <img
    src={event.poster}
    alt={`${event.title} Poster`}
    className="w-full h-full object-cover"
  />
</div>
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-2xl font-semibold text-gray-800">
                    {event.title}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">{event.date}</p>
                  <p className="text-sm text-gray-500">{event.location}</p>
                </div>
                <p className="text-gray-600 mb-6">{event.description}</p>
                <Link
                  to={`/events/${event.id}`}
                  className="block w-full text-center bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
