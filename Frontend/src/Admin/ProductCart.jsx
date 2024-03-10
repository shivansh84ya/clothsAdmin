// ProductCard.js
import React from 'react';
import { useState } from 'react';

const ProductCard = ({ product, onDeleteProduct }) => {
  const { _id, name, description, size, regularPrice, price, images,category } = product;

  const [isOutOfStock, setIsOutOfStock] = useState(false);

  const handleDeleteProduct = () => {
    onDeleteProduct(_id);
  };


  const handleToggleStockStatus = () => {
    setIsOutOfStock(!isOutOfStock);
  };

  return (
    <div className='grid-product'>
    <div className='productCard' style={{ backgroundColor: isOutOfStock ? '#E6BAA3' : '#E1F0DA' , color: isOutOfStock ? 'white': 'red', transition: 'background-color 0.5s, color 0.5s' }}>
      <div style={styles.productImage}>
        <img src={images[0]} alt={name} id='productImage' />
      </div>
      <div className="productDetails" style={{ color: isOutOfStock ?  'red': '#ff7b00',  transition: 'color 0.8s' }}>
        <h2>{name}</h2>
        <p>{description}</p>
        <p>{category}</p>
        <p>Size's & Qty's : {size[0].label} : {size[0].quantity} | {size[1].label} : {size[1].quantity} | {size[2].label} : {size[2].quantity} | {size[3].label} : {size[3].quantity} </p>
        <p>Regular Price: Rs. {regularPrice} </p>
        <p>Selling Price: Rs. {price}</p>
        <button id='btn'>Update</button>
        <button id='btn1' onClick={handleDeleteProduct}>Delete</button>
        <button id='btn2' style={{ backgroundColor: isOutOfStock ?  '#416D19' : '#FF6868' , transition: 'background-color 0.5s' }} onClick={handleToggleStockStatus}>
          {isOutOfStock ?  'In Stock' :  'Out Of Stock' }
        </button>
      </div>
    </div>
  </div>
  );
};

const styles = {
  productImage: {
    flex: '1',
  },
  image: {
    width: '150px',
    height: '200px',
  },
  productDetails: {
    flex: '2',
    padding: '20px',
  },
};

export default ProductCard;
