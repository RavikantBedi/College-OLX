import Header from './Header';
import {Link ,useNavigate} from 'react-router-dom';
import { useState } from 'react';
import axios from "axios";
function Loginn() {
  const navigate=useNavigate()

   const[username,setusername]=useState('');
   const[password,setpassword]=useState('');
   const handleApi=()=>{
    console.log({username,password});
    const url='http://localhost:3000/Loginn';
    const data={username,password}
    axios.post(url,data)
    .then((res)=>{
      if(res.data.message){
        alert(res.data.message);
        if(res.data.token){
          localStorage.setItem('token',res.data.token)
          navigate('/');
        }
       
      }
    })
    .catch((err)=>{
      alert('SERVER ERR')
    })
  }
  
  return (
    <div>
      <Header/>
      welcome to login page
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
      <button onClick={handleApi}>LOGIN</button>
      <Link to="/signup">SIGNUP</Link>
      
    </div>
  )
}

export default Loginn;