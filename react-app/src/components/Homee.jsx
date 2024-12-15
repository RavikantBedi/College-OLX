import React, { useEffect } from 'react'
import Header from './Header'
import { useNavigate } from 'react-router-dom';
function Homee() {
  const navigate=useNavigate();
  useEffect(()=>{
    if(!localStorage.getItem('token')){
      navigate('/Loginn')
    }
  },[])
  return (
    <div>
      <Header/>
      welcome to Home
    </div>
  )
}

export default Homee