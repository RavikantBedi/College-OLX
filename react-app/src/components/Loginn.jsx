
import './../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Header from './Header';
import {Link ,useNavigate} from 'react-router-dom';
import { useState } from 'react';
import axios from "axios";
import './Loginn.css';
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
      console.log(res.data)
      if(res.data.message){
        alert(res.data.message);
        if(res.data.token){
          localStorage.setItem('token',res.data.token)
          navigate('/');
        }
       
      }
    })
    .catch((err)=>{
      console.log(err)
      alert('SERVER ERROR')
    })
  }
  return (
    <div>
      <Header/>
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <form>
          {/* Email Input */}
          <div className="input-group">
            <i className="icon fas fa-user"></i>
            <input type="text" value={username} onChange={(e)=>{ setusername(e.target.value)}} placeholder="Enter your Username" className="input-field" />
          </div>

          {/* Password Input */}
          <div className="input-group">
            <i className="icon fas fa-lock"></i>
            <input type="password" value={password} onChange={(e)=>{setpassword(e.target.value)}} placeholder="Enter your Password" className="input-field" />
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="options">
            <label className="remember-me">
              <input type="checkbox" /> Remember Password
            </label>
            <Link to="/ForgotPassword">Forgot password</Link>
          </div>

          {/* Submit Button */}
          <button type="button" className="login-button" onClick={handleApi}>Login</button>

          {/* Sign-up Link */}
          <p className="Signup-link">
            No account yet? <Link to="/Signup">Sign-up</Link>
          </p>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Loginn;