import React, { useContext } from 'react';
import Products from './../Products/Products';
import { Productsprovider } from './../../Contexts/Productscontext';
function Filter() {
    const contextType=useContext(Productsprovider)
    const filterbycategory=contextType.filterbycategory;
    const searchbykey=contextType.searchbykey;
    const filterbyprice=contextType.filterbyprice
    return (
        <div className="container mt-3 mb-3">
           
            <div className="row">

                <div className="col-md-4">
                   
                    <select className="custom-select my-1 mr-sm-2" onChange={(e)=>filterbycategory(e.target.value)}>
                      <option selected value="all">All</option>
                      <option value="mobiles">Mobiles</option>
                      <option value="fashion">Fashion</option>
                      <option value="electronics">Electronics</option>
                    </select>
                </div>

                <div className="col-md-4">
                <input type="text" className="form-control mb-2 mr-sm-2" 
                placeholder="search items"
                onChange={(e)=>{searchbykey(e.target.value)}}
                />
                </div>

                <div className="col-md-4">
                   
                    <select className="custom-select my-1 mr-sm-2" onChange={(e)=>filterbyprice(e.target.value)}>
                      <option selected value="all">Most Selled</option>
                      <option value="hl">High To Low</option>
                      <option value="lh">Low To High</option>
                    
                    </select>
                </div>

            </div>

        </div>
    );
}

export default Filter;