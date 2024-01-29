import React from 'react';
import ReactDOM from 'react-dom/client';
// import AdminHome from "./Admin/AdminHome"
import App from './AdminApp'; //Admin page
// import App from '../src/Components/AppAccount'; //user profile

// import Signup from './Components/Signup';
// import './Css/navbar.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <AdminHome/> */}
    <App/>

  </React.StrictMode>
);


