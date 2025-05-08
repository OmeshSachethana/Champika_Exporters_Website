import React from "react";

const Expertise = () => {
  const roles = [
    "Chef", "Nurses", "Specialists", "Lab Technicians",
    "Caregiver", "Attendants", "Lecturers", "Principals",
    "Teachers", "Sports Instructors", "Kitchen helper", "Waiter",
    "Accountants", "Architect", "Civil Engineer", "Electrical Engineer",
    "Tile mason", "Surveyors", "Bartender", "House boys", "Barbender",
    "Welders", "Lathemen", "Fitters", "Electricians", "Pizza maker", 
    "Excavator operator", "Warehouse worker", "Air Condition Mechanics", 
    "Machine Operators", "Technical Officers", "Spray Painters",
    "Boiler Attendants", "Managers", "Receptionists", "Housekeepers", 
    "Bike Rider", "Bulldozer driver", "Secretaries", "Stenographers", 
    "Drivers", "Housemaids", "Gardeners", "Computer Operators"
  ];

  return (
    <section id="expertise" className="min-h-screen bg-gradient-to-b from-blue-50 to-white px-6 md:px-16 py-20 lg:py-28">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4 inline-block">
            Our Expertise
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1.5 bg-blue-500 rounded-full"></span>
          </h2>
          <p className="text-lg text-blue-800 max-w-3xl mx-auto">
            Specialized recruitment across diverse industry sectors
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-blue-600">
            <p className="text-gray-700 leading-relaxed mb-6">
              We, <strong className="text-blue-800">Champika Exporters (Pvt) Ltd</strong>, have expertise across a wide range of industry sectors and hold extensive familiarity in recruiting quality manpower. Over the years, we have successfully recruited and placed thousands of employees for our clients in various sectors.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-blue-600">
            <p className="text-gray-700 leading-relaxed">
              As a well-reputed and leading recruitment agency, we are respected for our professionalism and efficiency. Our company maintains an extensive, internet-based computerized database of applications covering various industry sectors, including managerial staff, skilled, and unskilled workers — enabling us to find the necessary employees at short notice.
            </p>
          </div>
        </div>

        <div className="mb-12 text-center">
          <h3 className="text-2xl md:text-3xl font-semibold text-blue-800 mb-6 inline-block px-6 py-2 bg-blue-100 rounded-full">
            We provide manpower in the following categories:
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mb-16">
          {roles.map((role, index) => (
            <div 
              key={index} 
              className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex items-center justify-center text-center border-l-4 border-blue-400"
            >
              <span className="text-gray-800 font-medium">{role}</span>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105">
            Request Manpower Solutions
          </button>
        </div>
      </div>
    </section>
  );
};

export default Expertise;