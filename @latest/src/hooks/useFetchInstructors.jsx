import { useState, useEffect } from 'react';

const url = 'http://localhost:3000/instructors';

const useFetchInstructors = () => {

  const [instructors, setInstructors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchInstructors = async () => {
    try {
      const response = await fetch(url, { method: "GET" });
      const data = await response.json();

      setInstructors(data);
      setLoading(false);
    } catch (err) {

      setError(err);
      setLoading(false);

    }
  };

  useEffect(() => {
    fetchInstructors(); 
  }, []); 


  return { instructors, loading, error };
};

export default useFetchInstructors;