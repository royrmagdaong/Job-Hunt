import React from 'react';
import Greeting from '@/components/use-context/Greeting';
import UserContext from '@/components/use-context/UserContext';

const App = () => {
  const person = {
    name: 'Sarah',
    gender: 'F',
    age: 32
  }
  return (
    <UserContext.Provider value={person}>
      <Greeting />
    </UserContext.Provider>
  );
};

export default App;