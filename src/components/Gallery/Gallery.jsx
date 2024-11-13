import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import styles for carousel

// Importing images
import trainingImg1 from "./trainingImg1.jpeg";
import trainingImg2 from "./trainingImg2.jpeg";
import trainingImg3 from "./trainingImg3.jpeg";
import trainingImg4 from "./trainingImg4.jpeg";
import trainingImg5 from "./trainingImg5.jpeg";
import trainingImg6 from "./trainingImg6.jpeg";
import trainingImg7 from "./trainingImg7.jpeg";
import trainingImg8 from "./trainingImg8.jpeg";

// Array of images
const galleryImages = [
  { src: trainingImg1, alt: "10/11/2024" },
  { src: trainingImg2, alt: "8/11/2024" },
  { src: trainingImg3, alt: "7/11/2024" },
  { src: trainingImg4, alt: "5/11/2024" },
  { src: trainingImg5, alt: "5/11/2024" },
  { src: trainingImg6, alt: "30/10/2024" },
  { src: trainingImg7, alt: "26/10/2024" },
  { src: trainingImg8, alt: "25/10/2024" },
];

const Gallery = () => {
  return (
    <div className="py-8 px-4 bg-gray-100">
      <h1 className="text-center text-4xl font-bold mb-8 text-gray-800">Training Gallery</h1>

      <div className="max-w-screen-lg mx-auto overflow-hidden">
        <Carousel
          showThumbs={false}
          infiniteLoop
          autoPlay
          interval={3000}
          transitionTime={500}
          dynamicHeight={true}
        >
          {galleryImages.map((image, index) => (
            <div key={index} className="relative">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-80 object-contain rounded-xl shadow-lg transition-transform duration-300 hover:scale-105"
              />
              <p className="absolute bottom-4 left-0 right-0 text-center text-white bg-black bg-opacity-50 py-2 px-4 text-xl font-semibold rounded-md">{image.alt}</p>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Gallery;
