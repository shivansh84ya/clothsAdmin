import React, { useState } from 'react';
import { Input, Select, Upload, Button, Typography } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import './admin.css'; // Import the CSS file

const { Option } = Select;
const { TextArea } = Input;

const AddProduct = () => {
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
      <center><Typography.Title style={{ color: '#ffC107' }}>Add Product</Typography.Title></center>

      <div className="productcontainer">
        <label className='label1'> Product Name</label>:
        <Input id='inputbox' />
        <br />
        <br />
        <label className='label1'> Product Description</label>:
        <TextArea id='inputbox' rows={4} />
        <br />
        <br />
        <label className='label1'> Product Category</label>:
        <Select id='Categorie-select' defaultValue="Jeans">
          <Option value="Jeans">Jeans</Option>
          <Option value="T-shirt">T-shirt</Option>
          <Option value="Jackets">Jackets</Option>
        </Select>
        <br />
        <br />
        <label className='size label1'>Enter Size:</label>
        <br />
        <br />

        <div id="size">
          {[ 'S', 'M', 'L', 'XL' ].map((size) => (
            <div key={size} style={{ display: 'flex' }}>
              <Typography.Text className='label1'>{size}</Typography.Text>
              <Typography.Text style={{ fontSize: '15px', color: '#ffC107' }}>Qty:</Typography.Text>
              <Select>
                {[ ...Array(11).keys() ].map((key) => (
                  <Option key={key} value={key}>{key}</Option>
                ))}
              </Select>
            </div>
          ))}
        </div>

        <br />
        <label className='label1'>Product Price</label>:
        <Input type="number" id='inputbox' />
        <br />
        <br />
        <label className='label1'>Regular Price</label>:
        <Input type="number" id='inputbox' />
        <br />
        <br />

        <div id="imageFormContainer">
         
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="inputContainer">
              <label htmlFor={`image${i}`} className="labelContainer">
                <span role="img" aria-label="Upload Icon" className="uploadIcon">
                  <UploadOutlined />
                </span>{' '}
                Select Image {i}:
              </label>
              <Upload id={`image${i}`} name={`image${i}`} accept="image/*" className="fileInput" showUploadList={false}>
                <Button icon={<UploadOutlined />}>Click to Upload</Button>
              </Upload>
            </div>
          ))}
        </div>

        <Button type="primary" onClick={uploadImages}>Upload Images</Button>

        <div id="imageContainer">
          {imageUrls.map((imageUrl, index) => (
            <img key={index} src={imageUrl} alt={`Uploaded Image ${index + 1}`} className="uploadedImage" />
          ))}
        </div>

        <Button id="addbtn" type="primary">Add Product</Button>
      </div>
    </>
  );
}

export default AddProduct;
