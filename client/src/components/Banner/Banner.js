import React from 'react';
import { NavLink, Route, Link } from 'react-router-dom';

import './banner.css'
function Banner(props) {
    return (
        <div>
            <div className="row intro">
                
                <div className="col-md-12">
                    <h1 className="title">SR Ecom</h1>
                    <p className="quote">“You can always find something you want.”</p>

                    <Link to="/products" className="btn getstarted">Get Started</Link>
                    <button className="btn aboutus">About Us</button>

                </div>
            </div>
        </div>
    );
}

export default Banner;