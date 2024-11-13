// src/components/Gallery.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";




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
    <section className="py-16 bg-gradient-to-r from-blue-100 via-indigo-200 to-purple-300">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-semibold text-center mb-12 text-gray-900 tracking-tight">
          Training Sessions Gallery
        </h2>

        {/* Swiper Gallery */}
        <Swiper
          spaceBetween={20} // Space between slides
          slidesPerView={3} // Number of slides visible at once
          loop={true} // Infinite loop
          autoplay={{ delay: 2500 }} // Autoplay every 2.5 seconds
          breakpoints={{
            768: {
              slidesPerView: 1, // For small screens, show 1 image at a time
            },
          }}
        >
          {galleryImages.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="relative overflow-hidden rounded-xl shadow-2xl cursor-pointer">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover rounded-xl transition-transform duration-500 hover:scale-105"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Gallery;
