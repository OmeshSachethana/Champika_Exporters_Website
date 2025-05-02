import React from "react";

const Expertise = () => {
  return (
    <section id="expertise" className="min-h-screen bg-white px-6 md:px-16 py-16">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-800 text-center mb-8">
          Our Expertise
        </h2>

        <p className="text-gray-700 text-justify leading-relaxed mb-6">
          We, <strong>Champika Exporters (Pvt) Ltd</strong>, have expertise across a wide range of industry sectors and hold extensive familiarity in recruiting quality manpower. Over the years, we have successfully recruited and placed thousands of employees for our clients in various sectors.
        </p>

        <p className="text-gray-700 text-justify leading-relaxed mb-6">
          As a well-reputed and leading recruitment agency, we are respected for our professionalism and efficiency. Our company maintains an extensive, internet-based computerized database of applications covering various industry sectors, including managerial staff, skilled, and unskilled workers — enabling us to find the necessary employees at short notice.
        </p>

        <h3 className="text-2xl font-semibold text-blue-700 mb-4">We provide manpower in the following categories:</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-gray-700">
          {[
            "Doctors", "Nurses", "Specialists", "Lab Technicians",
            "Radiologists", "Attendants", "Lecturers", "Principals",
            "Teachers", "Sports Instructors", "Music Teachers", "Elocution Teachers",
            "Accountants", "Architect", "Civil Engineer", "Electrical Engineer",
            "Attorneys at Law", "Surveyors", "Draughtsman", "House boys",
            "Welders", "Lathemen", "Fitters", "Electricians",
            "Air Condition Mechanics", "Machine Operators", "Technical Officers", "Spray Painters",
            "Boiler Attendants", "Managers", "Receptionists", "Housekeepers",
            "Secretaries", "Stenographers", "Drivers", "Housemaids",
            "Gardeners", "Computer Operators"
          ].map((role, index) => (
            <div key={index} className="bg-gray-100 p-2 rounded-md shadow-sm hover:bg-blue-50 transition">
              {role}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
