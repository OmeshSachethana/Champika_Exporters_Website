import React from "react";

const About = () => {
  return (
    <section id="about" className="min-h-screen bg-gradient-to-br from-blue-50 to-white px-6 md:px-16 py-20 lg:py-28">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6 inline-block">
            About Us
          </h2>
          <p className="text-lg text-blue-800 max-w-3xl mx-auto">
            Pioneering human resource excellence in Sri Lanka since 1979
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-blue-500">
            <h3 className="text-2xl font-semibold text-blue-800 mb-4">Our Story</h3>
            <p className="text-gray-700 leading-relaxed">
              Champika Exporters (Pvt) Ltd was founded in 1979 in Nugegoda, Sri Lanka, with a mission to bridge the gap between skilled Sri Lankan manpower and global demand. Over the decades, we have built a strong reputation as a trusted manpower recruitment and HR consultancy firm — delivering value to both clients and job seekers worldwide.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-blue-500">
            <h3 className="text-2xl font-semibold text-blue-800 mb-4">Our Approach</h3>
            <p className="text-gray-700 leading-relaxed">
              Our consultants specialize in distinct industry sectors, enabling a tailored recruitment experience. We offer placement for permanent, temporary, and contract roles — always prioritizing quality, transparency, and professional integrity in our services.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-20">
          <div className="md:flex">
            <div className="md:w-1/2 bg-blue-900 p-10 flex items-center">
              <div>
                <h3 className="text-3xl font-bold text-white mb-6">Why Choose Champika Exporters?</h3>
                <p className="text-blue-200 leading-relaxed">
                  Our recruitment process is not just about filling vacancies — it’s about building partnerships. We follow ethical practices, offer ongoing training and orientation, and leverage a constantly updated talent database to connect the right candidate with the right job.
                </p>
              </div>
            </div>
            <div className="md:w-1/2 p-10 bg-blue-800 text-white">
              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-4 flex items-center">
                  <span className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3">1</span>
                  Our Mission
                </h3>
                <p className="text-blue-100 leading-relaxed pl-11">
                  To be Sri Lanka's leading human resource supplier — reliable, stable, and committed — providing value-added services to all industry sectors through a people-first approach.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4 flex items-center">
                  <span className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3">2</span>
                  Our Vision
                </h3>
                <p className="text-blue-100 leading-relaxed pl-11">
                  We aim to transform the recruitment landscape by integrating modern technology, deep market understanding, and human-centered values to create meaningful employment opportunities globally.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-purple-500">
            <h3 className="text-2xl font-semibold text-purple-800 mb-4">Our Values</h3>
            <ul className="list-disc pl-6 text-gray-700 leading-relaxed space-y-2">
              <li>Integrity and transparency in all dealings</li>
              <li>Client-focused service with measurable outcomes</li>
              <li>Confidentiality and ethical recruitment practices</li>
              <li>Continuous learning and staff training</li>
              <li>Environmental and social responsibility</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-purple-500">
            <h3 className="text-2xl font-semibold text-purple-800 mb-4">Industries We Serve</h3>
            <ul className="list-disc pl-6 text-gray-700 leading-relaxed space-y-2">
              <li>Healthcare (Doctors, Nurses, Lab Techs)</li>
              <li>Construction & Engineering</li>
              <li>Education (Teachers, Lecturers)</li>
              <li>Hospitality & Tourism</li>
              <li>Transport, Shipping, IT & More</li>
            </ul>
          </div>
        </div>

        <div className="text-center">
          <a
            href="https://applications.slbfe.lk/jobbank/jsearchdisplay_an_m.asp?an=0110"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full transition-colors duration-300 shadow-lg hover:shadow-xl">
              Learn More About Our Recruitment Process
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
