import { useState } from 'react';

const url = 'http://localhost:3000/instructors';

const useDeleteInstructor = () => {
  const [instructors, setInstructors] = useState([]);
  const [error, setError] = useState(null);

  const deleteInstructor = async (id) => {
    try {
      await fetch(`${url}/${id}`, { method: 'DELETE' });
      const updatedInstructors = instructors.filter((instructor) => instructor.id !== id);
      setInstructors(updatedInstructors);
      window.location.reload(); // Refreshes the page to show updated instructor list
    } catch (err) {
      setError(err);
    }
  };

  const removeInstructor = (id) => {
    deleteInstructor(id).then(() => {
      setInstructors(instructors.filter((instructor) => instructor.id !== id));
    });
  };

  return { removeInstructor, error };
};

export default useDeleteInstructor;