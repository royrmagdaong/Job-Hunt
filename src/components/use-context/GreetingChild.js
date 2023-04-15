import React, { useContext } from 'react';
import UserContext from './UserContext';

const GreetingChild = () => {
  const person = useContext(UserContext);

  return <h1>age, {person.age}</h1>;
};

export default GreetingChild;
