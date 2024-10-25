import { useState, useEffect } from 'react';

const url = 'http://localhost:3000/activities';

const useFetchActivities = () => {

  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchActivities = async () => {
    try {
      const response = await fetch(url, { method: "GET" });
      const data = await response.json();

      setActivities(data);
      setLoading(false);
    } catch (err) {

      setError(err);
      setLoading(false);

    }
  };

  useEffect(() => {
    fetchActivities(); 
  }, []); 


  return { activities, loading, error };
};

export default useFetchActivities;