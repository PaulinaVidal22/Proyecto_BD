import { useState } from 'react';

const url = 'http://localhost:3000/classes';

const useAddClass = () => {
  const [error, setError] = useState(null);

  const addClass = async (newClass) => {
    try {
      await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newClass),
      });
      window.location.reload(); // Refreshes the page to show the updated list
      const savedClass = await response.json();
      return savedClass;
    } catch (err) {
      setError(err);
    }
  };

  const createClass = (newClass) => {
    addClass(newClass).then((savedClass) => {
      setClasses([...classes, savedClass]);
    });
  };

  return { createClass, error };
};

export default useAddClass;
