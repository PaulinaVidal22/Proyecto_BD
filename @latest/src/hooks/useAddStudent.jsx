import { useState } from 'react';

const url = 'http://localhost:3000/students';

const useAddStudent = () => {
  const [error, setError] = useState(null);

  const addStudent = async (newStudent) => {
    try {
      await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newStudent),
      });
      window.location.reload(); // Refreshes the page to show the updated list
      const savedStudent = await response.json();
      return savedStudent;
    } catch (err) {
      setError(err);
    }
  };

  const createStudent = (newStudent) => {
    addStudent(newStudent).then((savedStudent) => {
      setStudents([...students, savedStudent]);
    });
  };

  return { createStudent, error };
};

export default useAddStudent;
