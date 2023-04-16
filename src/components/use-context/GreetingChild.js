import React, { useContext } from 'react';
import UserContext from './UserContext';
import GrandGrandChild from '@/components/use-context/GrandGrandChild';


const GreetingChild = () => {

  return <GrandGrandChild></GrandGrandChild>;
};

export default GreetingChild;
