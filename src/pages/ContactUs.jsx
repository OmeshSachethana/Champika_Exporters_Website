import React from "react";

const ContactUs = () => {
  return (
    <section id="contact" className="min-h-screen bg-white px-6 md:px-16 py-16">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-800 text-center mb-8">
          Contact Us
        </h2>

        <div className="bg-gray-100 rounded-lg shadow p-6 space-y-6 text-gray-700">
          <div>
            <h3 className="text-xl font-semibold text-blue-700">Champika Exporters (Pvt) Ltd</h3>
            <p>Manpower Recruitment and HR Consultancy</p>
          </div>

          <div>
            <h4 className="font-semibold">Address:</h4>
            <p>No.107 1/1, Stanley Thilakarathna Mawatha,</p>
            <p>Nugegoda,</p>
            <p>Sri Lanka.</p>
          </div>

          <div>
            <h4 className="font-semibold">Hotline:</h4>
            <p>+94 (0) 71 431 3671</p>
            <p>+94 (0) 11 434 7720</p>
            <p>+94 (0) 11 434 7717</p>
          </div>

          <div>
            <h4 className="font-semibold">Email:</h4>
            <p>
              <a
                href="mailto:champikaexpor@gmail.com"
                className="text-blue-600 hover:underline"
              >
                champikaexpor@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
