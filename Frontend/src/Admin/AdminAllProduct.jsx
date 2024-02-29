// AllProductsPage.js
import React, { useState } from 'react';
import './admin.css'; // Import the CSS file
import ProductCard from './ProductCart';
import { useEffect } from 'react';
import axios from 'axios';

const AllProductsPage = () => {
  

 const [proData,setProData] = useState([]);  

// Fetching data from server
const  loadProductData= async ()=>{
  
  await axios.get("http://localhost:8000/AdminproductDisplay").then((res)=>{
    console.log(res.data);
    setProData(res.data)
  }).catch((error)=>{
    console.log("Error While Featching Data",error);
  })
}

useEffect(()=>{
  loadProductData()
},[])
 

const products = proData.map((product, index) => (
  <div key={index}  className="productRow">
    <ProductCard product={product} />
  </div>
))

  return (
    <div className='allproduct-container'>
     {products}
    </div>
  );
};

export default AllProductsPage;
