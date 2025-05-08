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
            Pioneering human resource solutions since 1979
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-blue-500">
            <h3 className="text-2xl font-semibold text-blue-800 mb-4">Our Story</h3>
            <p className="text-gray-700 leading-relaxed">
              Established in 1979, Champika Exporters (Pvt) Ltd is a progressive and forward-thinking company dedicated to finding innovative human resources for our clients. We continue to look for new opportunities while maintaining the highest standards of professionalism.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-blue-500">
            <h3 className="text-2xl font-semibold text-blue-800 mb-4">Our Approach</h3>
            <p className="text-gray-700 leading-relaxed">
              Our unique recruiting approach allows our consultants to specialize in specific areas, providing better service to both clients and candidates. We are experts in placing permanent, temporary, and contract professionals across various industries.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-16">
          <div className="md:flex">
            <div className="md:w-1/2 bg-blue-900 p-10 flex items-center">
              <div>
                <h3 className="text-3xl font-bold text-white mb-6">Why Choose Us?</h3>
                <p className="text-blue-200 leading-relaxed">
                  We invite you to explore our company as a gateway into business and relationships. Discover the many ways we apply knowledge to fulfill our client's requirements through market expertise and lasting partnerships.
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
                  To be Sri Lanka's leading human resource supplier — reliable, stable, and committed — providing value-added services to all industry sectors.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4 flex items-center">
                  <span className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3">2</span>
                  Our Vision
                </h3>
                <p className="text-blue-100 leading-relaxed pl-11">
                  We are committed to consistently provide innovative recruitment solutions by building a strong professional team focused on market knowledge, relationship and excellence in everything we do.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
  <a
    href="https://applications.slbfe.lk/jobbank/jsearchdisplay_an_m.asp?an=0110"
    target="_blank"
    rel="noopener noreferrer"
  >
    <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full transition-colors duration-300 shadow-lg hover:shadow-xl">
      Learn More About Our Services
    </button>
  </a>
</div>

      </div>
    </section>
  );
};

export default About;