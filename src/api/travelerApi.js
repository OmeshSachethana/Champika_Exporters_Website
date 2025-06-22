const API_URL = 'http://localhost:3000/api/v1/travelers';

export const getTravelers = async () => {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error('Failed to fetch travelers');
  }
  return response.json();
};

export const createTraveler = async (travelerData) => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(travelerData),
  });
  if (!response.ok) {
    throw new Error('Failed to create traveler');
  }
  return response.json();
};

export const updateTraveler = async (id, travelerData) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(travelerData),
  });
  if (!response.ok) {
    throw new Error('Failed to update traveler');
  }
  return response.json();
};

export const deleteTraveler = async (id) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error('Failed to delete traveler');
  }
  return response.json();
};