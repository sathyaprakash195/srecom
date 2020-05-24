import React, { useState,useContext} from 'react';
import './shipping.css'
import TextField from '@material-ui/core/TextField'
import { TextareaAutosize } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { Orderprovider } from './../../Contexts/Ordercontext';
import { Cartprovider } from './../../Contexts/Cartcontext';
function Shipping(props) {
    const ordercontext=useContext(Orderprovider);
    const cartcontext=useContext(Cartprovider);
    const placeorder=ordercontext.placeorder;
    const history=useHistory();
    const [name, setname] = useState();
    const [mobile, setmobile] = useState();
    const [pincode, setpincode] = useState();
    const [address, setaddress] = useState();

    const shipping={
        name:name,
        mobile:mobile,
        pincode:pincode,
        address:address
    }
   


    return (
        <div>
            

            <div className="col-md-12 p-2">
            <h1 style={{fontSize:'30px'}} className="mt-5">Shipping Details</h1>
      
                <input type="text"
                    className="form-control sinput"
                    placeholder="Name"
                    onChange={(e) => { setname(e.target.value) }}
                />

                <input type="text"
                    className="form-control sinput"
                    placeholder="Mobile Number"
                    onChange={(e) => { setmobile(e.target.value) }}
                />

                <input type="text"
                    className="form-control sinput"
                    placeholder="Pincode"
                    onChange={(e) => { setpincode(e.target.value) }}
                />

                <textarea className="form-control" 
                rows={3} 
                onChange={(e)=>{setaddress(e.target.value)}} />

                <select className="custom-select my-1 mr-sm-2 sinput">
                  <option selected value="cod">Select Payment Method</option>
                  <option value="db">DebitCard</option>
                  <option value="cr">Credit Card</option>
                  <option value="upi">Upi</option>
                </select>

               <button className="btn btn-primary m-2" 
               style={{float:'right'}}
               onClick={()=>placeorder(cartcontext.cartlist,cartcontext.totalprice,shipping)}
               >Place Order</button>
            </div>
        </div>
    );
}

export default Shipping;

