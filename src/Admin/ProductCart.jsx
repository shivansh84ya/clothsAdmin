// ProductCard.js

import React from 'react';

const ProductCard = ({ product }) => {
  const { name, description, sizes, quantity, price, image } = product;

  return (
    <div style={styles.productCard}>
      <div style={styles.productImage}>
        <img src={image} alt={name} style={styles.image} />
      </div>
      <div style={styles.productDetails}>
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
  );
};

const styles = {
  productCard: {
    display: 'flex',
    width:"800px",
    // margin:"auto",
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    // overflow: 'hidden',
    backgroundColor: 'rgb(239, 239, 239)',
  },
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
