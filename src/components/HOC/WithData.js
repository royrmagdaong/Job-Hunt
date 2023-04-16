import React, { useState, useEffect } from 'react';

const WithData = (WrappedComponent, URL) => {
  return (props) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
      setIsLoading(true);

      fetch(URL)
        .then(response => response.json())
        .then(data => setData(data))
        .catch(error => setError(error))
        .finally(() => setIsLoading(false));
    }, []);

    const handleClick = () => {
      console.log('Clicked!!')
    }

    if (isLoading) {
      return <p>Loading...</p>;
    }

    if (error) {
      return <p>Error: {error.message}</p>;
    }

    return <WrappedComponent data={data} {...props} handleClick={handleClick}/>;
  };
};

export default WithData;
