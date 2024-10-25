import { useState, useEffect } from 'react';

const url = 'http://localhost:3000/students';

const useFetchStudents = () => {

  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchActivities = async () => {
    try {
      const response = await fetch(url, { method: "GET" });
      const data = await response.json();

      setStudents(data);
      setLoading(false);
    } catch (err) {

      setError(err);
      setLoading(false);

    }
  };

  useEffect(() => {
    fetchActivities(); 
  }, []); 


  return { students, loading, error };
};

export default useFetchStudents;