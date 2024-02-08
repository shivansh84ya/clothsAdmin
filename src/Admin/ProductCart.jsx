// ProductCard.js

import React from 'react';

const ProductCard = ({ product }) => {
  const { name, description, sizes, quantity, price, image } = product;

  return (
  <div className='grid-product'>
  <div className='productCard'>
      <div style={styles.productImage}>
        <img src={image} alt={name} id='productImage' />
      </div>
      <div className="productDetails">
        <h2>{name}</h2>
        <p>{description}</p>
        <p>Sizes: {sizes.join(', ')}</p>
        <p>Quantity: {quantity}</p>
        <p>Price: Rs. {price}</p>
        <button id='btn'>Update</button>
        <button id='btn1'>Delete</button>
        <button id='btn2'>Out Of Stock</button>
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
    height: 'auto',
  },
  productDetails: {
    flex: '2',
    padding: '20px',
  },

};

export default ProductCard;
