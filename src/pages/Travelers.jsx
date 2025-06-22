import React from "react";
import TravelerManagement from "../components/Traveler/TravelerManagement";

const Travelers = () => {
  return (
    <section id="travelers" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Traveler Management</h2>
        <TravelerManagement />
      </div>
    </section>
  );
};

export default Travelers;