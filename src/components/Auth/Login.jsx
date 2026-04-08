import React, { useState } from 'react'

const Login = () => {
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();
        console.log("form sibmited")
        console.log(email);
        console.log(password);
        setEmail("");
        setPassword("");
    }

    return (
        <div className='min-h-screen bg-gray-950 flex items-center justify-center px-4 flex-col'>
            <h1 className='text-2xl font-semibold text-white mb-2 text-center'>LOGIN</h1>
            <form onSubmit={submitHandler} className='space-y-5'>
                <input type="email"
                    placeholder='email'
                    required
                    value={email} 
                    onChange={(e)=>{setEmail(e.target.value)}}
                    className='w-full px-4 py-3 bg-gray-800 text-white placeholder-gray-500 border border-gray-700 rounded-lg'/>
                <input type="password"
                    placeholder='password'
                    required 
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    className='w-full px-4 py-3 bg-gray-800 text-white placeholder-gray-500 border border-gray-700 rounded-lg'
                    />
                <button type="submit"
                className="w-full py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-medium rounded-lg transition duration-300 active:scale-95">Login</button>
            </form>
        </div>
    )
}

export default Login
