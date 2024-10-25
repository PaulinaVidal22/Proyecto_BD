import { useState } from 'react';

const url = 'http://localhost:3000/students';

const useDeleteStudent = () => {
  const [students, setStudents] = useState([]);
  const [error, setError] = useState(null);

  const deleteStudent = async (id) => {
    try {
      await fetch(`${url}/${id}`, { method: 'DELETE' });
      const updatedStudents = students.filter((student) => student.id !== id);
      setStudents(updatedStudents);
      window.location.reload(); // Refreshes the page to show updated student list
    } catch (err) {
      setError(err);
    }
  };

  const removeStudent = (id) => {
    deleteStudent(id).then(() => {
      setStudents(students.filter((student) => student.id !== id));
    });
  };

  return { removeStudent, error };
};

export default useDeleteStudent;