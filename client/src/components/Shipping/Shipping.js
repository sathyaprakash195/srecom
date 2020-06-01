import React, { useState,useContext} from 'react';
import './shipping.css'
import TextField from '@material-ui/core/TextField'
import { TextareaAutosize } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { Orderprovider } from './../../Contexts/Ordercontext';
import { Cartprovider } from './../../Contexts/Cartcontext';
import ReactLoading from 'react-loading';
function Shipping(props) {
    const ordercontext=useContext(Orderprovider);
    const cartcontext=useContext(Cartprovider);
    const placeorder=ordercontext.placeorder;
    const history=useHistory();
    const loading=ordercontext.loading;
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
   
    function validate(e) {
        e.preventDefault();
        placeorder(cartcontext.cartlist,cartcontext.totalprice,shipping)
    }


    return (
        <div>
            

            <div className="col-md-12 p-2">

               <div className='loading' style={{ display: loading }}>
                    <ReactLoading type='bars' color='#006666' />
                </div>


            <h1 style={{fontSize:'30px'}} className="mt-5">Shipping Details</h1>
      
              <form onSubmit={validate}>
              <input type="text"
                    className="form-control sinput"
                    placeholder="Name"
                    required
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
                    required
                    onChange={(e) => { setpincode(e.target.value) }}
                />

                <textarea className="form-control" 
                rows={3} 
                required
                onChange={(e)=>{setaddress(e.target.value)}} />

                <select className="custom-select my-1 mr-sm-2 sinput" required>
                  <option selected value="cod">Select Payment Method</option>
                  <option value="db">DebitCard</option>
                  <option value="cr">Credit Card</option>
                  <option value="upi">Upi</option>
                </select>
               
               <input type="submit" value="Place Order" className="btn btn-success mt-2" style={{width:'100px',float:'right'}}/>
              
              </form>
            </div>
        </div>
    );
}

export default Shipping;

