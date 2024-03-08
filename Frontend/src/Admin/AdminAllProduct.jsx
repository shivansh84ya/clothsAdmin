// AllProductsPage.js
import React, { useState, useEffect } from 'react';
import './admin.css'; // Import the CSS file
import ProductCard from './ProductCart';
import axios from 'axios';

const AllProductsPage = () => {
  const [proData, setProData] = useState([]);

  // Fetching data from server
  const loadProductData = async () => {
    try {
      const response = await axios.get("http://localhost:8000/AdminproductDisplay");
      setProData(response.data);
    } catch (error) {
      console.log("Error while fetching data:", error);
    }
  }

  useEffect(() => {
    loadProductData();
  }, []);

  const handleDeleteProduct = async (productId) => {
    try {
      // Make a DELETE request to your API endpoint to delete the product
      await axios.delete(`http://localhost:8000/api/AdminProductModel/${productId}`);
      
      // Remove the deleted product from the state
      setProData(prevProData => prevProData.filter(product => product._id !== productId));
      
      alert("Product deleted successfully");
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  const products = proData.map((product, index) => (
    <div key={index} className="productRow">
      <ProductCard product={product} onDeleteProduct={handleDeleteProduct} />
    </div>
  ));

  return (
    <div className='allproduct-container'>
      {products}
    </div>
  );
};

export default AllProductsPage;
