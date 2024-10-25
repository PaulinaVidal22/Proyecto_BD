import { useState } from 'react';

const url = 'http://localhost:3000/shifts';

const useDeleteShift = () => {
  const [shifts, setShifts] = useState([]);
  const [error, setError] = useState(null);

  const deleteShift = async (id) => {
    try {
      await fetch(`${url}/${id}`, { method: 'DELETE' });
      const updatedShifts = shifts.filter((shift) => shift.id !== id);
      setShifts(updatedShifts);
      window.location.reload(); // Refreshes the page to show updated shift list
    } catch (err) {
      setError(err);
    }
  };

  const removeShift = (id) => {
    deleteShift(id).then(() => {
      setShifts(shifts.filter((shift) => shift.id !== id));
    });
  };

  return { removeShift, error };
};

export default useDeleteShift;