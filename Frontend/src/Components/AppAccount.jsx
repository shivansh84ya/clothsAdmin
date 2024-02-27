import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./LayoutMyAc"
import ProfileInfo from "./ProfileInfo";
import Address from "./Myaddress";
import OrderPage from "./OrderPage";
import ProfilePayment from "./ProfilePayment";


const App = ()=>{
    return (
        <>
          <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                  <Route index element={<ProfileInfo/>}/>
                  <Route path="/profileinfo" element={<ProfileInfo/>}/>
                  <Route path="/address" element={<Address/>}/>
                  <Route path="/order" element={<OrderPage/>}/>
                  <Route path="/payment" element={<ProfilePayment/>}/>
                </Route>
            </Routes>
          </BrowserRouter>
        </>
    ) 
}

export default App