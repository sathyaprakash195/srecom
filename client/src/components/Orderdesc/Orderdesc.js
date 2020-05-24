import React, { useEffect } from 'react';
import './orderdesc.css'
function Orderdesc({ match }) {
    const order = JSON.parse(match.params.id)
    useEffect(() => {
        console.log(JSON.parse(match.params.id));
    })
    return (
        <div className="container">
            <div className="row">


                <div className="col-md-6">

                    <div className="m-2 p-2">
                        <h1 style={{ fontSize: '25px' }}>Items in your Order</h1>
                        <hr />
                        {order.items.map((item => (
                            <div className="text-left">
                                <p>{item.name}</p>
                                <p>Quantity : <b>{item.quantity}</b></p>
                                <p>Price   :{item.quantity} * {item.price} = <b>{item.quantity * item.price} /-</b></p>
                                <hr />
                            </div>
                        )))}

                    </div>
                </div>

                <div className="col-md-6">

                    <div className="text-right m-2 p-2">
                        <h1 style={{ fontSize: '25px' }}>Order Details</h1>
                        <hr />

                        <p>OrderId  :      <b>{order.orderid}</b></p>
                        <p>Total Amount :  <b>{order.price}</b></p>
                        <p>Date Of Order : <b>{order.date.substring(0, 10)}</b></p>
                        <p>Payment Mode :  <b>{order.paymentmode}</b></p>
                        <p>Payment Ref  :   <b>{order.paymentref}</b></p>
                    </div>

                    <div className="text-right m-2 p-2">
                        <h1 style={{ fontSize: '25px' }}>Shipping Details</h1>
                        <hr />

                        <p>Name  :      <b>{order.shipping.name}</b></p>
                        <p>Mobile Number :  <b>{order.shipping.mobile}</b></p>
                        <p>Pincode : <b>{order.shipping.pincode}</b></p>
                        <p>Address :  <b>{order.shipping.address}</b></p>
                        
                    </div>

                  


                </div>
            </div>
            
             <div className="row">
                 <div className="col-md-12 p-2 pb-5">
                 <div className="text-left">
                        <hr/>
                        <h1 style={{fontSize:'22px'}}>Replacement Conditions</h1>
                        <li>A free replacement cannot be created for an item which was returned and replaced once earlier.
                        </li>

                        <li>
                        If your item is not eligible for free replacement due to any reason, you can always return it for a refund.
                        </li>
                        <li>
                        If the item has missing parts or accessories, you may try to contact the manufacturer for assistance. Manufacturer contact information can usually be found on the item packaging or in the paperwork included with the item.
                        </li>


                        <button className="btn btn-success m-5" onClick={window.print()}>Download Receipt</button>
                    </div>
                 </div>
             </div>

        </div>
    );
}

export default Orderdesc;