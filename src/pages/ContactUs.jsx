import React from "react";

const ContactUs = () => {
  const contactMethods = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      title: "Champika Exporters (Pvt) Ltd",
      subtitle: "Manpower Recruitment and HR Consultancy"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Address",
      content: (
        <>
          <p>No.107 1/1, Stanley Thilakarathna Mawatha,</p>
          <p>Nugegoda, Sri Lanka.</p>
        </>
      )
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: "Hotline",
      content: (
        <>
          <p>+94 (0) 71 431 3671</p>
          <p>+94 (0) 11 434 7720</p>
          <p>+94 (0) 11 434 7717</p>
          <p>+94 (0) 76 380 4006 (WhatsApp)</p>
        </>
      )
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Email",
      content: (
        <a
          href="mailto:champikaexpor@gmail.com"
          className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
        >
          champikaexpor@gmail.com
        </a>
      )
    }
  ];

  return (
    <section id="contact" className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-50 px-6 md:px-16 py-20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-6">
            Whether you're a job seeker, employer, or industry partner, we're here to help. Use any of the following channels to contact our team and we’ll respond promptly.
          </p>
          <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        {/* Contact Information Card - Centered */}
        <div className="flex justify-center">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all hover:scale-[1.02] duration-300 hover:shadow-2xl w-full max-w-2xl">
            <div className="p-10 space-y-8">
              {contactMethods.map((method, index) => (
                <div key={index} className="flex items-start space-x-5 group">
                  <div className="bg-blue-100 p-3 rounded-full group-hover:bg-blue-200 transition-colors duration-300">
                    <div className="text-blue-600">
                      {method.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-1">{method.title}</h3>
                    {method.subtitle && <p className="text-gray-600 mb-2">{method.subtitle}</p>}
                    <div className="text-gray-600 space-y-1">
                      {method.content}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16 bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="h-80 w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.925152755426!2d79.8894143153268!3d6.822295721325107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25a7a8c5d077f%3A0x4a7a7a8c5d077f!2sNugegoda%2C%20Sri%20Lanka!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Company Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
