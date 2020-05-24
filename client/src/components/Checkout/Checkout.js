import React ,{useContext}from 'react';
import Cart from './../Cart/Cart';
import Shipping from '../Shipping/Shipping';
import { Orderprovider } from './../../Contexts/Ordercontext';
function Checkout(props) {
    const ordercontext=useContext(Orderprovider);
    const name=ordercontext.name;
    return (
        <div>
           
            

            
            <div className="row">

                <div className="col-md-6 my-auto">
                    <Cart/>
                </div>

                <div className="col-md-6">
                    <Shipping/>
                </div>
            </div>
           

            

        </div>
    );
}

export default Checkout;