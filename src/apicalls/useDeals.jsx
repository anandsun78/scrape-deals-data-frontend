import axios from 'axios';
import { useEffect, useState } from 'react';

export default function useDeals(update) {
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function init() {
      try {
        const resp = await axios.get('/redflagdeals');
        setData(resp.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setData([
          {
            topicTitle: 'Error getting data',
            topicBody: `Request failed: ${error}`,
            topicCount: 0,
          },
        ]);
      }
    }
    init();
    const timer = setInterval(init, 60000);

    return () => clearInterval(timer);
  }, []);
  return {
    data,
    error,
    loading,
  };
}
