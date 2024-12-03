import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import instructor1 from "./tete.jpeg";
import instructor2 from "./seraphin.jpeg";
import instructor3 from "./george.jpg";
import instructor4 from "./norman1.jpeg";

const instructorsData = [
    {
      name: "Tete",
      role: "Head Instructor",
      bio: "With over 15 years in martial arts, Tete specializes in Brazilian Jiu-Jitsu and Mixed Martial Arts.",
      detailedBio: "Tete began training in martial arts at the age of 10 and has since achieved numerous accolades...",
      expertise: ["Brazilian Jiu-Jitsu", "Mixed Martial Arts"],
      achievements: ["World BJJ Champion 2018", "National MMA Coach of the Year 2020"],
      image: instructor1,
      socialLinks: {
        instagram: "https://instagram.com/tete",
        facebook: "https://facebook.com/tete",
      },
      gallery: [instructor1, instructor1, instructor1, instructor1],
      videoIntro: "https://www.youtube.com/embed/LGO31XqkevM",
    },
    {
      name: "Seraphin",
      role: "BJJ Coach",
      bio: "Seraphin is a dedicated Brazilian Jiu-Jitsu coach with a deep understanding of grappling techniques and a passion for student development.",
      detailedBio: "With over 10 years of experience in Brazilian Jiu-Jitsu...",
      expertise: ["Brazilian Jiu-Jitsu", "Grappling"],
      achievements: ["BJJ National Champion 2019", "Coach of the Year 2021"],
      image: instructor2,
      socialLinks: {
        instagram: "https://instagram.com/seraphin",
        facebook: "https://facebook.com/seraphin",
      },
      gallery: [instructor2, instructor2, instructor2, instructor2],
      videoIntro: "https://www.youtube.com/embed/LGO31XqkevM",
    },
    {
      name: "George",
      role: "Striking Coach",
      bio: "George is a skilled striking coach with a background in Kickboxing.",
      detailedBio: "George has been practicing Kickboxing for over a decade...",
      expertise: ["Kickboxing", "Brazilian Jiu-Jitsu"],
      achievements: ["National Kickboxing Champion 2017", "Certified Kickboxing Instructor"],
      image: instructor3,
      socialLinks: {
        instagram: "https://instagram.com/george",
        facebook: "https://facebook.com/george",
      },
      gallery: [instructor3, instructor3, instructor3, instructor3],
      videoIntro: "https://www.youtube.com/embed/LGO31XqkevM",
    },
    {
      name: "Norman",
      role: "Assistant Striking Coach",
      bio: "Norman is a skilled striking coach with a background in Kickboxing.",
      detailedBio: "Norman has been practicing Kickboxing for over half a decade...",
      expertise: ["Kickboxing", "Brazilian Jiu-Jitsu"],
      achievements: ["National Kickboxing Champion 2017", "Certified Kickboxing Instructor"],
      image: instructor4,
      socialLinks: {
        instagram: "https://instagram.com/george",
        facebook: "https://facebook.com/george",
      },
      gallery: [instructor4,instructor4,instructor4,instructor4],
      videoIntro: "https://www.youtube.com/embed/LGO31XqkevM",
    },
  ];
  

const InstructorDetails = () => {
  const { instructorId } = useParams();
  const instructor = instructorsData[instructorId];
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleImageClick = (img) => {
    setSelectedImage(img);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedImage(null);
  };

  if (!instructor) {
    return <div className="text-center py-12">Instructor not found!</div>;
  }

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <img
            src={instructor.image}
            alt={`${instructor.name} - ${instructor.role}`}
            className="w-48 h-48 object-cover rounded-full mb-6 border-4 border-gray-300 shadow-lg"
          />
          <h2 className="text-3xl font-bold mb-2 text-gray-800">{instructor.name}</h2>
          <p className="text-red-600 font-medium mb-4">{instructor.role}</p>
          <p className="text-gray-700 mb-6 text-center px-4">{instructor.bio}</p>

          {/* Detailed Bio */}
          <p className="text-gray-600 mb-6 text-center px-4">{instructor.detailedBio}</p>

          {/* Embedded Video Section */}
          <div className="w-full max-w-2xl mb-8">
            <h4 className="text-xl font-semibold mb-4 text-center">Introduction Video</h4>
            <div className="relative w-full h-0 pb-[56.25%] shadow-lg rounded-lg overflow-hidden">
              <iframe
                src={instructor.videoIntro}
                title={`${instructor.name}'s Introduction Video`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full"
              ></iframe>
            </div>
          </div>

          {/* Photo Gallery */}
          <h4 className="font-semibold mt-8 text-lg">Photo Gallery:</h4>
          <div className="mt-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {instructor.gallery.map((img, i) => (
              <div
                key={i}
                className="relative overflow-hidden rounded-lg shadow-md transition-transform duration-300 hover:scale-105 cursor-pointer"
                onClick={() => handleImageClick(img)}
              >
                <img
                  src={img}
                  alt={`Gallery image ${i + 1}`}
                  className="w-full h-48 object-cover rounded-lg transition duration-500"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 hover:opacity-100 transition duration-300 flex items-center justify-center text-white font-semibold">
                  View Image
                </div>
              </div>
            ))}
          </div>

          {/* Expertise */}
          <h4 className="mt-6 font-semibold text-lg">Expertise:</h4>
          <ul className="list-disc list-inside text-gray-600">
            {instructor.expertise.map((skill, i) => (
              <li key={i}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Modal for Image Viewing */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="relative">
            <img src={selectedImage} alt="Selected" className="max-w-full max-h-screen object-contain" />
            <button
              className="absolute top-2 right-2 text-white bg-red-500 hover:bg-red-700 rounded-full p-2"
              onClick={handleCloseModal}
            >
              &times; {/* Close button */}
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default InstructorDetails;
