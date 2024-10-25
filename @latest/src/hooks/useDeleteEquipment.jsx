import { useState } from 'react';

const url = 'http://localhost:3000/equipment';

const useDeleteEquipment = () => {
  const [equipment, setEquipment] = useState([]);
  const [error, setError] = useState(null);

  const deleteEquipment = async (id) => {
    try {
      await fetch(`${url}/${id}`, { method: 'DELETE' });
      const updatedEquipment = equipment.filter((equip) => equip.id !== id);
      setEquipment(updatedEquipment);
      window.location.reload(); // Refreshes the page to show updated equipment list
    } catch (err) {
      setError(err);
    }
  };

  const removeEquipment = (id) => {
    deleteEquipment(id).then(() => {
      setEquipment(equipment.filter((equip) => equip.id !== id));
    });
  };

  return { removeEquipment, error };
};

export default useDeleteEquipment;