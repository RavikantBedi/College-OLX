import React from 'react'
import './Header.css'
import {Link, useNavigate} from 'react-router-dom';

function Header() {
  const navigate=useNavigate();

  const handleLogout=()=>{
      localStorage.removeItem('token');
      navigate('/Loginn')
  }

  return (
    <div>
        <div className='header'>
          
        <Link to="/" >HOME</Link>
          <span className='mt-3'>SELL & PURCHASE ONLINE...... in your city.</span>

        { !localStorage.getItem('token')?
           <Link to="/Loginn" >LOGIN</Link>:
           <button onClick={handleLogout}>LogOut</button>
        }
         
        </div>

    </div>
  )
}

export default Header