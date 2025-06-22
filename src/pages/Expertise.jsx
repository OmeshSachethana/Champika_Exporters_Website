import React from "react";

const Expertise = () => {
  const roles = [
    "Chef", "Nurses", "Specialists", "Lab Technicians", "Caregiver", "Attendants",
    "Lecturers", "Principals", "Teachers", "Sports Instructors", "Kitchen helper", "Waiter",
    "Accountants", "Architect", "Civil Engineer", "Electrical Engineer", "Tile mason", "Surveyors",
    "Bartender", "House boys", "Barbender", "Welders", "Lathemen", "Fitters", "Electricians",
    "Pizza maker", "Excavator operator", "Warehouse worker", "Air Condition Mechanics",
    "Machine Operators", "Technical Officers", "Spray Painters", "Boiler Attendants", "Managers",
    "Receptionists", "Housekeepers", "Bike Rider", "Bulldozer driver", "Secretaries", "Stenographers",
    "Drivers", "Housemaids", "Gardeners", "Computer Operators"
  ];

  return (
    <section id="expertise" className="min-h-screen bg-gradient-to-b from-blue-50 to-white px-6 md:px-16 py-20 lg:py-28">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            Our Expertise
          </h2>

          <p className="text-lg text-blue-800 max-w-3xl mx-auto">
            Specialized recruitment across healthcare, engineering, education, hospitality, and technical industries
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-blue-600">
            <p className="text-gray-700 leading-relaxed">
              At <strong className="text-blue-800">Champika Exporters (Pvt) Ltd</strong>, we are more than a recruitment agency — we are a strategic partner for global human resource needs. With over four decades of experience, we have developed unmatched expertise in sourcing, evaluating, and placing the most suitable candidates across a diverse range of roles and industries.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-blue-600">
            <p className="text-gray-700 leading-relaxed">
              Our well-maintained, cloud-based candidate database enables us to act swiftly — reducing recruitment delays for our clients. From health professionals to engineers, educators, and support staff, we ensure every candidate is screened, trained, and matched accurately to employer needs.
            </p>
          </div>
        </div>

        <div className="mb-12 text-center">
          <h3 className="text-2xl md:text-3xl font-semibold text-blue-800 mb-6 inline-block px-6 py-2 bg-blue-100 rounded-full">
            We provide manpower in the following categories:
          </h3>
          <p className="text-gray-700 max-w-2xl mx-auto mt-4">
            Our clients span hospitals, construction companies, hotels, schools, factories, and corporate offices — both in Sri Lanka and abroad. Whether you need certified professionals, skilled tradespeople, or dependable support staff, we have the right match ready.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mb-20">
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
          <p className="text-lg text-gray-700 mb-6 max-w-3xl mx-auto">
            We understand that recruitment is more than just filling a position — it’s about aligning skills, personality, and goals to ensure long-term success. Our screening, testing, and orientation processes are designed to ensure both clients and candidates are set up for success from day one.
          </p>
          <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105">
            Request Manpower Solutions
          </button>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
