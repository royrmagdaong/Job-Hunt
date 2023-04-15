import React, { useState, useCallback } from 'react';

function Parent() {
  const [count, setCount] = useState(0);

  const handleIncrement = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      <h2>Count: {count}</h2>
      <Child onIncrement={handleIncrement} />
    </div>
  );
}

function Child({ onIncrement }) {
  return (
    <div>
      <button onClick={onIncrement}>Increment</button>
    </div>
  );
}

export default Parent
