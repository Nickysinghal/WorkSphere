import React, { useState } from 'react'
import { useForm } from "react-hook-form";

const Login = ({ handleLogin }) => {
    // console.log(handleLogin)
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");


    const {
        register,
        handleSubmit,
        watch,
        setError, //CUSTOM FORMS
        formState: { errors, isSubmitting },
    } = useForm();

    // const submitHandler = (e) => {
    //     e.preventDefault();
    //     // console.log("form submitted")
    //     // console.log(email);
    //     // console.log(password);
    //     handleLogin(email,password);
    //     setEmail("");
    //     setPassword("");
    // }

    const onSubmit = (data) => {
        console.log(data);
        handleLogin(data.email, data.password);


    };

    return (
        <div className='min-h-screen bg-gray-950 flex items-center justify-center px-4 flex-col'>
            <h1 className='text-2xl font-semibold text-white mb-2 text-center'>LOGIN</h1>

            <form onSubmit={handleSubmit(onSubmit)} className='space-y-5'>
                <input type="email"
                    // placeholder='email'
                    // required
                    // value={email} 
                    // onChange={(e)=>{setEmail(e.target.value)}}
                    {...register('email', {
                        required: "EmailId is required",
                        minLength: { value: 3, message: "EmailId is too short" },
                        maxLength: { value: 20, message: "EmailId is too long" },
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Invalid EmailId Format",
                        },
                    })}
                    className='w-full px-4 py-3 bg-gray-800 text-white placeholder-gray-500 border border-gray-700 rounded-lg' 
                />
                {errors.email && <div className="text-red-500">{errors.email.message}</div>}

                <input type="password"
                    // placeholder='password'
                    // required 
                    // value={password}
                    // onChange={(e)=>setPassword(e.target.value)}
                    {...register("password", {
                        required: "Password is required",
                        minLength: {
                            value: 6,
                            message: "Password is too short min 6 characters",
                        },
                        maxLength: {
                            value: 20,
                            message: "Password is too long max 20 characters",
                        },
                        pattern: {
                            value:
                                /^(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
                            message:
                                "Password must contain at least one lowercase letter, one digit, one special character and one uppercase letter",
                        },
                    })}

                    className='w-full px-4 py-3 bg-gray-800 text-white placeholder-gray-500 border border-gray-700 rounded-lg'
                />
                {errors.password && <div className="text-red-500">{errors.password.message}</div>}

                <button type="submit"
              
                    className="w-full py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-medium rounded-lg transition duration-300 active:scale-95">Login</button>
            </form>
        </div>
    )
}

export default Login
