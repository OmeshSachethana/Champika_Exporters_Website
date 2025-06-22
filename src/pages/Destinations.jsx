import React from 'react';

const Destinations = () => {
  const destinations = [
    {
      id: 1,
      country: 'Romania',
      image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description:
        'Romania has emerged as a key destination for Sri Lankan workers, offering skilled and semi-skilled job opportunities in sectors like construction, hospitality, manufacturing, and agriculture.'
    },
    {
      id: 2,
      country: 'Turkey',
      image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description:
        'Turkey continues to offer job placements for professionals in tourism, food and beverage, healthcare, and construction — attracting Sri Lankan talent with competitive packages and cultural harmony.'
    },
    {
      id: 3,
      country: 'Russia',
      image: 'https://images.unsplash.com/photo-1513326738677-b964603b136d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description:
        'As one of the world’s largest economies, Russia offers exciting opportunities for electricians, drivers, hospitality workers, and caregivers from Sri Lanka.'
    },
    {
      id: 4,
      country: 'Kuwait',
      image: 'https://images.unsplash.com/photo-1586769852836-bc069f74e9e6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description:
        'Kuwait is a long-standing destination for Sri Lankan domestic workers, drivers, hospitality professionals, and engineers, offering tax-free income and structured work environments.'
    },
    {
      id: 5,
      country: 'Bahrain',
      image: 'https://images.unsplash.com/photo-1601593768799-76e6a0a8d4b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description:
        'Bahrain continues to attract Sri Lankan talent in sectors such as healthcare, hospitality, retail, and mechanical trades — known for its supportive work culture and growing job market.'
    }
  ];

  return (
    <section className="bg-gradient-to-b from-blue-50 to-white min-h-screen px-6 md:px-16 py-20 lg:py-28">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            Top Work Destinations
          </h1>
          <p className="text-lg text-blue-700 max-w-3xl mx-auto">
            Champika Exporters (Pvt) Ltd facilitates legal and ethical overseas employment by connecting Sri Lankan talent with high-demand job markets across the globe. Explore our featured countries below.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {destinations.map((destination) => (
            <div
              key={destination.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200"
            >
              <img
                src={destination.image}
                alt={destination.country}
                className="w-full h-52 object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://images.unsplash.com/photo-1500835556837-99ac94a94552?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80';
                }}
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  {destination.country}
                </h2>
                <p className="text-gray-600 mb-6">{destination.description}</p>

                <button className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-all duration-300">
                  Explore Opportunities in {destination.country}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-20">
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-6">
            Whether you are seeking a new opportunity abroad or looking to hire skilled Sri Lankan workers, our global partnerships and ethical recruitment practices ensure a reliable, transparent process.
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 rounded-full font-medium transition-colors shadow-lg"
          >
            Contact Us for Job Opportunities
          </a>
        </div>
      </div>
    </section>
  );
};

export default Destinations;
