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
    <section id="packages" className="bg-gradient-to-b from-blue-50 to-white px-6 md:px-16 py-20 lg:py-28">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            Our Recruitment Packages
          </h2>
          <p className="text-lg text-blue-700 max-w-3xl mx-auto">
            Tailor-made recruitment solutions designed to meet the needs of diverse industries and international partners. From candidate sourcing to placement and aftercare, we handle it all.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="bg-white p-8 rounded-2xl shadow-md border-l-4 border-blue-600">
            <h3 className="text-2xl font-semibold text-blue-800 mb-4">What’s Included in Our Packages?</h3>
            <ul className="list-disc text-gray-700 pl-6 space-y-2 leading-relaxed">
              <li>Initial screening and shortlisting of candidates</li>
              <li>Interview coordination with foreign principals</li>
              <li>Trade test arrangements (if applicable)</li>
              <li>Medical checks and travel documentation support</li>
              <li>Pre-departure orientation and cultural awareness training</li>
              <li>Visa processing and embassy coordination</li>
              <li>Airport assistance and post-placement support</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-md border-l-4 border-blue-600">
            <h3 className="text-2xl font-semibold text-blue-800 mb-4">Why Choose Our Packages?</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              At Champika Exporters (Pvt) Ltd, our packages are designed to ensure transparency, efficiency, and satisfaction for both clients and candidates. Each service is carefully crafted to streamline your hiring process while maintaining compliance with international labor standards.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Whether you’re hiring domestic workers, skilled technicians, or professionals, we provide end-to-end support and continuous communication throughout the journey.
            </p>
          </div>
        </div>

        <div className="mb-12 text-center">
          <h3 className="text-2xl md:text-3xl font-semibold text-blue-800 mb-6">
            Visual Overview of Our Services
          </h3>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Below is a glimpse of our processes, events, and success stories — from interview sessions and medical screening to client handovers and departure preparation.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-16">
          {images.map((image, index) => (
            <div key={index} className="w-full aspect-square overflow-hidden rounded-lg shadow hover:shadow-lg transition">
              <img
                src={image}
                alt={`Package Process ${index + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition duration-300"
              />
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-6">
            Want to learn more about how our packages can fit your hiring goals? Let us help you recruit confidently with trusted, proven services that put people first.
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 rounded-full font-medium shadow transition duration-300"
          >
            Request a Custom Package
          </a>
        </div>
      </div>
    </section>
  );
};

export default Packages;
