import React, { useState } from "react";
import { Link, redirect } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {loginUser} from '../../api/authAPI';
import { useAuth } from "../../common/AuthContext";

export default function LoginCard() {
  const {login} = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({});
  
  function handledata (e){
    setForm({
      ...form,[e.target.name] : e.target.value
    })
  }

  async function transferdata(e){
      e.preventDefault();
      const {email, password} = form;
      const data = await loginUser({email, password});
      if(data.user){
        login({accessToken : data.accessToken, userData : data.userData});
      }
      navigate('/');
  }


  return (
    <div className=" flex items-center justify-center w-full bg-gray-100 backdrop-blur-sm h-[100vh] p-10 text-black flex-col">
      <h1 className="mb-40 text-4xl uppercase font-bold">User Login</h1>
      <div className=" w-[420px] p-10 flex flex-col rounded-lg shadow-md bg-whiten relative bg-white">
        <div className=" w-full bg-black text-white font-bold text-center p-5 text-3xl rounded-xl relative -top-16 shadow-lg">Sign In</div>
        <div className=" flex flex-col gap-2">
          <label htmlFor="name" className=" cursor-pointer font-semibold">Email:</label>
          <input type="email" name="email" className=" border text-black w-full p-2" onChange={handledata} />
          <label htmlFor="password" className=" cursor-pointer font-semibold">Password:</label>
          <input type="password" name="password" className=" border text-black w-full p-2" onChange={handledata} />
          <div className=" my-2">
            <input type="checkBox" id="Username" className=" p-2 mr-2" name='rembemberme' onChange={handledata}/>
            <label htmlFor="Username" className="font-semibold" >Remember Me</label>
          </div>
        </div>
        <button className=" w-full shadow-lg bg-black font-semibold text-white rounded-md p-2 my-4" onClick={transferdata}>SIGN IN</button>
        <div className=" flex gap-1 justify-center text-lg">
          <div className=" text-gray-500">Don&apos;t have an account?</div>
          <Link to="/signup" className=" font-semibold">Sign Up</Link>
        </div>
      </div>
    </div>
  );
}