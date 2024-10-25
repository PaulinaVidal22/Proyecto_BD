import { useState, useEffect } from 'react';

const url = 'http://localhost:3000/shifts';

const useFetchShifts = () => {

  const [shifts, setShifts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchShifts = async () => {
    try {
      const response = await fetch(url, { method: "GET" });
      const data = await response.json();
      setShifts(data);
      setLoading(false);
    } catch (err) {

      setError(err);
      setLoading(false);

    }
  };

  useEffect(() => {
    fetchShifts(); 
  }, []); 


  return { shifts, loading, error };
};

export default useFetchShifts;