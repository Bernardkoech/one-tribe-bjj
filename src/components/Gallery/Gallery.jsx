// src/components/Gallery.jsx
import React, { useState, useRef } from "react";
import Slider from "react-slick";
import trainingImg1 from "./trainingImg1.jpeg";
import trainingImg2 from "./trainingImg2.jpeg";
import trainingImg3 from "./trainingImg3.jpeg"; // Ensure this image is imported
import trainingImg4 from "./trainingImg4.jpeg";
import trainingImg5 from "./trainingImg5.jpeg";
import trainingImg6 from "./trainingImg6.jpeg";
import trainingImg7 from "./trainingImg7.jpeg";
import trainingImg8 from "./trainingImg8.jpeg";

const galleryImages = [
    { src: trainingImg1, alt: "10/11/2024" }, // Most recent
    { src: trainingImg3, alt: "8/11/2024" },
    { src: trainingImg2, alt: "7/11/2024" },
    { src: trainingImg6, alt: "5/11/2024" },
    { src: trainingImg5, alt: "5/11/2024" },
    { src: trainingImg4, alt: "30/10/2024" },
    { src: trainingImg8, alt: "26/10/2024" },
    { src: trainingImg7, alt: "25/10/2024" }, // Oldest
  ];
  

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const sliderRef = useRef(null);

  const openModal = (image) => setSelectedImage(image);
  const closeModal = () => setSelectedImage(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    arrows: false, // Disable default arrows
  };

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Training Sessions Gallery
        </h2>

        <div className="relative">
          <Slider ref={sliderRef} {...settings}>
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
                onClick={() => openModal(image)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-[400px] md:h-[600px] lg:h-[800px] object-cover rounded-lg transition duration-500 hover:scale-110"
                />
              </div>
            ))}
          </Slider>

          <button
            onClick={() => sliderRef.current.slickPrev()}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-200 transition"
          >
            &lt; Prev
          </button>
          <button
            onClick={() => sliderRef.current.slickNext()}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-200 transition"
          >
            Next &gt;
          </button>
        </div>

        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
            <div className="relative bg-white rounded-lg shadow-2xl p-4 md:p-6 lg:p-8 max-w-3xl mx-auto">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-gray-700 hover:text-gray-900 transition duration-200"
              >
                <span className="text-2xl">&times;</span>
              </button>
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full max-h-[80vh] object-contain rounded-lg shadow-lg"
              />
              <div className="mt-4 text-center">
                <p className="text-gray-700">{selectedImage.alt}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
