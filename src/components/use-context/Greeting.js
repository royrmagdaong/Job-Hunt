import React, { useContext } from 'react';
import UserContext from './UserContext';
import GreetingChild from '@/components/use-context/GreetingChild';

const Greeting = () => {
  const person = useContext(UserContext);

  return (
    <div>
        <h1>Hello, {person.name}!</h1>
        <GreetingChild />
    </div>
  );
};

export default Greeting;
