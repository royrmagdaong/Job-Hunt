import React, { useContext } from 'react';
import UserContext from './UserContext';

const GrandChild = () => {
  const person = useContext(UserContext);

  return (
    <>
      <h1>Grand Grand child</h1>
      <h2>{person.name}</h2>
      <h2>{person.gender}</h2>
      <h2>{person.age}</h2>
    </>
  );
};

export default GrandChild;
