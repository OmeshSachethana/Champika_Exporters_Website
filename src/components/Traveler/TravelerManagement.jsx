import React, { useState, useEffect } from "react";
import { getTravelers, createTraveler, updateTraveler, deleteTraveler } from "../../api/travelerApi";
import TravelerForm from "./TravelerForm";
import TravelerList from "./TravelerList";
import { Button } from "../UI/Button";

const TravelerManagement = () => {
  const [travelers, setTravelers] = useState([]);
  const [currentTraveler, setCurrentTraveler] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);

  useEffect(() => {
    fetchTravelers();
  }, []);

  const fetchTravelers = async () => {
    try {
      const { data } = await getTravelers();
      setTravelers(data.travelers);
    } catch (error) {
      console.error("Error fetching travelers:", error);
    }
  };

  const handleSubmit = async (formData) => {
    try {
      if (currentTraveler) {
        await updateTraveler(currentTraveler._id, formData);
      } else {
        await createTraveler(formData);
      }
      fetchTravelers();
      setIsFormOpen(false);
      setCurrentTraveler(null);
    } catch (error) {
      console.error("Error saving traveler:", error);
    }
  };

  const handleEdit = (traveler) => {
    setCurrentTraveler(traveler);
    setIsFormOpen(true);
  };

  const handleDelete = async (id) => {
    try {
      await deleteTraveler(id);
      fetchTravelers();
    } catch (error) {
      console.error("Error deleting traveler:", error);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-semibold">Manage Travelers</h3>
        <Button 
          onClick={() => setIsFormOpen(true)}
          className="bg-blue-600 hover:bg-blue-700"
        >
          Add New Traveler
        </Button>
      </div>

      <TravelerList 
        travelers={travelers} 
        onEdit={handleEdit} 
        onDelete={handleDelete} 
      />

      {isFormOpen && (
        <TravelerForm
          traveler={currentTraveler}
          onSubmit={handleSubmit}
          onClose={() => {
            setIsFormOpen(false);
            setCurrentTraveler(null);
          }}
        />
      )}
    </div>
  );
};

export default TravelerManagement;