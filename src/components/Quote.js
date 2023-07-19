import { useState, useEffect } from 'react';

const Quote = () => {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const category = 'funny';
        const response = await fetch(`https://api.api-ninjas.com/v1/quotes?category=${category}`, {
          headers: {
            'X-Api-Key': 'rdhfW0wO2ngsYh1hShYidw==aqCWS6NpkNffyOTA',
          },
        });
        if (!response.ok) {
          throw new Error('Failed to fetch quote');
        }
        const data = await response.json();
        setQuote(data[0]);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchQuote();
  }, []);

  if (loading) {
    return (
      <div className="quote section-bg-image">
        <h2>Quote:</h2>
        <div className="loader" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="quote section-bg-image">
        <h2>Quote:</h2>
        Error:
        {error}
      </div>
    );
  }

  return (
    <div className="quote section-bg-image">
      <h2>Quote:</h2>
      {quote && (
        <div>
          <p>
            &quot;
            {quote.quote}
            &quot;
          </p>
          <p>
            -
            {quote.author}
          </p>
        </div>
      )}
    </div>
  );
};

export default Quote;
