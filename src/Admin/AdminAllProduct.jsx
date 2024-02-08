// AllProductsPage.js
import React from 'react';
import './admin.css'; // Import the CSS file
import ProductCard from './ProductCart';

const products = [
  // Sample product data
  {
    name: 'Product 1',
    description: 'Description of Product 1',
    sizes: ['S', 'M', 'L'],
    quantity: 10,
    price: 29.99,
    image: 'https://www.nextdirect.com/nxtcms/resource/blob/5821518/d114a8023263017f86b11c206949508e/shackets-data.jpg',
  },
  {
    name: 'Product 2',
    description: 'Description of Product 2',
    sizes: ['M', 'L', 'XL'],
    quantity: 15,
    price: 39.99,
    image: 'https://www.nextdirect.com/nxtcms/resource/blob/5821518/d114a8023263017f86b11c206949508e/shackets-data.jpg',
  },
  {
    name: 'Product 2',
    description: 'Description of Product 2',
    sizes: ['M', 'L', 'XL'],
    quantity: 15,
    price: 39.99,
    image: 'https://www.nextdirect.com/nxtcms/resource/blob/5821518/d114a8023263017f86b11c206949508e/shackets-data.jpg',
  },
  {
    name: 'Product 2',
    description: 'Description of Product 2',
    sizes: ['M', 'L', 'XL'],
    quantity: 15,
    price: 39.99,
    image: 'https://www.nextdirect.com/nxtcms/resource/blob/5821518/d114a8023263017f86b11c206949508e/shackets-data.jpg',
  },
  {
    name: 'Product 2',
    description: 'Description of Product 2',
    sizes: ['M', 'L', 'XL'],
    quantity: 15,
    price: 39.99,
    image: 'https://www.nextdirect.com/nxtcms/resource/blob/5821518/d114a8023263017f86b11c206949508e/shackets-data.jpg',
  },
  {
    name: 'Product 2',
    description: 'Description of Product 2',
    sizes: ['M', 'L', 'XL'],
    quantity: 15,
    price: 39.99,
    image: 'https://www.nextdirect.com/nxtcms/resource/blob/5821518/d114a8023263017f86b11c206949508e/shackets-data.jpg',
  },
  // Add more products as needed
];

const AllProductsPage = () => {
  return (
    <div className='allproduct-container'>
      {products.map((product, index) => (
        <div key={index}  className="productRow">
          <ProductCard product={product} />
        </div>
      ))}
      
    </div>
  );
};

const styles = {
  // container: {
  //   padding: '20px',
  //   // border:"2px solid red"
  //   marginLeft:"300px"
  // },
  // productRow: {
  //   fontSize:"20px",
  //   display: 'flex',
  //   alignItems: 'center',
  //   marginBottom: '20px',
  //   // border:"2px solid red"
  // },

  
};

export default AllProductsPage;
