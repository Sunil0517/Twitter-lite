import  { use, useRef } from "react";
import React, { FC } from 'react';
import { useState , useEffect } from "react";
import Tweets from "./tweets"
   

const Main = () => {
    return (
        <main className="w-full h-full justify-center border-l-[0.5px] border-r-[0.5px] border-gray-600">
            <div className="flex  justify-cneter">
                <h1 className="text-2xl  w-full font-bold p-6 backdrop-blur bg-black/10 sticky top-0">
                    Home
                </h1>
            </div>
            <div className="border-t-[0.5px] px-4 border-b-[0.5px] flex items-stretch py-6 space-x-2 border-gray-600 relative">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgU_co2N_FHz2xM78QfRdG4vn_pwudygLk7Q&usqp=CAU" alt="" className="w-11 h-11 bg-slate-400 rounded-full flex-none" />
                <form  className="flex flex-col w-full h-full" onSubmit={
                        async(e: any) => {
                        e.preventDefault();
                        const userId = e.currentTarget.userId.value
                        const location = e.currentTarget.location.value;
                        const content = e.currentTarget.content.value;
                        // const createdAt = "2023-09-13T10:47:56.507Z";
                        // const updatedAt = "2023-09-13T10:47:56.507Z";
                        const retweetId = 0;
                        console.log(userId , location , content  , retweetId),

                        fetch(`http://localhost:3004/tweets/${userId}`, {
                            method: 'POST',
                            headers: {
                            'Content-Type': 'application/json',
                            },
                            body: JSON.stringify({ userId , location ,content, retweetId }),
                        }
                        );
                        }
                    }>
                    <input type="text" id="content" name="content"  className="w-full h-full text-2xl placeholder:text-gray-600 bg-transparent border-b-[0.5px] border-gray-600 p-4 outline-none border-none" placeholder="What's happening?"/>
                    <div className="flex-col">
                        <input type="text" id="location" name="location" className="w-[23%] mt-5 ml-4 placeholder:text-gray-600 bg-transparent border-b-[0.5px] border-gray-600" placeholder="location"/>
                        <input type="number" id="userId" name="userId" className="w-[23%] mt-5 ml-4 placeholder:text-gray-600 bg-transparent border-b-[0.5px] border-gray-600" placeholder="userId"/>   
                    </div>
                    <div className="w-full justify-between items-center flex">
                        <div></div>
                        <div className="w-full max-w-[100px]">
                        <button  type="submit" className="flex  items-stretch item-center  space-y-4  text-white  bg-blue-500 text-xl transition duration-200 w-fit rounded-3xl  px-6" onClick={()=>window.open('./','_self')}>
                            Post
                        </button>
                        </div>
                    </div>
                </form>
            </div>
            <Tweets/>
        </main>
    )
}
export default Main;