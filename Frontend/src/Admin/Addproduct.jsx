import React, { useState } from 'react';
import { Input, Select, Upload, Button, Typography } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import './admin.css'; // Import the CSS file
import { useNavigate } from "react-router-dom";

import axios from 'axios';

const { Option } = Select;
const { TextArea } = Input;

const AddProduct = () => {
    const [selectedImages, setSelectedImages] = useState([]);
    
    const [selectedFile , setSelectedFile] = useState(null);
    const [imgUrl, setImgUrl] = useState("");
    const [name , setName] = useState("");
    const [desc , setDesc] = useState("");
    const [price , setPrice] = useState("");
    const [RegPrice , setRegPrice] = useState("");
    const [Category , setCategory] = useState("");
    const [sizes, setSizes] = useState({ S: 0, M: 0, L: 0, XL: 0 });

    const navigate = useNavigate();



    const handleSizeDecrement = (size) => {
      if (sizes[size] > 0) {
        setSizes(prevSizes => ({
          ...prevSizes,
          [size]: prevSizes[size] - 1
        }));
      }
    };
    
    const handleSizeIncrement = (size) => {
      setSizes(prevSizes => ({
        ...prevSizes,
        [size]: prevSizes[size] + 1
      }));
    };

    const HandelProductSubmit = async () => {
      try {
        const formData = new FormData();
        if (name === "" || desc === "" || price === "" || RegPrice === "" || Category === "") {
          alert("Please fill in all the fields.");
          return;
      }
    
        // Append each selected file to the FormData object
        for (let i = 0; i < selectedImages.length; i++) {
          formData.append('file', selectedImages[i]);
          formData.append("upload_preset", "qzdxlvuy");
          formData.append("cloudName", "dkn4evown");
    
          const response = await axios.post("https://api.cloudinary.com/v1_1/dkn4evown/image/upload", formData);
          console.log('Image Upload:', response.data);
          console.log('Image URL:', response.data.url);
          setImgUrl(response.data.url);
        }
    
        // Clear the selectedImages state after uploading
        setSelectedImages([]);
      } catch (error) {
        console.error('Error in upload image', error);
      }
      
      navigate("/allproduct")
      // try {
        const sizesArray = Object.entries(sizes).map(([label, quantity]) => ({
          label: label,
          quantity: quantity || 0 // Ensure quantity is set to 0 if not provided
        }));
        // Send product data to backend along with image URLs
      //   const sizesArray = ['S', 'M', 'L', 'XL'].map((label, index) => ({
      //     label: label,
      //     quantity: sizes[index] || 0 // Ensure quantity is set to 0 if not provided
      // }));

        const productData = {
            name: name,
            description: desc,
            price: price,
            regularPrice: RegPrice,
            category: Category,
            size: sizesArray,
            images: selectedImages // Array of image URLs
        };

        console.log(productData);

        axios.post('http://localhost:5000/Adminaddproduct', productData).then(alert('Product added successfully!'))
    }
    
    const handleImageChange = (e) => {
      const files = e.target.files;
      setSelectedFile(e.target.files[0]);
      const imageFiles = [];
    
      // Check if there are no files selected
      if (files.length === 0) {
        alert("Please select 4 images.");
        return;
      }
    
      // Loop through each selected file
      for (let i = 0; i < files.length; i++) {
        const reader = new FileReader();
        reader.onload = () => {
          // Push the data URL of the selected image into the imageFiles array
          imageFiles.push(reader.result);

          // If all files are processed and at least 4 images are selected, update the state with the array of image URLs
          if (imageFiles.length === files.length && imageFiles.length === 4) {
            setSelectedImages(imageFiles);
          } else if (imageFiles.length < 4 && i === files.length - 1) {
            alert("Please select at least 4 images.");
            e.target.value = "";
          } else if ( imageFiles.length > 4){
            alert("Please select less than 4 images.");
            e.target.value = "";
          }
        };
        reader.readAsDataURL(files[i]);
      }
      
    };
    

  return (
    <div className="add-product-container">
      <Typography.Title level={1} className="add-product-title " color='#b88a00' >Add Product</Typography.Title>

      <div className="form-container">
        <div className="form-row">
          <label className='label'>Product Name:</label>
          <Input className="input-box" value={name} onChange={(e) => setName(e.target.value)}/>
        </div>

        <div className="form-row">
          <label className='label'>Product Description:</label>
          <TextArea className="input-box" rows={4} value={desc} onChange={(e) => setDesc(e.target.value)} />
        </div>

        <div className="form-row">
          <label className='label'>Product Category:</label> 
          <Select className="select-box" defaultValue="Category" onChange={(value) => setCategory(value)} >
            <Option value="Jeans">Jeans</Option>
            <Option value="Shirt">Shirt</Option>
            <Option value="T-shirt">T-shirt</Option>
            <Option value="Jackets">Jackets</Option>
            <Option value="Pant">Pant</Option>
            <Option value="Pant">Joggers</Option>
          </Select>
        </div>






        <div className="form-row">
      <label className='label'>Enter Size:</label>
      <div className="size-options">
        {['S', 'M', 'L', 'XL'].map((size) => (
          <div key={size} className="size-option">
            <span className='size-label'>{size}</span>
            <div className='size-qty'>
              <Button onClick={() => handleSizeDecrement(size)}>-</Button>
              <span>{sizes[size]}</span>
              <Button onClick={() => handleSizeIncrement(size)}>+</Button>
            </div>
          </div>
        ))}
      </div>
    </div>


       

        
        <div className="form-row">
          <label className='label'>Maximum Retail Price :</label>
          <Input type="number" className="input-box" value={RegPrice} onChange={(e) => setRegPrice(e.target.value)} />
        </div>


        <div className="form-row">
          <label className='label'>Product Selling Price:</label>
          <Input type="number" className="input-box" value={price} onChange={(e) => setPrice(e.target.value)}/>
        </div>

        <div className="form-row">
        </div>
        <div className="image-uploader">
      {[1].map(index => (
        <div key={index}>
          <label htmlFor={`image${index}`} >Select Image</label>
          <input type="file" id={`image${index}`} multiple name={`image${index}`} accept="image/*" style={{marginLeft:"25px"}} required onChange={(e) => handleImageChange(e)} />
          {/* <input type="file" id={`image${index}`} multiple name={`image${index}`} accept="image/*" style={{marginLeft:"25px"}} required onChange={handleImageChange} /> */}
        </div>
      ))}
      <div className="image-preview">
        {selectedImages.map((imageUrl, index) => (
          <img key={index} src={imageUrl} alt={`Selected Image ${index}`} className="preview-image"  />
        ))}
      </div>
      
      {/* <Button type="primary" onClick={ImageUploader}>Upload Images</Button> */}
    </div>
        </div>

        <Button type="primary" className="add-product-button" onClick={HandelProductSubmit}>Add Product</Button>
      </div>

      
    // </div>
  );
}

export default AddProduct;
