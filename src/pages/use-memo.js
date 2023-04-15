import React, { useState, useMemo } from 'react';

function Parent() {
  const [count, setCount] = useState(0);

  const expensiveValue = useMemo(() => {
    console.log('calculating expensive value');
    let result = 0;
    for (let i = 0; i < 1000000000; i++) {
      result += i;
    }
    return result;
  }, []);

  return (
    <div>
      <h2>Count: {count}</h2>
      <h2>Expensive Value: {expensiveValue}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default Parent
