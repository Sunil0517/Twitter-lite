import React, { use } from 'react';
import { Inter } from 'next/font/google';
import User from './user';
import Post from './post';
import Leftside from './component/leftside';
import Rightside from './component/rigthside';
import Main from './component/main'
import {} from 'react-icons/bs';


const Home: React.FC = () => {

  return (
  
    <div class="grid grid-cols-3 divide-x">
      <div><Leftside/></div>
      <div><Main/></div>
      <div><Rightside/></div>
  </div>
  );
};
export default Home;
function useEffect(arg0: Promise<void>, arg1: never[]) {
  throw new Error('Function not implemented.');
}

