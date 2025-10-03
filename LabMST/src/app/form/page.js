"use client"
import React from 'react'
import { useState } from 'react'
const Form = () => {
    const [form, setForm] = useState([])
    const [name, setName] = useState("");
    const [email , setEmail] = useState("");
    const[course , setCourse] = useState("");
    const submit = (e)=>{
        e.preventDefault();
        const newdata = {name,email,course}
        setForm([...form,newdata]);
        setName("");
        setEmail("");
        setCourse("");
        
    }
return (
    <div className='flex flex-col items-center gap-10 justify-between'>
        <h2 className='text-5xl font-bold '>Form</h2>
        <form onSubmit={submit} className='flex flex-col gap-3 '>
            <label htmlFor="name">Name: </label>
            <input type="text" name='name' id='name' onChange={(e)=>setName(e.target.value)} value={name} className='border-2 border-amber-400 rounded px-3 py-2'/>
            <label htmlFor="email">Email: </label>
            <input type="email" name="email" id="email" onChange={(e)=>setEmail(e.target.value)} value={email} className='border-2 border-amber-400 rounded px-3 py-2' required/>
            <label htmlFor="course">Course: </label>
            <input type="text" name='course' id='course' onChange={(e)=>setCourse(e.target.value)} value={course} className='border-2 border-amber-400 rounded px-3 py-2'/>
            <button type='submit' className='bg-amber-400 rounded px-3 py-2'>Submit</button>
        </form>

        <h3 className='mt-4 text-xl font-bold'>Submissions</h3>
        <div className="w-full max-w-2xl mt-2 border border-amber-400 rounded p-4">
            <div className='grid grid-cols-3 gap-4 font-bold mb-2 border-b pb-2'>
                <div>Name</div>
                <div>Email</div>
                <div>Course</div>
            </div>
            {form.map((f, index) => (
                <div key={index} className='grid grid-cols-3 gap-4 border-b py-2'>
                    <div>{f.name}</div>
                    <div>{f.email}</div>
                    <div>{f.course}</div>
                </div>
            ))}
        </div>
    </div>
)
}

export default Form
