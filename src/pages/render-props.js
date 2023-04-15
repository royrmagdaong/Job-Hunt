import React, { useState, useEffect } from 'react';

const Mouse = ({ render }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({
        x: event.clientX,
        y: event.clientY,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return <div style={{ height: '100%' }}>{render(position)}</div>;
};

const Cat = ({ name, x, y }) => {
  return <p>{name} is at ({x}, {y})</p>;
};

const App = () => {
  return (
    <div style={{ height: '100%' }}>
      <Mouse render={(position) => <Cat name="Mittens" {...position} />} />
    </div>
  );
};

export default App;