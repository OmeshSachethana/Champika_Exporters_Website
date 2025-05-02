import React from "react";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-br from-blue-50 to-white px-6 md:px-16 py-20 flex items-center"
    >
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-6">
          Welcome to Champika Exporters (Pvt) Ltd
        </h1>

        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          Established in 1979, Champika Exporters is a progressive and forward-thinking Manpower Recruitment & HR Consultancy company in Sri Lanka. We specialize in identifying and connecting top talent with our esteemed clients across a wide range of industry sectors — both locally and internationally.
        </p>

        <p className="text-gray-700 leading-relaxed mb-8">
          Backed by a team of skilled consultants, robust infrastructure, and a deep understanding of recruitment needs, we are proud to offer tailor-made solutions with an unwavering commitment to quality, trust, and professionalism. With our motto — <span className="italic font-medium text-blue-700">“Right person for the Right job”</span> — we aim to bridge opportunities and create lasting partnerships.
        </p>

        <p className="text-gray-700 leading-relaxed">
          Whether you're a client looking for the perfect candidate or a job seeker in search of the right opportunity, <strong>Champika Exporters</strong> is here to serve with dedication, integrity, and innovation.
        </p>

        <div className="mt-10">
          <a
            href="#contact"
            className="inline-block bg-blue-700 text-white px-6 py-3 rounded-full font-medium shadow hover:bg-blue-800 transition"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
