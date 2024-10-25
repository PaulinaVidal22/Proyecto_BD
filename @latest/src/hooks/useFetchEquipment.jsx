import { useState, useEffect } from 'react';

const url = 'http://localhost:3000/equipment';

const useFetchEquipment = () => {

  const [equipment, setEquipment] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchEquipment = async () => {
    try {
      const response = await fetch(url, { method: "GET" });
      const data = await response.json();

      setEquipment(data);
      setLoading(false);
    } catch (err) {

      setError(err);
      setLoading(false);

    }
  };

  useEffect(() => {
    fetchEquipment(); 
  }, []); 


  return { equipment, loading, error };
};

export default useFetchEquipment;