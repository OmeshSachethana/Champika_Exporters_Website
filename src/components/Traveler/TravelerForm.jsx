import React, { useState, useEffect } from "react";
import { X } from "lucide-react";

const TravelerForm = ({ traveler, onSubmit, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    passportNumber: "",
    dateOfBirth: "",
    gender: "male",
    nationality: "",
    contactPhone: "",
    address: "",
    destinationCountry: "",
  });

  useEffect(() => {
    if (traveler) {
      setFormData({
        fullName: traveler.fullName,
        passportNumber: traveler.passportNumber,
        dateOfBirth: traveler.dateOfBirth?.split("T")[0] || "",
        gender: traveler.gender,
        nationality: traveler.nationality,
        contactPhone: traveler.contactPhone,
        address: traveler.address,
        destinationCountry: traveler.destinationCountry,
      });
    }
  }, [traveler]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md relative">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <X size={24} />
        </button>

        <div className="p-6">
          <h3 className="text-xl font-semibold mb-4">
            {traveler ? "Edit Traveler" : "Add New Traveler"}
          </h3>
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              {Object.entries(formData).map(([key, value]) => (
                <div key={key}>
                  <label className="block text-sm font-medium mb-1 capitalize">
                    {key.replace(/([A-Z])/g, ' $1').trim()}
                  </label>
                  {key === "gender" ? (
                    <select
                      name={key}
                      value={value}
                      onChange={handleChange}
                      className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    >
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  ) : key === "dateOfBirth" ? (
                    <input
                      type="date"
                      name={key}
                      value={value}
                      onChange={handleChange}
                      className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  ) : (
                    <input
                      type={key === "contactPhone" ? "tel" : "text"}
                      name={key}
                      value={value}
                      onChange={handleChange}
                      className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  )}
                </div>
              ))}
            </div>
            <div className="flex justify-end space-x-3 mt-6">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                {traveler ? "Update" : "Save"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TravelerForm;