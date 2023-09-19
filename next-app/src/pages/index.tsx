import React from 'react';
import Leftside from './component/leftside';
import Rightside from './component/rigthside'; 
import Main from './component/main';

const Home: React.FC = () => {
  return (
    <div className="grid grid-cols-3 divide-x">
      <div className="hidden lg:block"><Leftside/></div> 
      <div className="w-full"><Main/></div>
      <div className="hidden lg:block"><Rightside/></div> 
    </div>
  );
}
export default Home;
function useEffect(arg0: Promise<void>, arg1: never[]) {
  throw new Error('Function not implemented.');
}