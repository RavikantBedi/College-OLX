import Header from './Header';
import {Link} from 'react-router-dom';
import './Signup.css';
import axios from 'axios';
import { useState } from 'react';


function Signup() {

  const[username,setusername]=useState('');
  const[password,setpassword]=useState('');
  const[email,setemail]=useState('');
  const[mobile,setmobile]=useState('');

  const handleApi=()=>{
    console.log({username,password})
    const url='http://localhost:3000/Signup';
    const data={username,password,mobile,email};
    axios.post(url,data)
    .then((res)=>{
      console.log(res.data)
      if(res.data.message){
        alert(res.data.message);
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
      <div className="Signup-container">
    <div className="form-container">
      <h1>Create an account</h1>
      <p>
        Already have an account? <Link to="/Loginn">Log-in</Link>
      </p>
      <form>
        
        <input type="text" value={username} onChange={(e) =>{ setusername(e.target.value)}} placeholder="Enter your Username" className="input-field full-width" />
        <input type="text" value={mobile} onChange={(e) =>{ setmobile(e.target.value)}} placeholder="Enter your mobile Number" className="input-field full-width" />
        <input type="text" value={email} onChange={(e) =>{ setemail(e.target.value)}} placeholder="Enter your Email" className="input-field full-width" />
        <input type="text" value={password} onChange={(e) =>{ setpassword(e.target.value)}} placeholder="Enter your password" className="input-field full-width" />
        <div className="checkbox-group">
          <input type="checkbox" id="terms" />
          <label htmlFor="terms">
            I agree to the <Link to="/t&c">Terms & Conditions</Link>
          </label>
        </div>
        <button type="submit" className="create-button" onClick={handleApi}>Create account</button>
      </form>
      <div className="divider">Or register with</div>
      <div className="social-buttons">
        <button className="google-button">Google</button>
        <button className="apple-button">Apple</button>
      </div>
    </div>
    </div>
    </div>
    
  );
};

export default Signup;






