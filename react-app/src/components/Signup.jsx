import Header from './Header';
import {Link} from 'react-router-dom';
import { useState } from 'react';
import axios from "axios";

function Signup() {
  const[username,setusername]=useState('');
  const[password,setpassword]=useState('');

  const handleApi=()=>{
    const url='http://localhost:3000/signup';
    const data={username,password}
    axios.post(url,data)
    .then((res)=>{
      console.log(res.data)
      if(res.data.message){
        alert(res.data.message);
      }
    })
    .catch((err)=>{
      alert('SERVER ERR')
    })
  }

  return (
    <div>
      <Header/>
      <div class="d-flex align-items-center justify-content-center vh-100 bg-primary">
    <div class="card p-4 shadow" >
      <form>
        <h2 class="text-center mb-4 text-primary">Welcome to SignUp Page</h2>
       
        <div class="form-outline mb-4">
          <label class="form-label" for="form2Example1">User Name</label>
          <input type="text" class="form-control"  placeholder="Enter your User Name"  value={username} onChange={(e)=>{
        setusername(e.target.value)
      }}/>
        </div>
       
        <div class="form-outline mb-4">
          <label class="form-label" for="form2Example2">Password</label>
          <input type="password"  class="form-control" placeholder="Enter your password" value={password} onChange={(e)=>{
            setpassword(e.target.value)
          }} />
        </div>
       
        <div class="d-flex justify-content-between">
          <button class="btn btn-primary w-45  " onClick={handleApi}>SIGNUP</button>
          <Link type="button" class="btn btn-success w-45" to="/Loginn" >Login</Link>
         
        </div>
      </form>
    </div>
  </div>
      
    </div>
  )
}

export default Signup;
