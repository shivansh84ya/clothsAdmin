import React, { useState } from 'react';
import './AdminHome.css'; // Import your CSS file
import { Link,Outlet } from "react-router-dom";
import AdminUsers from './AdminUsers';

const YourComponent = () => {

  const [isSidebarClosed, setIsSidebarClosed] = useState(false);

  const handleToggleClick = () => {
    setIsSidebarClosed((prevSidebarState) => !prevSidebarState);
  };

  const handleSearchClick = () => {
    setIsSidebarClosed(false);
  };
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleModeSwitch = () => {
    setIsDarkMode((prevMode) => !prevMode);
    // Toggle dark mode by changing the body class
    document.body.classList.toggle('dark', !isDarkMode);
  };

  return (
    <>
      <link
        href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
        rel="stylesheet"
      />

      <div classname='gridbox'>
        <div> <nav className={`sidebar ${isSidebarClosed ? 'close' : ''}`}>
      <div className={`YourComponent ${isDarkMode ? 'dark' : ''}`}> 
        <header>
          <div className="image-text">
            <span className="image">
              {/* <img src="https://t4.ftcdn.net/jpg/04/06/91/91/240_F_406919147_D3WsGjwXj1qmFNrei2ZFvBWwiueRcFmg.jpg" alt="logo" /> */}
              <h1 style={{color:"#ffc107",size:"20px"}}> AS</h1>
            </span>
            <div className="text header-text">
              <span className="main">Admin </span>
              <span className="sub"> Panel</span>
            </div>
          </div>
          <i className="bx bx-chevron-right toggle" onClick={handleToggleClick}></i>
        </header>

        <div className="menu-bar">
          <div className="menu">
            <ul className="menu-links">
          
              {/* Add other list items as needed */}
              <li class="nav-link">
              <a href="#">
                <i class="bx bx-home-alt icons"></i>
               <Link class="text nav-text" to="AdminDashboard">Dashboard</Link> 
              </a>
            </li>
            <li class="nav-link">
              <a href="#">
                <i class="bx bx-bar-chart-alt-2 icons"></i>
                <Link class="text nav-text" to="allproduct">All Product</Link> 
              </a>
            </li>
            <li class="nav-link">
              <a href="#">
                <i class="bx bx-plus icons"></i>
               <Link class="text nav-text" to="addproduct">Add Product</Link>
              </a>
            </li>
            <li class="nav-link">
              <a href="#">
                <i class="bx bx-pie-chart-alt icons"></i>
               <Link class="text nav-text"  to="allorder">Orders</Link>
              </a>  
            </li>
            <li class="nav-link">
              <a href="#">
                <i class="bx bx-user icons"></i>
                <Link class="text nav-text" to="users">Users</Link>
              </a>
            </li>
            <li class="nav-link">
              <a href="#">
                <i class="bx bx-wallet-alt icons"></i>
                <Link class="text nav-text" to="coupon">Add coupon</Link>
              </a>
            </li>
            </ul>
          </div>

       
          
        
      {/* Your existing component JSX here */}

      <div className="bottom-content">
        <li className="mode" onClick={handleModeSwitch}>
          <div className="moon-sun">
            <i className="bx bx-moon icons moon"></i>
            <i className="bx bx-sun icons sun"></i>
          </div>
          <span className="mode-text text">{isDarkMode ? 'Light Mode' : 'Dark Mode'}</span>
          <div className="toggle-switch">
            <span className="switch"></span>
          </div>
        </li>
      </div>
    </div>
        </div>
      </nav></div>
        <div><Outlet/></div>
      </div>

   
    </>
  );
};

export default YourComponent;
