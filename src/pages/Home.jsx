import React from "react";
// import AdUnit from "./AdUnit"; // Uncomment when needed

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-purple-100 px-6 md:px-16 py-20 flex items-center"
    >
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-6">
          Welcome to Champika Exporters (Pvt) Ltd
        </h1>

        <p className="text-2xl text-orange-800 leading-relaxed mb-4">
          License No: 110
        </p>

        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Founded in 1979 and headquartered in Nugegoda, Sri Lanka, <strong>Champika Exporters (Pvt) Ltd</strong> is one of the country’s most established manpower recruitment and HR consultancy firms. For over four decades, we’ve proudly connected thousands of skilled and semi-skilled individuals with career opportunities across the globe.
        </p>

        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          We believe in revitalizing lives and empowering businesses by bridging the gap between demand and talent. With expertise across healthcare, construction, hospitality, education, logistics, agriculture, and many other sectors, we strive to be your trusted HR partner — delivering exceptional candidates tailored to your needs.
        </p>

        {/* Ad Unit
        <AdUnit />
        */}

        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Our strength lies in our deep industry experience, a robust candidate database, and a relentless focus on quality. All of our consultants are trained professionals who follow the guidelines set by the Sri Lanka Bureau of Foreign Employment. We go beyond simple recruitment — offering pre-deployment training, orientation, visa guidance, and continuous support to both clients and candidates.
        </p>

        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          <strong>Why choose Champika Exporters?</strong>
          <ul className="list-disc text-left pl-8 mt-2 text-base text-gray-700">
            <li>Over 40 years of industry leadership</li>
            <li>Customized staffing solutions across diverse sectors</li>
            <li>Reliable, fast, and cost-effective recruitment process</li>
            <li>Access to a vast, constantly updated candidate database</li>
            <li>Strong focus on ethics, professionalism, and confidentiality</li>
          </ul>
        </p>

        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          We stand by our motto — <span className="italic font-semibold text-blue-800">“Right person for the Right job”</span> — ensuring each placement brings value to both the employer and employee.
        </p>

        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Ready to build your future workforce or embark on your next career journey? Let Champika Exporters (Pvt) Ltd be your guide. We invite you to explore our services and experience the difference of working with a truly committed recruitment partner.
        </p>

        <div className="mt-10">
          <a
            href="/travelers-add"
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
