// Import necessary React components
import React, { useState,useEffect } from 'react';
import axios from 'axios';

// Sample data for all orders


// const AdminUsersData = [
//   {
//     sno: 1,
//     Name: 'Shivansh',
//     EmailId: 'Shivansh@gmail.com',
//     MobileNumber: 9712345565,
//     OrderHistory: 'Processing',
//   },
//   {
//     sno: 2,
//     Name: 'siddhart',
//     EmailId: 'siddhart@gmail.com',
//     MobileNumber: 9712345565,
//     OrderHistory: 'Shipped',
//   },
//   {
//     sno: 3,
//     Name: 'Varsha',
//     EmailId: 'Varsha@gmail.com',
//     MobileNumber: 9712345565,
//     OrderHistory: 'Shipped',
//   },
//   {
//     sno: 4,
//     Name: 'Rahul',
//     EmailId: 'Rahul@gmail.com',
//     MobileNumber: 9712345565,
//     OrderHistory: 'Shipped',
//   },
//   {
//     sno: 4,
//     Name: 'bhushan',
//     EmailId: 'bhushan@gmail.com',
//     MobileNumber: 9712345565,
//     OrderHistory: 'Shipped',
//   },
//   {
//     sno: 4,
//     Name: 'Amit',
//     EmailId: 'Amit@gmail.com',
//     MobileNumber: 9712345565,
//     OrderHistory: 'Shipped',
//   },
//   {
//     sno: 4,
//     Name: 'Pankaj',
//     EmailId: 'Pankaj@gmail.com',
//     MobileNumber: 9712345565,
//     OrderHistory: 'Shipped',
//   },
//   {
//     sno: 4,
//     Name: 'Amol',
//     EmailId: 'Amol@gmail.com',
//     MobileNumber: 9712345565,
//     OrderHistory: 'Shipped',
//   },
//   // Add more orders as needed
// ];

//http://localhost:5000/user

// AllOrdersPage component
const AdminUsers = () => {
  // State to manage all orders
  // const [alldata, setAlldata] = useState(AdminUsersData);
  // Function to format Name as "Wed Jan 10 2024 at 3:55:22 PM"

  let i = 1;
  const [proData, setProData] = useState([]);

  // Fetching data from server
  const loadProductData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/user");
      setProData(response.data);
    } catch (error) {
      console.log("Error while fetching data:", error);
    }
  }

  useEffect(() => {
    loadProductData();
  }, []);


  return (
    <div>
      <center><h1 className='Orderheading'>All Users</h1></center>
      

        <div className='Product-table'>
          <tr className='product-head'>
            <th>Sno</th>
            <th>Users Name</th>
            <th>Mobile Number</th>
            <th>Email ID</th>
            {/* <th>Order History</th> */}
          </tr>
        <div>
          {proData.map((order) => (
              <tr key={order.sno} className='product-content' >
              <td>{i++}</td>
              <td>{order.name}</td>
              <td>{order.mobile}</td>
              <td>{order.email}</td>
              {/* <td>{order.OrderHistory}</td>  */}
            </tr>
          ))}
        </div>
          </div>
    
    </div>
  );


};

export default AdminUsers;
