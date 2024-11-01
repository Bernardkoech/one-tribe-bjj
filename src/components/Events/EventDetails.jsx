// src/components/EventDetails.jsx
import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import eventPoster1 from "./eventposter1.jpeg";
import eventPoster2 from "./eventposter1.jpeg";
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
    agenda: "10:00 AM - 1:00 PM: Technique Session\n2:00 PM - 4:00 PM: Sparring",
    notes: "Please bring your own gear. Open to all experience levels.",
  },
  {
    id: "2",
    title: "Annual Kickboxing Tournament",
    date: "December 5, 2024",
    location: "Ramata Greens Sports Complex",
    description:
      "Showcase your skills at our annual kickboxing tournament! Spectators welcome.",
    poster: eventPoster2,
    agenda: "10:00 AM: Opening Ceremony\n11:00 AM - 5:00 PM: Tournament Matches",
    notes: "Spectators must register. Fighters must arrive by 9:00 AM.",
  },
  {
    id: "3",
    title: "Self-Defense Workshop",
    date: "January 10, 2025",
    location: "One Tribe Jiu Jitsu Gym, Nairobi",
    description:
      "Learn practical self-defense techniques in this beginner-friendly workshop. Suitable for all ages.",
    poster: eventPoster3,
    agenda: "9:00 AM - 12:00 PM: Workshop\n12:00 PM - 1:00 PM: Q&A Session",
    notes: "Wear comfortable clothing. Refreshments will be provided.",
  },
];

const EventDetails = () => {
  const { eventId } = useParams();
  const event = eventsData.find((event) => event.id === eventId);

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page on load
  }, []);

  if (!event) {
    return <div>Event not found!</div>;
  }

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto max-w-screen-lg px-6">
        <Link to="/events" className="text-blue-600 hover:underline mb-4 inline-block">
          &larr; Back to Events
        </Link>
        <div className="bg-white rounded-xl shadow-lg overflow-hidden p-6">
          <div className="flex justify-center">
            <img
              src={event.poster}
              alt={`${event.title} Poster`}
              className="w-full h-96 md:h-[28rem] lg:h-[32rem] object-cover rounded-lg mb-6"
              style={{ maxWidth: "100%" }}
            />
          </div>
          <h2 className="text-3xl font-bold mb-4 text-gray-800">{event.title}</h2>
          <p className="text-sm text-gray-500 mb-2">{event.date}</p>
          <p className="text-sm text-gray-500 mb-4">{event.location}</p>
          <p className="text-gray-700 mb-8">{event.description}</p>

          <h3 className="text-xl font-semibold mb-2">Agenda</h3>
          <pre className="bg-gray-50 p-4 rounded-lg mb-8 whitespace-pre-wrap text-gray-600">
            {event.agenda}
          </pre>

          <h3 className="text-xl font-semibold mb-2">Additional Notes</h3>
          <p className="bg-gray-50 p-4 rounded-lg text-gray-600">{event.notes}</p>
        </div>
      </div>
    </section>
  );
};

export default EventDetails;
