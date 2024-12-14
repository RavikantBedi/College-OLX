import React from 'react'
import './Header.css'
import {Link} from 'react-router-dom';

function Header() {
  return (
    <div>
        <div className='header'>
          
        <Link to="/" >HOME</Link>
          <span className='mt-3'>SELL & PURCHASE ONLINE...... in your city.</span>

          <Link to="/Loginn" >LOGIN</Link>
        </div>

    </div>
  )
}

export default Header