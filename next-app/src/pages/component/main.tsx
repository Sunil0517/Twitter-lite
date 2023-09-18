import exp from "constants"
import  { useRef } from "react";
import React, { FC } from 'react';
import { useState , useEffect } from "react";

interface PostItem {
    userId : number;
    loaction: string;
    content: string;
  }   



const main = () => {

    const [Tweet, setTweet] = useState<any[]>([]);

    useEffect(() => {
    fetch('http://localhost:3004/tweets')
      .then((response) => response.json())
      .then(setTweet);
    }, []);
    

    return (
        <main className="lex w-full h-full min-h-screen flex-col border-l-[0.5px] border-r-[0.5px] border-gray-600">
            <h1 className="text-xl font-bold p-6 backdrop-blur bg-black/10 sticky top-0">
                Home
            </h1>
            <div className="border-t-[0.5px] px-4 border-b-[0.5px] flex items-stretch py-6 space-x-2 border-gray-600 relative">
                <div className="w-11 h-11 bg-slate-400 rounded-full flex-none"></div>
                <form  className="flex flex-col w-full h-full" onSubmit={
                        async(e: any) => {
                        e.preventDefault();
                        const name = e.currentTarget.name.value
                        const email = e.currentTarget.email.value;
                        const password = e.currentTarget.password.value;
                        fetch('http://localhost:3004/tweets/:id', {
                            method: 'POST',
                            headers: {
                            'Content-Type': 'application/json',
                            },
                            body: JSON.stringify({ name, email, password }),
                        }
                        );
                        }
                    }>
                    <input type="text" id="content" name="tweet"  className="w-full h-full text-2xl placeholder:text-gray-600 bg-transparent border-b-[0.5px] border-gray-600 p-4 outline-none border-none" placeholder="What's happening?"/>
                    <div className="w-full justify-between items-center flex">
                        <div></div>
                        <div className="w-full max-w-[100px]">
                        <button className="flex  items-stretch item-center  space-y-4  text-white  bg-blue-500 text-xl transition duration-200 w-fit rounded-3xl  px-6">
                            Post
                        </button>
                        </div>
                    </div>
                </form>
            </div>
            <div className="container mx-auto">
    
            <div className="m-6 grid gap-4 grid-row ">
                {Tweet.map((Tweet: PostItem, index: number) => (
                <div
                    key={index}
                    className="bg-gray border-[0.5px] rounded-lg shadow-lg p-4"
                >
                    <h3 className="text-xl font-semibold mb-2 text-white-600">{Tweet.loaction}</h3>
                    <p className="text-white-600">{Tweet.content}</p>
                </div>
                ))}
            </div>
            </div>
        </main>
    )
}
export default main