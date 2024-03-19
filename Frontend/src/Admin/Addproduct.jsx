import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, { useState,useEffect } from 'react';
import { Input, Select, Upload, Button, Typography } from 'antd';
import './admin.css'; // Import the CSS file
import axios from 'axios';
import ProductCard from './ProductCart';
import { useNavigate,useLocation } from 'react-router-dom';
import  {ThreeDots} from 'react-loader-spinner';

const { Option } = Select;
const { TextArea } = Input;

const AddProduct = () => {

    const [selectedImages, setSelectedImages] = useState([]);
    const [selectedFile , setSelectedFile] = useState(null);
    const [imgUrl, setImgUrl] = useState("");
    const [name , setName] = useState("Select Brand Name");
    const [desc , setDesc] = useState("");
    const [price , setPrice] = useState("");
    const [RegPrice , setRegPrice] = useState("");
    const [Category , setCategory] = useState("Select Brand Category");
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [loading, setLoading] = useState(false);
    const [sizes, setSizes] = useState({ S: 0, M: 0, L: 0, XL: 0 });
    const [newBrand, setNewBrand] = useState(""); // State for the new brand input
    const [brands, setBrands] = useState([]);
    const [newCategory, setNewCategory] = useState("");
    const [categories, setCategories] = useState([]);
    const [updateFlag, setUpdateFlag] = useState(false);
    
    const navigate = useNavigate();
    const location = useLocation()

    


    const handleAddBrand = async () => {
      if (newBrand.trim() !== "") {
        try {
          const response = await axios.post("http://localhost:5000/addbrand", { brand: newBrand });
          setBrands([...brands, response.data.brand]); // Update brands state with new brand
          setNewBrand(""); // Clear the new brand input field
          toast.success("Brand added successfully!");
          setUpdateFlag(prevFlag => !prevFlag)
        } catch (error) {
          console.error("Error adding brand:", error);
          toast.error("Error adding brand. Please try again.");
        }
      }
    };
    
    const handleAddCategory = async () => {
      if (newCategory.trim() !== "") {
        try {
          const response = await axios.post("http://localhost:5000/addcatogory", { category: newCategory });
          setCategories([...categories, response.data.category]); // Update categories state with new category
          setNewCategory(""); // Clear the new category input field
          toast.success("Category added successfully!");
          setUpdateFlag(prevFlag => !prevFlag)
        } catch (error) {
          console.error("Error adding category:", error);
          toast.error("Error adding category. Please try again.");
        }
      }
    };

    
    
  useEffect(() => {
    const fetchBrandsAndCategories = async () => {
      try {
        const brandsResponse = await axios.get("http://localhost:5000/getbrand");
        setBrands(brandsResponse.data);
        // setUpdateFlag(prevFlag => !prevFlag)

        const categoriesResponse = await axios.get("http://localhost:5000/getcatogory");
        setCategories(categoriesResponse.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchBrandsAndCategories();
  }, [updateFlag]);



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

  //   const HandelProductSubmit = async () => {
  //     try {
  //       const formData = new FormData();
  //       // if (name === "" || desc === "" || price === "" || RegPrice === "" || Category === "") {
  //       //   toast.error("Please fill in all the fields!")
  //       //   return;
  //     // }
    
  //       // Append each selected file to the FormData object
  //       for (let i = 0; i < selectedImages.length; i++) {
  //         formData.append('file', selectedImages[i]);
  //         formData.append("upload_preset", "qzdxlvuy");
  //         formData.append("cloudName", "dkn4evown");
    
  //         const response = await axios.post("https://api.cloudinary.com/v1_1/dkn4evown/image/upload", formData);
  //         console.log('Image Upload:', response.data);
  //         console.log('Image URL:', response.data.url);
  //         setImgUrl(response.data.url);
  //       }
    
  //       // Clear the selectedImages state after uploading
  //       setSelectedImages([]);
  //     } catch (error) {
  //       console.error('Error in upload image', error);
  //       toast.error('Error in upload image')
  //     }
      
  //     navigate("/allproduct")
  //     // try {
  //       const sizesArray = Object.entries(sizes).map(([label, quantity]) => ({
  //         label: label,
  //         quantity: quantity || 0 // Ensure quantity is set to 0 if not provided
  //       }));
  // }

     const HandelProductSubmit = async () => {
          setLoading(true);
          try {
            // If selectedProduct exists, it's an update; otherwise, it's an add
            const url = selectedProduct
              ? `http://localhost:5000/Adminupdateproduct/${selectedProduct._id}`
              : "http://localhost:5000/Adminaddproduct";
        
            const formData = new FormData();
        
            // Append each selected file to the FormData object
            for (let i = 0; i < selectedImages.length; i++) {
              formData.append("file", selectedImages[i]);
              formData.append("upload_preset", "qzdxlvuy");
              formData.append("cloudName", "dkn4evown");
        
              const response = await axios.post(
                "https://api.cloudinary.com/v1_1/dkn4evown/image/upload",
                formData
              );
              console.log("Image Upload:", response.data);
              console.log("Image URL:", response.data.url);
              setImgUrl(response.data.url);
            }
        
            // Clear the selectedImages state after uploading
            setSelectedImages([]);

            navigate("/allproduct")
        
            // Send product data to the appropriate endpoint
            const sizesArray = Object.entries(sizes).map(([label, quantity]) => ({
              label: label,
              quantity: quantity || 0 // Ensure quantity is set to 0 if not provided
            }));


            const productData = {
              name: name,
              description: desc,
              price: price,
              regularPrice: RegPrice,
              category: Category,
              size: sizesArray,
              images: selectedImages,
            };
        
            const axiosConfig = {
              headers: {
                "Content-Type": "application/json",
              },
            };
        
            // Use PUT method for updates
            // alert("Product added success");
            setLoading(false);
            const response = await axios.post(url, productData, axiosConfig);
            
        
            if (selectedProduct) {
              setSelectedProduct(null);
              
              // console.log("Product updated successfully!");
              // alert("Product updated successfully!");
              toast.success('"Product updated successfully!')
              
            } else {
              console.log("Before confirmation: Product added successfully!");
              if (window.confirm("Product added successfully!")) {
                console.log("After confirmation: Product added successfully!");
              }
            }
            
            
          } catch (error) {
            console.error("Error:", error);
            setLoading(false);
            // alert("Error adding/updating product. Please try again.");
            toast.error('Error adding/updating product. Please try again.')
          }
    };
        
        
        
    useEffect(() => {
          // Access product data from location state
          const data = location.state && location.state.productData;
          if (data) {
            // Set state based on the product data if available
            setSelectedProduct(data);
            setName(data.name);
            setDesc(data.description);
            setCategory(data.category);
            setSizes(data.size.map((size) => size.quantity));
            setPrice(data.price);
            setRegPrice(data.regularPrice);
            setSelectedImages(data.images);
          }
    }, [location.state]);

    
    const handleImageChange = async (e) => {
          const files = e.target.files;
          setSelectedFile(e.target.files[0]);
          const imageFiles = [];
        
          // Check if there are no files selected
          if (files.length === 0) {
            toast.error("Please select images.");
            return;
          }
        
          try {
            // Loop through each selected file
            for (let i = 0; i < files.length; i++) {
              const formData = new FormData();
              formData.append("file", files[i]);
              formData.append("upload_preset", "qzdxlvuy");
              formData.append("cloudName", "dkn4evown");
        
              const response = await axios.post(
                "https://api.cloudinary.com/v1_1/dkn4evown/image/upload",
                formData
              );
              console.log("Image Upload:", response.data);
              console.log("Image URL:", response.data.url);
              imageFiles.push(response.data.url);
            }
        
            // If all files are processed and at least one image is uploaded
            if (imageFiles.length > 0) {
              setSelectedImages(imageFiles);
              toast.success("Images uploaded successfully");
            }
          } catch (error) {
            console.error("Error uploading images:", error);
            toast.error("Error uploading images. Please try again.");
          }
    };
        
    const onUpdateProduct = (product) => {
      // Set the state with the selected product data
      setSelectedProduct(product);
  
      // Set other state variables based on the selected product data
      setName(product.name);
      setDesc(product.description);
      setCategory(product.category);
      setSizes(product.size.map((size) => size.quantity));
      setPrice(product.price);
      setRegPrice(product.regularPrice);
  
      // Navigate to the AddProduct page
      navigate('/addproduct', { state: { productData: product}});
    };



  return (

    <div className="add-product-container">
      <Typography.Title level={3} className="add-product-title">
      {selectedProduct ? 'Update Product' : 'Add Product'}
    </Typography.Title>

      <div className="form-container">
        {/* <div className="form-row">
          <label className='label'>Product Name:</label>
          <Input className="input-box" value={name} onChange={(e) => setName(e.target.value)}/>
        </div> */}

        <div className="form-row">
          <label className='label'>Product Brand:</label>
          
          <Select className="select-box" value={name} onChange={(value) => setName(value)}>
            {brands.map((brand) => (
              <Option key={brand._id} value={brand.brand}>{brand.brand}</Option>
            // <Option key="addNew" value="Add New Brand">Add New Brand</Option>
          ))}

          </Select>
          <Input
            className="input-box"
            placeholder="Enter new brand name"
            value={newBrand}
            onChange={(e) => setNewBrand(e.target.value)}
          />
          <Button type="primary" onClick={handleAddBrand}>Add Brand</Button>
        </div>


        <div className="form-row">
          <label className='label'>Product Description:</label>
          <TextArea className="input-box" rows={4} value={desc} onChange={(e) => setDesc(e.target.value)} />
        </div>

        {/* 
      <div className="form-row">
          <label className='label'>Product Category:</label> 
            <Select className="select-box" value={Category} onChange={(value) => setCategory(value)} >
              <Option value="Jeans">Jeans</Option>
              <Option value="Shirt">Shirt</Option>
              <Option value="T-shirt">T-shirt</Option>
              <Option value="Jackets">Jackets</Option>
              <Option value="Pant">Pant</Option>
              <Option value="Pant">Joggers</Option>
            </Select>
      </div> */}


                                                                                           
      <label className='label'>Product Categories:</label>
      <Select
  className="select-box"
  value={Category}
  onChange={(value) => setCategory(value)}
>
  <Option value="Select Brand Category">Select Brand Category</Option>
  {/* Map through categories and render each as an Option */}
  {categories.map((category) => (
    <Option key={category._id} value={category.category}>
      {category.category}
    </Option>
  ))}
</Select>

      <Input value={newCategory}  placeholder="Enter new category name" onChange={(e)  => setNewCategory(e.target.value)} />
      <Button onClick={handleAddCategory}>Add Category</Button>





    {/* <div className="form-row">
      <label className='label'>Enter Size:</label>
      <div className="size-options">
        {['S', 'M', 'L', 'XL'].map((size) => (
          <div key={size} className="size-option">
            <span className='size-label'>{size}</span>
            <div className='size-qty'>
              <Button onClick={() => handleSizeDecrement(size)}>-</Button>
              <span >{sizes[size]}</span>  
              <Button onClick={() => handleSizeIncrement(size)}>+</Button>
            </div>
          </div>
        ))}
      </div>
    </div> */}

        <div className="form-row">
          <label className='label'>Enter Size:</label>
          <div className="size-options">
            {Object.entries(sizes).map(([size, quantity]) => (
              <div key={size} className="size-option">
                <span className='size-label'>{size}</span>
                <div className='size-qty'>
                  <Button onClick={() => handleSizeDecrement(size)}>-</Button>
                  <span>{quantity}</span> {/* Display the quantity */}
                  <Button onClick={() => handleSizeIncrement(size)}>+</Button>
                </div>
              </div>
            ))}
          </div>
        </div>



       
        <div className="form-row">
          <label className='label'>Product Selling Price:</label>
          <Input type="number" className="input-box" value={price} onChange={(e) => setPrice(e.target.value)}/>
        </div>

        
        <div className="form-row">
          <label className='label'>Maximum Retail Price :</label>
          <Input type="number" className="input-box" value={RegPrice} onChange={(e) => setRegPrice(e.target.value)} />
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
      
    </div>


    
        </div>

        <Button type="primary" className="add-product-button" onClick={HandelProductSubmit}>
        {selectedProduct ? 'Update Product' : 'Add Product'}
      </Button>

      <ProductCard product={selectedProduct} onUpdate={onUpdateProduct} />

      {loading && (
        <div className="modal-overlay">
          <div className="modal-content">
            <ThreeDots type="Puff" color="#ffc107" height={100} width={100} />
          </div>
       </div>
      )}
      </div>

   
    // </div>
  );

}

export default AddProduct;
