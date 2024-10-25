import { useState } from 'react';

const url = 'http://localhost:3000/classes';

const useDeleteClass = () => {
  const [classes, setClasses] = useState([]);
  const [error, setError] = useState(null);

  const deleteClass = async (id) => {
    try {
      await fetch(`${url}/${id}`, { method: 'DELETE' });
      const updatedClasses = classes.filter((selectedClass) => selectedClass.id !== id);
      setClasses(updatedClasses);
      window.location.reload(); // Refreshes the page to show updated selectedClass list
    } catch (err) {
      setError(err);
    }
  };

  const removeClass = (id) => {
    deleteClass(id).then(() => {
      setClasses(classes.filter((selectedClass) => selectedClass.id !== id));
    });
  };

  return { removeClass, error };
};

export default useDeleteClass;