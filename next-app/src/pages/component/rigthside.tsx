import React from "react";
import { BsSearch } from "react-icons/bs";

const rightside = () => {
  return (
    <section className="w-full sticky hidden top-2 overflow-y-auto mt-2 xl:flex flex-col items-stretch h-[90vh] overflow-x-hidden px-6">
      <div>
        <div className="relative w-full h-full group">
          <input
            id="searchBox"
            type="text"
            placeholder="Search Twitter"
            className="outline-none peer focus:border-primary focus:border bg-neutral-900/90 w-full h-full rounded-xl py-4 pl-14 pr-4"
          />
          <label
            htmlFor="searchBox"
            className="absolute top-0 left-0 h-full flex items-center justify-center p-4 text-gray-500 peer-focus:text-primary"
          >
            <BsSearch className="w-5 h-5" />
          </label>
        </div>
      </div>
      <div className="flex flex-col rounded-xl bg-neutral-900  my-4">
        <h3 className="font-bold text-xl my-4 px-4">What’s happening</h3>
        <div>
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="hover:bg-white/10 p-4 last:rounded-b-xl transition duration-200"
            >
              <div className="font-bold text-lg ">#trending{i + 1}</div>
              <div className="text-xs text-neutral-400">35.4k</div>
            </div>
          ))}
        </div>
        <div>
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i}></div>
          ))}
        </div>
      </div>
      <div className="flex flex-col rounded-xl bg-neutral-900 my-4">
        <div className='container'>
            <div className='flex justify-center m-8 my-8'>
                <form onSubmit={
                    async(e: any) => {
                    e.preventDefault();
                    const id = e.currentTarget.id.value;
                    fetch(`http://localhost:3004/tweets/${id}`, {
                        method: 'DELETE',
                        headers: {
                        'Content-Type': 'application/json',
                        }
                    }
                    );

                    window.open('../','_self');
                    
                    }
                }>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-white-700 text-sm font-bold mb-2">
                    Enter id to remove Tweet 
                    </label>
                    <input
                    type='number'
                    name="id"
                    id="id"
                    className="w-full px-3 py-2 border rounded-md text-black focus:outline-none focus:border-blue-500"
                    placeholder="Enter your name"
                    required
                    />
                </div>
                <button type="submit" className='create'>Remove</button>
                <button className="ml-10 create"  onClick={()=>window.open('./','_self')}>
                    Home
                </button>
                </form>
            </div>
        </div>
      </div>
    </section>
  );
};

export default rightside;