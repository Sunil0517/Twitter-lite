import React, { FC } from 'react';
import { useEffect , useState } from 'react';

interface PostItem {
  userId : number;
  name: string;
  email: string;
}


const App: FC = () => {

  


  const [user, setUser] = useState<any[]>([]);

    useEffect(() => {
    fetch('http://localhost:3004/users')
      .then((response) => response.json())
      .then(setUser);
    }, []);


  return (
    
    <div className="container mx-auto">
      <h2 className="text-4xl text-center text-white">User</h2>
      <div className="mt-4 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {user.map((user: PostItem, index: number) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg p-4"
          >
            <div className='flex felx-row'>
              <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgU_co2N_FHz2xM78QfRdG4vn_pwudygLk7Q&usqp=CAU"
                  alt="Profile Picture"
                  className="h-10 w-10 rounded-full mr-2"
                />
              <h3 className="text-xl font-semibold mb-2 text-black">{user.userId}</h3>
              <h3 className="text-xl font-semibold mb-2 text-black">{user.name}</h3>
            </div>
            <p className="text-gray-600">{user.email}</p>
          </div>
        ))}
      </div>
      <div className="flex flex-row">
        <button className="flex justify-center    space-y-4 mt-4 text-black ml-5 bg-white text-2xl transition duration-200 w-fit rounded-xl py-2 px-6" onClick={()=>window.open('./createUser', '_self')}>
            create new user
        </button>
        <button className="flex justify-center    space-y-4 mt-4 text-black ml-5 bg-white text-2xl transition duration-200 w-fit rounded-xl py-2 px-6" onClick={()=>window.open('./', '_self')}>
            Home
        </button>
      </div>
    </div>
  );
};

export default App;
