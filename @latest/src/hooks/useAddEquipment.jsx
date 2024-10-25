import { useState } from 'react';

const url = 'http://localhost:3000/equipment';

const useAddEquipment = () => {
  const [error, setError] = useState(null);

  const addEquipment = async (newEquipment) => {
    try {
      await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newEquipment),
      });
      window.location.reload(); // Refreshes the page to show the updated list
      const savedEquipment = await response.json();
      return savedEquipment;
    } catch (err) {
      setError(err);
    }
  };

  const createEquipment = (newEquipment) => {
    addEquipment(newEquipment).then((savedEquipment) => {
      setEquipment([...equipment, savedEquipment]);
    });
  };

  return { createEquipment, error };
};

export default useAddEquipment;
