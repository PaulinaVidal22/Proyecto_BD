import { useState } from 'react';

const url = 'http://localhost:3000/instructors';

const useAddInstructor = () => {
  const [error, setError] = useState(null);

  const addInstructor = async (newInstructor) => {
    try {
      await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newInstructor),
      });
      window.location.reload(); // Refreshes the page to show the updated list
      const savedInstructor = await response.json();
      return savedInstructor;
    } catch (err) {
      setError(err);
    }
  };

  const createInstructor = (newInstructor) => {
    addInstructor(newInstructor).then((savedInstructor) => {
      setInstructor([...instructors, savedInstructor]);
    });
  };

  return { createInstructor, error };
};

export default useAddInstructor;
