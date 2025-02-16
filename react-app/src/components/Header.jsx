import React from 'react'
import './Header.css'
import './Home.css';
import {Link, useNavigate} from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import { useState } from 'react';

function Header(props) {
   const [loc, setLoc] = useState(null);
  const navigate=useNavigate();

  const handleLogout=()=>{
      localStorage.removeItem('token');
      navigate('/Loginn')
  }
  let locations = [
    {
        "latitude": 28.6139,
        "longitude": 77.2090,
        "placeName": "New Delhi, Delhi"
    },
    {
        "latitude": 19.0760,
        "longitude": 72.8777,
        "placeName": "Mumbai, Maharashtra"
    },
    {
        "latitude": 26.7994,
        "longitude": 83.0552,
        "placeName": "Gorakhpur, Uttar Pradesh"
    },
    {
        "latitude": 26.4499,
        "longitude": 80.3319,
        "placeName": "Lucknow, Uttar Pradesh"
    },
    {
        "latitude": 25.3176,
        "longitude": 82.9739,
        "placeName": "Varanasi, Uttar Pradesh"
    },
    {
        "latitude": 25.3816,
        "longitude": 82.8971,
        "placeName": "Sarnath, Uttar Pradesh"
    },
    {
        "latitude": 26.7872,
        "longitude": 82.1980,
        "placeName": "Ayodhya, Uttar Pradesh"
    },
    {
        "latitude": 26.5539,
        "longitude": 83.4527,
        "placeName": "Kushinagar, Uttar Pradesh"
    },
    {
        "latitude": 26.7301,
        "longitude": 83.7854,
        "placeName": "Maghar, Uttar Pradesh"
    },
    {
        "latitude": 26.4673,
        "longitude": 83.7801,
        "placeName": "Deoria, Uttar Pradesh"
    }
];


  return (
    <div className=" header-container d-flex justify-content-between">
        <div className='header'>
          
        <Link className="links" to="/" >HOME</Link>
        <select value={loc} onChange={(e) => {
                    localStorage.setItem('userloc', e.target.value)
                    setLoc(e.target.value)
                }} >
                    {
                        locations.map((item, index) => {
                            return (
                                <option value={`${item.latitude},${item.longitude}`} >
                                    {item.placeName}
                                </option>
                            )
                        })
                    }
                </select>
        <input className="search" type="text" value={props && props.search} 
        onChange={(e)=>props.handlesearch && props.handlesearch(e.target.value)}
        />
        <button className="search-btn" onClick={()=>props.handleClick && props.handleClick()}> <FaSearch/></button>
        
        </div>
      <div>

      {!!localStorage.getItem('token') && <Link to="/add-product"><button className="logout-btn" >ADD PRODUCTS</button></Link>}

      {!!localStorage.getItem('token') && <Link to="/liked-products"><button className="logout-btn" >LIKED PRODUCTS</button></Link>}

      {!localStorage.getItem('token')?
           <Link to="/Loginn" >LOGIN</Link>:
           <button className="logout-btn" onClick={handleLogout}>LogOut</button>}
      </div>
    </div>
  )
}

export default Header