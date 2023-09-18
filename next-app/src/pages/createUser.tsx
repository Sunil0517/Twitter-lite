import React, { FormEvent } from 'react';
import { useState } from 'react';

export default function Page() {

  


  return (
    <div className='container'>
      <div className='flex justify-center m-8 my-8'>
        <form onSubmit={
            async(e: any) => {

              e.preventDefault();
              const name = e.currentTarget.name.value
              const email = e.currentTarget.email.value;
              const password = e.currentTarget.password.value;
              console.log(name, email, password);
              fetch('http://localhost:3004/users', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, password }),
              }
              );

              window.open('../user','_self');
              
            }
          }>
          <div className="mb-4">
            <label htmlFor="name" className="block text-white-700 text-sm font-bold mb-2">
              Name:
            </label>
            <input
              type='text'
              name="name"
              id="name"
              className="w-full px-3 py-2 border rounded-md text-black focus:outline-none focus:border-blue-500"
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-white-700 text-sm font-bold mb-2">
              Email:
            </label>
            <input
              type="text"
              name="email"
              id='email'
              required
              className="w-full px-3 py-2 border rounded-md text-black focus:outline-none focus:border-blue-500"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-white-700 text-sm font-bold mb-2">
              Password:
            </label>
            <input
              type="password"
              name="password"
              id='password'
              className="w-full px-3 py-2 border rounded-md text-black focus:outline-none focus:border-blue-500"
              placeholder="Enter your password"
              required
            />
          </div>

          <button type="submit" className='create'>Submit</button>
          <button className="ml-10 create"  onClick={()=>window.open('./','_self')}>
            Home
        </button>
        </form>
      </div>
    </div>
  );
}
