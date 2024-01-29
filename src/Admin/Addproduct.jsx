import React, { useState } from 'react';
import './admin.css'; // Import the CSS file

    const AddProduct = () =>{
    let number = [];
        for(let i=0;i<=10;i++){
            number[i]= i;
    }

    const [imageUrls, setImageUrls] = useState([]);

    const uploadImages = () => {
      const newImageUrls = [];
  
      for (let i = 1; i <= 4; i++) {
        const fileInput = document.getElementById(`image${i}`);
        const files = fileInput.files;
  
        if (files.length > 0) {
          newImageUrls.push(URL.createObjectURL(files[0]));
        }
      }
  
      setImageUrls(newImageUrls);
    } 

        return (
            <>
            <center><h1>Add Product</h1></center>
    
    
    <div className="productcontainer">

                Enter Product Name :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <input type="text" id='inputbox' /><br />
                <br />  Enter Product Description :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="textbox" id='inputbox'/><br />
                <br />Enter Product Categorie :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <select id='Categorie-select'>

                    <option value="">Jeans</option>
                    <option value="">T-shirt</option>
                    <option value="">jackets</option>
                    <option value="">Jeans</option>
                    <option value="">Jeans</option>
                    <option value="">Jeans</option>


                </select>
            
            <br />

                Enter Size   :
    
            <div id="size">
                <div  style={{display:"flex"}}>
                    <h3>S</h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <p style={{fontSize:"15px"}}>Qty:</p>
                    <select>
                    {number.map((key)=>{
                        return  <option>{key}</option>
                    })}
                    </select>
                </div>
                <div  style={{display:"flex"}}>
                    <h3>M</h3>&nbsp;&nbsp;&nbsp;&nbsp;
                    <p style={{fontSize:"15px"}}>Qty:</p>
                    <select>
                    {number.map((key)=>{
                        return <option>{key}</option>
                    })}
                    </select>
                </div>
                <div  style={{display:"flex"}}>
                    <h3>L</h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <p style={{fontSize:"15px"}}>Qty:</p>
                    <select>
                    {number.map((key)=>{
                        return <option>{key}</option>
                    })}
                    </select>
                </div>
                <div  style={{display:"flex"}}>
                    <h3>XL</h3>&nbsp;&nbsp;
                    <p style={{fontSize:"15px"}}>Qty:</p>
                    <select>
                    {number.map((key)=>{
                        return <option>{key}</option>
                    })}
                    </select>
                </div>
    
            </div>
               
             <br />   Enter Product Price  :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <input type="number" id='inputbox'/><br/>
              <br />  Enter Regular Price  :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <input type="number" id='inputbox'/><br/>
    
     <br /><br />

              <div id="imageFormContainer">

                  <div className="container5">
      {[1, 2, 3, 4].map((i) => (
        <div key={i} className="inputContainer">
          <label htmlFor={`image${i}`} className="labelContainer">
            <span role="img" aria-label="Upload Icon" className="uploadIcon">
              
            </span>{' '}
            Select Image {i} :
          </label>
          <input type="file" id={`image${i}`} name={`image${i}`} accept="image/*" className="fileInput" required />
        </div>
      ))}
      </div> 
      <button type="button" onClick={uploadImages} className="uploadButton">
        Upload Images
      </button>

      <div id="imageContainer">
        {imageUrls.map((imageUrl, index) => (
          <img key={index} src={imageUrl} alt={`Uploaded Image ${index + 1}`} className="uploadedImage" />
        ))}
      </div>
    </div>

     

                <button id="addbtn">Add product</button>
                    </div>
    
            </>
        )
    }
 

export default AddProduct;
