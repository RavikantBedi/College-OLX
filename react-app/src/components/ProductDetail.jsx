import { useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import axios from 'axios';
import Header from "./Header";

function ProductDetail() {

  const [product,setproduct]=useState()
  const [user,setuser]=useState()
  console.log(user,'user');
  

  const p=useParams();

  useEffect(()=>{
    const url='http://localhost:3000/get-product/'+ p.productId;
    axios.get(url)
    .then((res) => {
        console.log(res) 
        if(res.data.product){
          setproduct(res.data.product)
        } 
    })
    .catch((err) => {
        alert('Server Err.')
        // console.error("Error Details: ", err);
    })
  },[])

  const handleContact=(addedBy)=>{
    console.log('id',addedBy)
    const url='http://localhost:3000/get-user/'+addedBy;
    axios.get(url)
    .then((res) => {
        console.log(res) 
        if(res.data.user){
          setuser(res.data.user)
        } 
    })
    .catch((err) => {
        alert('Server Err123.')
        console.error("Error Details: ", err);
    })

  }
    return (
      <>
        <Header/>
        PRODUCT DETAILS:
      <div>
        {product && <div className='d-flex justify-content-between flex-wrap'>
          <div>
          <img height="400px" width="300px"src={'http://localhost:3000/' + product.pimage} alt="alternate image"/>
{product.pimage2 &&   <img height="400px" width="300px"src={'http://localhost:3000/' + product.pimage2} alt="alternate image"/>
}
          <h5>Product Details:</h5>
          {product.pdesc}
          </div>
          <div>
          <h3 className="m-2 price-text">Rs.{product.price} /-</h3>
              <p className="m-2"> {product.pname} | {product.category}</p>
              <p className="m-2 text-success"> {product.pdesc}</p>
            {product.addedBy && 
              <button onClick={()=>handleContact(product.addedBy)}>Show Contact Details</button>
             
              } 
               {user && user.username && <h4>{user.username}</h4>}
              {user && user.mobile && <h3>{user.mobile}</h3>}
              {user && user.email && <h6>{user.email}</h6>}
               </div>
          </div>}
      </div>
      </>
    );
  }
  
  export default ProductDetail;


  

