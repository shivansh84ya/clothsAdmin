import {BrowserRouter,Routes,Route} from "react-router-dom";
import Layout from "./Admin/AdminLayout";
import Users from "./Admin/AdminUsers";
import Coupon from "./Admin/AdminCoupon";
import Dashboard from "./Admin/AdminDashboard";
import AddProduct from "./Admin/Addproduct";
// import AllProduct from "./Admin/AdminAllProduct";
import AllProductsPage from "./Admin/AdminAllProduct";
// import AllProduct from "./Admin/AdminAllProduct";
import AllOrdersPage from "./Admin/AdminOrders";
// import Product from "./Components/Product";
// import Categories from "./Components/Categories";
// import AboutUs from "./Components/AboutUs";
import YourComponent from "./Admin/AdminHome";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App=()=>{
  return(
    <>
    <div>
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<YourComponent/>}>
      <Route index element={<Dashboard/>}/>
      <Route path="/AdminDashboard" element={<Dashboard/>}/>
      <Route path="/addproduct" element={<AddProduct/>}/>
      <Route path="/allProduct" element={<AllProductsPage/>}/>
      <Route path="/allorder" element={<AllOrdersPage/>}/>
      <Route path="/coupon" element={<Coupon/>}/>
      <Route path="/users" element={<Users/>}/>
      </Route>
     </Routes>
     <ToastContainer />
     </BrowserRouter>
 

    </div>
    
    </>
  )
}
export default App;