
import React, { useState, useEffect } from 'react';

interface PostItem {
  id: number;
  userId: number;
  location: string;
  content: string;
  user: {
    name: string;
    email: string;
  };
}

const Tweet: React.FC = () => {
  const [tweets, setTweets] = useState<PostItem[]>([]);

  useEffect(() => {
    fetch('http://localhost:3004/tweets')
      .then((response) => response.json())
      .then((data) => setTweets(data.reverse())); // Reverse the array before setting it
  }, []);

  return (
    <div className="container mx-auto">
      <div className="m-6">
        {tweets.map((tweet: PostItem, index: number) => (
          <div
            key={index}
            className="bg-gray border border-gray-300 rounded-lg shadow p-4 mb-4"
          >
            <div className="flex flex-row mb-2">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgU_co2N_FHz2xM78QfRdG4vn_pwudygLk7Q&usqp=CAU"
                alt="Profile Picture"
                className="h-10 w-10 rounded-full mr-2"
              />
              
              <div className='flex-col' >
                <h3 className="text-xl font-semibold">{tweet.user?.name}</h3>
                <p className="text-gray-600">@{tweet.user?.email}</p>
              </div>
              <div className='flex float-right'>
                <h3 className='text-xl font-semibold'>{tweet.id}</h3>
              </div>


            </div>
            <p className="text-lg text-white">{tweet.content}</p>
            <p className="text-gray-500 mt-2">~{tweet.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tweet;