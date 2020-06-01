import React, { useEffect,useState,useContext } from 'react';
import Navbar from './../Navbar/Navbar';
import axios from 'axios';
import {useHistory, Link} from 'react-router-dom';
import './products.css'

import Filter from './../Filter/Filter';

import { Productsprovider } from './../../Contexts/Productscontext';
import { Cartprovider } from './../../Contexts/Cartcontext';
import Footer from './../Footer/Footer';
function Products(props) {

    const productscontext=useContext(Productsprovider)
    const products=productscontext.products;
    const cartcontext=useContext(Cartprovider)
    const addtocart=cartcontext.addtocart;
    const history=useHistory();
    
    

     return (
        <div>
           
            <Filter />
             
            <div className="container">

                <div className="row">

                    {products.map((product => {
                        return <div className="col-md-4">
                              
                             <div className="m-2 p-1">
                              <Link to={`/singleproduct/${product.id}`} style={{display:'block'}} className="productlink">
                                 <h1 className="productname">{product.name}</h1>
                                 <img src={product.imageurl} className="productimg img-fluid"/>
                                 <br/>
                                 <p className="productprice">
                                     {product.price} /- Only
                                 </p>
                              </Link>
                                 <button className="btn btn-secondary addtocart"
                                 onClick={(e)=>addtocart(product)}
                                 >Add To Cart</button>
                             </div>
                             

                        </div>
                    }))}

                </div>

            </div>
            <Footer/>
        </div>


    );
}

export default Products;

