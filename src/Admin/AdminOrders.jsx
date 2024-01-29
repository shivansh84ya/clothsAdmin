// Import necessary React components
import React, { useState } from 'react';


// Sample data for all orders


const allOrdersData = [
  {
    sno: 1,
    date: new Date('2024-01-10T15:55:22'),
    orderId: 'ORD123',
    orderAmount: 150,
    orderStatus: 'Processing',
  },
  {
    sno: 2,
    date: new Date('2024-01-11T12:30:45'),
    orderId: 'ORD124',
    orderAmount: 200,
    orderStatus: 'Shipped',
  },
  {
    sno: 3,
    date: new Date('2024-01-11T12:30:45'),
    orderId: 'ORD124',
    orderAmount: 200,
    orderStatus: 'Shipped',
  },
  {
    sno: 4,
    date: new Date('2024-01-11T12:30:45'),
    orderId: 'ORD124',
    orderAmount: 200,
    orderStatus: 'Shipped',
  },
  {
    sno: 4,
    date: new Date('2024-01-11T12:30:45'),
    orderId: 'ORD124',
    orderAmount: 200,
    orderStatus: 'Shipped',
  },
  {
    sno: 4,
    date: new Date('2024-01-11T12:30:45'),
    orderId: 'ORD124',
    orderAmount: 200,
    orderStatus: 'Shipped',
  },
  {
    sno: 4,
    date: new Date('2024-01-11T12:30:45'),
    orderId: 'ORD124',
    orderAmount: 200,
    orderStatus: 'Shipped',
  },
  {
    sno: 4,
    date: new Date('2024-01-11T12:30:45'),
    orderId: 'ORD124',
    orderAmount: 200,
    orderStatus: 'Shipped',
  },
  // Add more orders as needed
];

// AllOrdersPage component
const AllOrdersPage = () => {
  // State to manage all orders
  const [allOrders, setAllOrders] = useState(allOrdersData);
  // Function to format date as "Wed Jan 10 2024 at 3:55:22 PM"
  const formatDate = (date) => {
    const options = {
    //   weekday: 'Wed',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      hour12: true,
    };
    return new Intl.DateTimeFormat('en-US', options).format(date);
  };
  return (
    <div>
      <h1 className='Orderheading'>All Orders</h1>
      

        <div className='Product-table'>
          <tr className='product-head'>
            <th>Sno</th>
            <th>Date</th>
            <th>Order ID</th>
            <th>Order Amount</th>
            <th>Order Status</th>
          </tr>
        <div>
          {allOrders.map((order) => (
              <tr key={order.sno} className='product-content' >
              <td>{order.sno}</td>
              <td>{formatDate(order.date)}</td>
              <td>{order.orderId}</td>
              <td>Rs. {order.orderAmount}</td>
              <td>{order.orderStatus}</td> 
            </tr>
          ))}
        </div>
          </div>
    
    </div>
  );


};

export default AllOrdersPage;
