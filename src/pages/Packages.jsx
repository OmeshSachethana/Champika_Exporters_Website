import React from "react";

// Import your 12 images here
import img1 from "../assets/packages/img1.jpg";
import img2 from "../assets/packages/img2.jpg";
import img3 from "../assets/packages/img3.jpg";
import img4 from "../assets/packages/img4.jpg";
import img5 from "../assets/packages/img5.jpg";
import img6 from "../assets/packages/img6.jpg";
import img7 from "../assets/packages/img7.jpg";
import img8 from "../assets/packages/img8.jpg";
import img9 from "../assets/packages/img9.jpg";
import img10 from "../assets/packages/img10.jpg";
import img11 from "../assets/packages/img11.jpg";
import img12 from "../assets/packages/img12.jpg";

const images = [
  img1, img2, img3, img4, img5, img6,
  img7, img8, img9, img10, img11, img12
];

const Packages = () => {
  return (
    <section id="packages" className="bg-white px-6 md:px-16 py-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-800 text-center mb-12">
          Our Packages
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div key={index} className="w-full aspect-square overflow-hidden rounded-lg shadow hover:shadow-lg transition">
              <img
                src={image}
                alt={`Package ${index + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;
