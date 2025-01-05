import { useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import axios from 'axios';
import Header from "./Header";

function ProductDetail() {

  const [product,setproduct]=useState()

  const p=useParams();

  useEffect(()=>{
    const url='http://localhost:3000/get-product/' + p.productId;
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
    return (
      <>
        <Header/>
        PRODUCT DETAILS:
      <div>
        {product && <div className='d-flex justify-content-between flex-wrap'>
          <div>
          <img height="200px" width="300px"src={'http://localhost:3000/' + product.pimage} alt="alternate image"/>
          <h5>Product Details:</h5>
          {product.pdesc}
          </div>
          <div>
          <h3 className="m-2 price-text">Rs.{product.price} /-</h3>
              <p className="m-2"> {product.pname} | {product.category}</p>
              <p className="m-2 text-success"> {product.pdesc}</p>
          </div>
          </div>}
      </div>
      </>
    );
  }
  
  export default ProductDetail;