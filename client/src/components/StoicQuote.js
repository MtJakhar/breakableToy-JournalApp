import React, { useEffect, useState } from 'react';

const StoicQuote = () => {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    fetch('https://stoicquotesapi.com/v1/api/quotes/random')
      .then((response) => response.json())
      .then((data) => {
        setQuote(data.body);
      });
  }, []);

  return (
    <div className="stoicQuote">
      <p className='quoteText'>{quote}</p>
    </div>
  );
};

export default StoicQuote;
