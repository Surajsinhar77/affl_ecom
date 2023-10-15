import React from 'react'
import { Link } from 'react-router-dom'

function SignUp() {
  return (
    <div className=" flex items-center justify-center w-full bg-gray-50 backdrop-blur-sm h-[100vh] p-10 text-black">
      <div className=" w-[400px] p-10 flex flex-col relative">
        <div className=" text-3xl font-semibold mb-2">Sign Up</div>
        <div className=" text-lg mb-8 text-gray-500">Enter your details:</div>
        <div className=" flex flex-col gap-2">
          <label htmlFor="name" className=" cursor-pointer font-semibold">Name:</label>
          <input type="text" id="name" className=" border bg-transparent text-black w-full p-2" />
          <label htmlFor="email" className=" cursor-pointer font-semibold">Email:</label>
          <input type="email" id="email" className=" border bg-transparent text-black w-full p-2" />
          <label htmlFor="password" className=" cursor-pointer font-semibold">Password:</label>
          <input type="password" id="password" className=" border bg-transparent text-black w-full p-2" />
          <div className=" my-2">
            <input type="checkBox" id="Username" className=" p-2 mr-2 bg-transparent" />
            <label htmlFor="Username" className=" font-semibold">Remember Me</label>
          </div>
          <div className=" my-2">
            <input type="checkBox" id="Username" className=" p-2 mr-2 bg-transparent" />
            <label htmlFor="Username" className=" font-semibold">Agree to Terms & Conditions</label>
          </div>
        </div>
        <button className=" w-full shadow-lg bg-black font-semibold text-white rounded-md p-2 my-4">SIGN UP</button>
        <div className=" flex gap-1 justify-center text-lg">
          <div className=" text-gray-500">Already have an account?</div>
          <Link to="/signin" className=" font-semibold">Sign In</Link>
        </div>
      </div>
    </div>
  )
}

export default SignUp