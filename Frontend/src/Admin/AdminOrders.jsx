import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AllOrdersPage = () => {
  const [proData, setProData] = useState([]);

  const loadProductData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/orderdisplay");
      setProData(response.data);
    } catch (error) {
      console.log("Error while fetching data:", error);
    }
  };

  useEffect(() => {
    loadProductData();
  }, []);

  const handleStatusChange = (orderId, newStatus) => {
    // Update the order status in the database
    // Add your axios.put or axios.patch request here
    console.log(`Updating order ${orderId} status to ${newStatus}`);
  };

  return (
    <div>
      <h1 className='Orderheading'>All Orders</h1>
      <div className='Product-table'>
        <table>
          <thead>
            <tr className='product-head'>
              <th>Sno</th>
              <th>Date</th>
              <th>Order ID</th>
              <th>Order Amount</th>
              <th>Order Status</th>
            </tr>
          </thead>
          <tbody>
            {proData.map((order, index) => (
              <tr
                key={order.sno}
                className={`product-content ${order.orderstatus === 'delivered' ? 'delivered-row' : ''}`}
              >
                <td>{index + 1}</td>
                <td>{order.date}</td>
                <td>{order.orderid}</td>
                <td>Rs. {order.orderamt}</td>
                <td>
                  <select
                    value={order.orderstatus}
                    onChange={(e) => handleStatusChange(order.orderid, e.target.value)}
                  >
                    <option value="dispatched">Dispatched</option>
                    <option value="processed">Processed</option>
                    <option value="delivered">Delivered</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllOrdersPage;
