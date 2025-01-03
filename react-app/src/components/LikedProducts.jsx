import React, { useEffect, useState } from 'react'
import Header from './Header'
import axios from 'axios';
import { useNavigate,Link, data } from 'react-router-dom';
import Categoriess from './Categoriess';
import { FaHeart } from "react-icons/fa";
import './Home.css';
function LikedProducts() {
  const navigate=useNavigate();
  const [products,setproducts]=useState([]);
  const [cproducts,setcproducts]=useState([]);
  const [search,setsearch]=useState('');

  // useEffect(()=>{
  //   if(!localStorage.getItem('token')){
  //     navigate('/Loginn')
  //   }
  // },[])

  useEffect(()=>{
    const url='http://localhost:3000/liked-products';
    let data = { userId: localStorage.getItem('userId') }
    axios.post(url,data)
    .then((res) => {
        console.log(res) 
        if(res.data.products){
          setproducts(res.data.products);
        }
    })
    .catch((err) => {
        alert('Server Err.')
        // console.error("Error Details: ", err);
    })
  },[])

  const handlesearch=(value)=>{
        setsearch(value);
  }

  const handleClick=()=>{
    let filteredProduct=products.filter((item)=>{
      if(item.pname.toLowerCase().includes(search.toLowerCase()) || 
      item.pdesc.toLowerCase().includes(search.toLowerCase()) ||
      item.category.toLowerCase().includes(search.toLowerCase())){
        return item;
      }
    })
    setcproducts(filteredProduct)
}

const handleCategory=(value)=>{
  let filteredProduct=products.filter((item,index)=>{
    if(item.category == value){
      return item;
    }
  })
  setcproducts(filteredProduct)
}
const handleLike=(productId)=>{
  let userId=localStorage.getItem('userId');
  console.log('userId ','productid',productId,userId);
  const url='http://localhost:3000/like-product';
  const data = { userId, productId }
  axios.post(url, data)
      .then((res) => {
          if (res.data.message) {
              alert('Liked.')
          }
      })
      .catch((err) => {
          alert('Server Err.12')
      })

}



  return (
    <div>
      <Header search={search} handlesearch={handlesearch} handleClick={handleClick}/>
      <Categoriess handleCategory={handleCategory}/>
      <h5>SEARCH RESULTS </h5>
      <div className="d-flex justify-content-center flex-wrap">
      {cproducts && products.length>0 && 
        cproducts.map((item,index)=>{
          return (
            <div key={item._id} className="card m-3">
              <div onClick={()=> handleLike(item._id)} className="icon-con">
              <FaHeart className="icons"/>
              </div>
              <img width="300px" height="200px"src={'http://localhost:3000/'+item.pimage}/>
              <p className="m-2"> {item.pname} | {item.category}</p>
              <h3 className="m-2 text-danger"> {item.price}</h3>
              <p className="m-2 text-success"> {item.pdesc}</p>
            
              </div>
          )
        })
      }

<h5>ALL Results</h5>

      </div>
      <div className="d-flex justify-content-center flex-wrap">
      {
        products && products.length>0 && 
        products.map((item,index)=>{
          return (
            <div key={item._id} className="card m-3">
                   <div onClick={()=> handleLike(item._id)} className="icon-con">
              <FaHeart className="icons"/>
              </div>
              <img width="300px" height="200px"src={'http://localhost:3000/'+item.pimage}/>
              <p className="m-2"> {item.pname} | {item.category}</p>
              <h3 className="m-2 text-danger"> {item.price}</h3>
              <p className="m-2 text-success"> {item.pdesc}</p>
            
              </div>
          )
        })}
      </div>
    </div>
  )
}


export default LikedProducts




