// AllProductsPage.js
import React, { useState, useEffect } from 'react';
import './admin.css'; // Import the CSS file
import ProductCard from './ProductCart';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AllProductsPage = () => {
  const [proData, setProData] = useState([]);


  // Fetching data from server
  const loadProductData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/AdminproductDisplay");
      setProData(response.data);
    } catch (error) {
      console.log("Error while fetching data:", error);
    }
  }

  useEffect(() => {
    loadProductData();
  }, []);

  const handleUpdate = (product) => {
    // Implement your update logic here
    console.log('Update clicked for product:',product);
  };


  const handleDeleteProduct = async (productId) => {
    try {
      // Make a DELETE request to your API endpoint to delete the product
      await axios.delete(`http://localhost:5000/api/AdminProductModel/${productId}`);
      // Remove the deleted product from the state
      setProData(prevProData => prevProData.filter(product => product._id !== productId));
      toast.success("Product deleted successfully!"); 
      // Notify user that product was deleted successfully
    } catch (error) {
      console.error('Error deleting product:', error);
      // Notify user that an error occurred while deleting the product
      toast.error("Error while deleting");
    }
  };



  

  const products = proData.map((product, index) => (
    <div key={index} className="productRow">
      <ProductCard product={product} onDeleteProduct={handleDeleteProduct}  />
      <ProductCard product={product} onUpdate={handleUpdate}/>

    </div>
  ));

  return (
    <div className='allproduct-container'>

      <h1 style={{color:"#b88a00"}}>All Products</h1>
      {products}
    </div>
  );
};

export default AllProductsPage;
