import "./admin.css"
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Coupon = () =>{


        const [saved, setsaved] = useState()
          const [name, setName] = useState({
            id:"",
            range:"",
            code:"",
            discription:"",
            valadity:"",
          });
        
        
          const HandelNameChange = (event) => {
        
            setName((prev)=>{
              return{
                ...prev,
                [event.target.name]:event.target.value
              }
            })
            console.log(name)
         
          }

    return (
        <>
          <center><h1 id="heading-coupon">Add Coupon Page</h1></center>


<div className="productcontainer-coupon">

          <label className="label-coupon">Add Coupon</label>  :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <input className="coupon-input" type="text" name="id" value={name.id} onChange={HandelNameChange} /><br/>
          <label className="label-coupon">Discount Range</label> :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <input type="text" name="range" className="coupon-input" value={name.range} onChange={HandelNameChange}/><br />
          <label className="label-coupon">Coupon Code</label> :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" className="coupon-input" name="code" value={name.code} onChange={HandelNameChange} /><br />
          <label className="label-coupon">Discription</label> :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" className="coupon-input" name="discription" value={name.discription} onChange={HandelNameChange} /><br />
          <label className="label-coupon">Validity</label> :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" className="coupon-input" name="valadity" value={name.valadity} onChange={HandelNameChange} /><br />
          <button  id="addbtncoupon" onClick={()=>{setsaved(true)}}>Generate Coupon </button>
          <ToastContainer />
                </div>

            

          {saved &&<div className="saved-coupon">
              <p> <b>Couton ID &nbsp;:&nbsp;</b>{name.id}</p>
              <p> <b>Discount Range&nbsp;:&nbsp;</b>{name.range}</p>
              <p> <b>Coupon Code&nbsp;:&nbsp;</b>{name.code}</p>
              <p> <b>Discription&nbsp;:&nbsp;</b>{name.discription}</p>
              <p> <b>Validity&nbsp;:&nbsp;</b>{name.valadity}</p>
              {/* <p> <b>Address&nbsp;:&nbsp;</b>{name.Flatno} {name.Area} {name.Landmark} {name.city} {name.State} {name.Pincode}</p> */}
          </div>}

        </>
    )
}

export default Coupon