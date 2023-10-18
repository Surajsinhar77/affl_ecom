import React,{useState} from 'react'
import { Link } from 'react-router-dom'

function SignUp() {
  
  const [loginData, setloginData] = useState();

  const handelData = (e)=>{
    setloginData(
      { ...loginData,[ e.target.name]: e.target.value}
    )
  }

  function loginSubmit(){
    
  }

  return (
    <div className=" flex items-center justify-center w-full  backdrop-blur-sm h-[100vh] p-10 text-black">
      <div className=" w-[420px] p-10 flex flex-col relative border bg-gray-50 rounded-md shadow-md">
        <div className="text-3xl font-semibold mb-2 flex flex-row justify-center py-7 rounded-md bg-black text-white
        ">Sign Up</div>
        <div className=" text-lg mb-8 text-gray-500 mt-5">Enter your details:</div>
        <div className=" flex flex-col gap-2">
          <label htmlFor="name" className=" cursor-pointer font-semibold">Name:</label>
          <input type="text" id="name" className=" border bg-transparent text-black w-full p-2" 
            onChange={handelData}
          />
          <label htmlFor="email" className=" cursor-pointer font-semibold">Email:</label>
          <input type="email" id="email" className=" border bg-transparent text-black w-full p-2" 
            onChange={handelData}
          />
          <label htmlFor="password" className=" cursor-pointer font-semibold">Password:</label>
          <input type="password" id="password" className=" border bg-transparent text-black w-full p-2" 
            onChange={handelData}
          />
          <div className=" my-2">
            <input type="checkBox" id="Username" className=" p-2 mr-2 bg-transparent" 
              onChange={handelData}
            />
            <label htmlFor="Username" className=" font-semibold">Remember Me</label>
          </div>
          <div className=" my-2">
            <input type="checkBox" id="Username" className=" p-2 mr-2 bg-transparent" 
              onChange={handelData}
            />
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