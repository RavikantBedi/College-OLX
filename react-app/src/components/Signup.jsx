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
      welcome to signup page
      <br></br>
      USERNAME:
      <input type="text" value={username} onChange={(e)=>{
        setusername(e.target.value)
      }}/>
      <br></br>
      PASSWORD:
      <input type="text" value={password} onChange={(e)=>{
        setpassword(e.target.value)
      }}/>
      <br></br>
      <button onClick={handleApi}>Signup</button>
      <Link to="/Loginn">LOGIN</Link>
      
    </div>
  )
}

export default Signup;