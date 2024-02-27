import { Link,Outlet } from "react-router-dom";
// import "../Admin/admin.cpp"

const Layout=()=>{

    return(
        <>
       
       
<h2 id="heading">Admin Panel</h2>
    <div className="container">

            <div className="navbar">   
                <ul>
            <li><Link className="lin" to="AdminDashboard">Dashboard</Link></li>
            <li><Link className="lin" to="allproduct">All Product</Link></li>
            <li><Link className="lin" to="addproduct">Add Product</Link></li>
            <li><Link className="lin" to="allorder">Orders</Link></li>
            <li><Link className="lin" to="coupon">Add Coupon</Link></li>
            <li><Link className="lin" to="users">Users</Link></li>
            </ul>
            </div>

 
        
       <div className="content">
        
                <Outlet/>
       </div>   
       </div>
        </>
    )
}
export default Layout;