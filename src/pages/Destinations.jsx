import React from 'react';

const Destinations = () => {
  const destinations = [
    {
      id: 1,
      country: 'Romania',
      image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
      description: 'Discover the stunning landscapes of Transylvania and vibrant culture.'
    },
    {
      id: 2,
      country: 'Turkey',
      image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
      description: 'Experience the unique blend of European and Asian cultures.'
    },
    {
      id: 3,
      country: 'Russia',
      image: 'https://images.unsplash.com/photo-1513326738677-b964603b136d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
      description: 'Explore vast landscapes and rich history of the largest country.'
    },
    // {
    //   id: 4,
    //   country: 'Kuwait',
    //   image: 'https://images.unsplash.com/photo-1586769852836-bc069f74e9e6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
    //   description: 'Discover modern architecture and rich Arabian heritage.'
    // },
    // {
    //   id: 5,
    //   country: 'Bahrain',
    //   image: 'https://images.unsplash.com/photo-1601593768799-76e6a0a8d4b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
    //   description: 'Experience the pearl of the Gulf with its ancient history and modern skyline.'
    // }
  ];

  return (
    <div className="bg-white min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">Discover Amazing Countries</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination) => (
            <div key={destination.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
              <img 
                src={destination.image} 
                alt={destination.country} 
                className="w-full h-48 object-cover"
                onError={(e) => {
                  e.target.onerror = null; 
                  e.target.src = 'https://images.unsplash.com/photo-1500835556837-99ac94a94552?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80';
                }}
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-3 text-gray-800">{destination.country}</h2>
                <p className="text-gray-600 mb-6">{destination.description}</p>
                
                <button className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors duration-300">
                  Explore {destination.country}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Destinations;