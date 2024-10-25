import { useState } from 'react';

const url = 'http://localhost:3000/activities';

const useDeleteActivity = () => {
  const [activities, setActivities] = useState([]);
  const [error, setError] = useState(null);

  const deleteActivity = async (id) => {
    try {
      await fetch(`${url}/${id}`, { method: 'DELETE' });
      const updatedActivities = activities.filter((activity) => activity.id !== id);
      setActivities(updatedActivities);
      window.location.reload(); // Refreshes the page to show updated activity list
    } catch (err) {
      setError(err);
    }
  };

  const removeActivity = (id) => {
    deleteActivity(id).then(() => {
      setActivities(activities.filter((activity) => activity.id !== id));
    });
  };

  return { removeActivity, error };
};

export default useDeleteActivity;