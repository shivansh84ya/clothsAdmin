import "../Css/OrderPage.css"

const OrderPage = ()=>{
    return (
        <>
         
            <div className="orderdiv">
                <div>
                    <img src="https://assets.ajio.com/medias/sys_master/root/20240105/Sdrq/6597a20654c30e62769662b7/-78Wx98H-442532840-darkgreen-MODEL.jpg" />
                </div>
                <div id="Pro-detail">
                    <h3>Confirmed</h3>
                    <h3>Estimated Delivery : wed,17 Jan</h3>
                    <h3><b>Status : Dispatched</b></h3>
                    <button id="cancelbtn">Cancel</button>
                    <button>Order Detail</button>
                </div>
            </div>
        </>
    )
}

export default OrderPage;