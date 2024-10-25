import { useState } from 'react';

const url = 'http://localhost:3000/activities';

const useAddActivity = () => {
  const [error, setError] = useState(null);

  const addActivity = async (newActivity) => {
    try {
      await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newActivity),
      });
      window.location.reload(); // Refreshes the page to show the updated list
      const savedActivity = await response.json();
      return savedActivity;
    } catch (err) {
      setError(err);
    }
  };

  const createActivity = (newActivity) => {
    addActivity(newActivity).then((savedActivity) => {
      setActivities([...activities, savedActivity]);
    });
  };

  return { createActivity, error };
};

export default useAddActivity;
