// ProductCard.js

import React from 'react';

const ProductCard = ({ product }) => {
  const { name, description, size, regularPrice, price, images } = product;
  console.log(images)
  // for(let i=0;i<3;i++){
  //   if(image[i]){
  //     var img = document.write(`<img src=${image[i]} height="250" width="250"/>`)
  //     break;
  //   }
  // }
  return (
  <div className='grid-product'>
  <div className='productCard'>
      <div style={styles.productImage}>
     
     {/* {  for(let i=0;i<3;i++){
    if(image[i]){
      var img = document.write(`<img src=${image[i]} height="250" width="250"/>`)
      break;
    }
  }} */}
        <img src={images[0]} alt={name} id='productImage' />
      </div>
      <div className="productDetails">
        <h2>{name}</h2>
        <p>{description}</p>
        <p>Size's & Qty's : {size[0].label} : {size[0].quantity} | {size[1].label} : {size[1].quantity} | {size[2].label} : {size[2].quantity} | {size[3].label} : {size[3].quantity} </p>
        <p >Regular Price: Rs. {regularPrice} </p>
        <p>Selling Price: Rs. {price}</p>
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
