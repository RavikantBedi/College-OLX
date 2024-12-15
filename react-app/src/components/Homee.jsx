import React, { useEffect } from 'react'
import Header from './Header'
import { useNavigate } from 'react-router-dom';
function Homee() {
  const navigate=useNavigate();
  useEffect(()=>{
    if(!localStorage.getItem('token')){
      navigate('/')
    }
  },[])
  return (
    <div>
      <Header/>
      welcome dev saxena
    </div>
  )
}

export default Homee