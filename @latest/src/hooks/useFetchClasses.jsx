import { useState, useEffect } from 'react';

const url = 'http://localhost:3000/classes';

const useFetchClasses = () => {

  const [classes, setClasses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchClasses = async () => {
    try {
      const response = await fetch(url, { method: "GET" });
      const data = await response.json();

      setClasses(data);
      setLoading(false);
    } catch (err) {

      setError(err);
      setLoading(false);

    }
  };

  useEffect(() => {
    fetchClasses(); 
  }, []); 


  return { classes, loading, error };
};

export default useFetchClasses;