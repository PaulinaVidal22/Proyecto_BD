import { useState } from 'react';

const url = 'http://localhost:3000/shifts';

const useAddShift = () => {
  const [error, setError] = useState(null);

  const addShift = async (newShift) => {
    try {
      await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newShift),
      });
      window.location.reload(); // Refreshes the page to show the updated list
      const savedShift = await response.json();
      return savedShift;
    } catch (err) {
      setError(err);
    }
  };

  const createShift = (newShift) => {
    addShift(newShift).then((savedShift) => {
      setShift([...shifts, savedShift]);
    });
  };

  return { createShift, error };
};

export default useAddShift;
