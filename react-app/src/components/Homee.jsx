import React, { useEffect, useState } from 'react'
import Header from './Header'
import axios from 'axios';
import { useNavigate,Link } from 'react-router-dom';
function Homee() {
  const navigate=useNavigate();
  const [products,setproducts]=useState([])
  // useEffect(()=>{
  //   if(!localStorage.getItem('token')){
  //     navigate('/Loginn')
  //   }
  // },[])

  useEffect(()=>{
    const url='http://localhost:3000/get-products';
    axios.get(url)
    .then((res) => {
        console.log(res)
        if(res.data.products){
          setproducts(res.data.products);
        }
    })
    .catch((err) => {
        alert('Server Err.')
        console.error("Error Details: ", err);
    })
  },[])
  return (
    <div>
      <Header/>
      {!!localStorage.getItem('token') && <Link to="/add-product">ADD PRODUCTS</Link>}
      <div className="d-flex justify-content-center flex-wrap">
      {
        products && products.length>0 && 
        products.map((item,index)=>{
          return (
            <div className="card m-3">
              <img width="300px" height="200px"src={'http://localhost:3000/'+item.pimage}/>
              <p className="m-2"> {item.pname} | {item.category}</p>
              <h3 className="m-2 text-danger"> {item.price}</h3>
              <p className="m-2 text-success"> {item.pdesc}</p>
            
              </div>
          )
        })
      }
      </div>
    </div>
  )
}

export default Homee