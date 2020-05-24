import React, { useContext,useState, useEffect } from 'react';
import { Cartprovider } from './../../Contexts/Cartcontext';
import './cart.css'
import { Link } from 'react-router-dom';
import Checkoutbtn from './../Checkoutbtn/Checkoutbtn';
function Cart(props) {
  const cartprovider = useContext(Cartprovider)
  const mycart = cartprovider.cartlist;
  const totalprice=cartprovider.totalprice;
  const [subtotalprice , setsubtotalprice]=useState(0);
  const addtocart=cartprovider.addtocart;
  const removefromcart=cartprovider.removefromcart;
  
 

 

 

  return (
    <div>

      <h1 className="carttitle p-2">{mycart.length} products in your cart</h1>
     <div className="row m-2">
       
       <div className="col-md-12">

   

        <div className="table-responsive table-bordered">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Item</th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
              <th scope="col">Total price</th>
            </tr>
          </thead>
          <tbody>
            {
              mycart.map((item) => {
                return <tr>
                  <td>{item.product.name}</td>
                  <td>{item.product.price}</td>
                  <td>
                  <i className="fas fa-plus-circle fa-1x m-1" onClick={()=>addtocart(item.product)}></i>
                    {item.quantity}
                    <i className="fas fa-minus-circle fa-1x m-1" onClick={()=>removefromcart(item.product)}></i>
                  </td>

                    <td className="price">{Number(item.product.price * item.quantity)}</td>

                </tr>
              })
            }

          </tbody>
        </table>
        
        <p>Sub Total = {totalprice}</p>

      </div>
      </div>
     </div>
     
     
  
    </div>
  );
}

export default Cart;