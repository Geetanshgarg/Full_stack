"use client";
import React from 'react'
import { useState } from 'react';
const Counter = () => {
    const[count,setcount] = useState(0);
    function increment(){
        if(count==10)alert("Maximum limit reached");
        else{
            setcount(count+1);
        }
    }
    function decrement(){
        if(count!=0){
            setcount(count-1);
        }
        
    }
  return (
    <div className='flex items-center flex-col justify-between gap-48 '>
        <div className='text-5xl font-bold'>Counter</div>
        <span className='text-3xl font-bold'>{count}</span>
        <div className="flex gap-3">
            <button className='border-amber-500 bg-amber-400 px-10 py-4 rounded' onClick={increment}>Increment</button>
            <button className='border-amber-500 bg-amber-400 px-10 py-4 rounded' onClick={decrement}>Decrement</button>
            <button className='border-amber-500 bg-amber-400 px-10 py-4 rounded' onClick={()=>setcount(0)}>Reset</button>
        </div>

    </div>
  )
}

export default Counter