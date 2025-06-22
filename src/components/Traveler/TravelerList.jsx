const TravelerList = ({ travelers, onEdit, onDelete }) => {
  if (travelers.length === 0) {
    return <p className="text-gray-500">No travelers found.</p>;
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border">
        <thead>
          <tr className="bg-gray-100">
            <th className="py-2 px-4 border">Name</th>
            <th className="py-2 px-4 border">Passport</th>
            <th className="py-2 px-4 border">Nationality</th>
            <th className="py-2 px-4 border">Destination</th>
            <th className="py-2 px-4 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {travelers.map((traveler) => (
            <tr key={traveler._id} className="hover:bg-gray-50">
              <td className="py-2 px-4 border">{traveler.fullName}</td>
              <td className="py-2 px-4 border">{traveler.passportNumber}</td>
              <td className="py-2 px-4 border">{traveler.nationality}</td>
              <td className="py-2 px-4 border">{traveler.destinationCountry}</td>
              <td className="py-2 px-4 border">
                <div className="flex space-x-2">
                  <button
                    onClick={() => onEdit(traveler)}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => onDelete(traveler._id)}
                    className="text-red-600 hover:text-red-800"
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TravelerList;