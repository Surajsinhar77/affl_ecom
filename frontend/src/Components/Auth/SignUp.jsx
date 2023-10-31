import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import api from '../../api/api';

function SignUp() {
  
  const [loginData, setloginData] = useState({});

  const handelData = (e)=>{
    setloginData(
      { ...loginData,[ e.target.name]: e.target.value}
    )
  }



  // This is the Function to Request to the Server
  function loginSubmit(e){
    e.preventDefault();
    const {name,email,password,tandc} =  loginData;
    
    if(!name || !email || !password || !tandc){
      console.log(!name?"Enter the Name":"" , !email? "Enter the Email":"", !password? "Enter he password":"" , !tandc? "Agree on Term and Condition":"");
    }

    api.post('/auth/signin', {name, email, password}).then((response)=>{
      console.log(response.data?.result?.token);
      if(response.data?.result){
        api.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;
      }
      console.log(response);
    }).catch((err)=>{
      console.log(err);
    })
    return;
  }
  // // This is the Function to Request to the Server End here

  return (
    <div className=" flex items-center justify-center w-full  backdrop-blur-sm h-[100vh] p-10 text-black">
      <div className=" w-[420px] p-10 flex flex-col relative border bg-gray-50 rounded-md shadow-md">
        <div className="text-3xl font-semibold mb-2 flex flex-row justify-center py-7 rounded-md bg-black text-white
        ">Sign Up</div>
        <div className=" text-lg mb-8 text-gray-500 mt-5">Enter your details:</div>
        <div className=" flex flex-col gap-2">
          <label htmlFor="name" className=" cursor-pointer font-semibold">Name:</label>
          <input type="text" id="name" name='name' className=" border bg-transparent text-black w-full p-2" 
            onChange={handelData} required
          />
          <label htmlFor="email" className=" cursor-pointer font-semibold">Email:</label>
          <input type="email" id="email" name="email" className=" border bg-transparent text-black w-full p-2" 
            onChange={handelData} required
          />
          <label htmlFor="password" className=" cursor-pointer font-semibold">Password:</label>
          <input type="password" id="password" name="password" className=" border bg-transparent text-black w-full p-2" 
            onChange={handelData} required
          />
          <div className=" my-2">
            <input type="checkBox" id="rememberme" className=" p-2 mr-2 bg-transparent" 
              onChange={handelData} name='rememberme'
            />
            <label htmlFor="rememberme" className=" font-semibold">Remember Me</label>
          </div>
          <div className=" my-2">
            <input type="checkBox" id="tandc" className=" p-2 mr-2 bg-transparent" 
              onChange={handelData} required name='tandc'
            />
            <label htmlFor="tandc" className=" font-semibold">Agree to Terms & Conditions</label>
          </div>
        </div>
        <button className=" w-full shadow-lg bg-black font-semibold text-white rounded-md p-2 my-4"
          onClick={loginSubmit}
        >SIGN UP</button>
        <div className=" flex gap-1 justify-center text-lg">
          <div className=" text-gray-500">Already have an account?</div>
          <Link to="/signin" className=" font-semibold">Sign In</Link>
        </div>
      </div>
    </div>
  )
}

export default SignUp