import { useEffect, useState } from 'react';

const useQuote = (API_URL) => {
  const [quote, setQuote] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(false);

  const getQuotes = async () => {
    try {
      const resp = await fetch(API_URL);
      if (!resp.ok) {
        setError(true);
        setLoading(false);
        return;
      }
      const data = await resp.json();
      setQuote(data);
    } catch (error) {
      setError(true);
      console.error(`Error: ${error}`);
    }
    setLoading(false);
  };

  useEffect(() => {
    getQuotes();
  }, []);

  return { quote, isLoading, isError, getQuotes };
};

export default useQuote;
