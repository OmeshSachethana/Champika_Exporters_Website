import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createTraveler } from "../api/travelerApi";

const TravelerAddPage = () => {
  const navigate = useNavigate();
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createTraveler(formData);
      navigate('/');
    } catch (error) {
      console.error("Error saving traveler:", error);
    }
  };

  const leftColumnFields = ['fullName', 'passportNumber', 'dateOfBirth', 'gender'];
  const rightColumnFields = ['nationality', 'contactPhone', 'address', 'destinationCountry'];

  const renderField = (key) => (
    <div key={key} className="mb-4">
      <label className="block text-sm font-medium mb-1 capitalize">
        {key.replace(/([A-Z])/g, ' $1').trim()}
      </label>
      {key === "gender" ? (
        <select
          name={key}
          value={formData[key]}
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
          value={formData[key]}
          onChange={handleChange}
          className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          required
        />
      ) : (
        <input
          type={key === "contactPhone" ? "tel" : "text"}
          name={key}
          value={formData[key]}
          onChange={handleChange}
          className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          required
        />
      )}
    </div>
  );

  return (
    <section id="travelers" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">Add New Traveler</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Please fill in the form below to register a new traveler for overseas job placement. All submitted details will be handled with confidentiality and used solely for the recruitment process facilitated by Champika Exporters (Pvt) Ltd.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                {leftColumnFields.map(field => renderField(field))}
              </div>
              <div className="space-y-4">
                {rightColumnFields.map(field => renderField(field))}
              </div>
            </div>

            <div className="mt-8 text-gray-600 text-sm">
              <p className="mb-2">
                <strong>Note:</strong> Ensure all information is accurate. False details may result in application delays or disqualification.
              </p>
              <p>
                If you have any questions or need help filling the form, please contact us at <a href="mailto:champikaexpor@gmail.com" className="text-blue-600 underline">champikaexpor@gmail.com</a> or call our hotline.
              </p>
            </div>

            <div className="flex justify-end space-x-3 mt-6">
              <button
                type="button"
                onClick={() => navigate('/')}
                className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                Save Traveler
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default TravelerAddPage;
