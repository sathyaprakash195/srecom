import React from 'react';
import './footer.css';
import { NavLink } from 'react-router-dom';
function Footer(props) {
    return (
        <div className="ftr">
            <footer>
                <div className="row justify-content-center footer">
                    <div className="col-md-12">
                       
                    <NavLink className="fnav-link" to="/login">About</NavLink>
                    <NavLink className="fnav-link" to="/register">Contact Us</NavLink>
                    <NavLink className="fnav-link" to="/register">Carrers</NavLink>

                    <hr/>
                    </div>
                    <div className="col-md-7">
                    <p className="text-center">SR Ecom is an ecommerce web application developed using Node Js ,
                     Mongo DB ,Express Js ,React Js.Designed and Developed By K.Sathyaprakash Reddy and hosted in Heroku.</p>
                    </div>

                    <div className="col-md-6">
                        <i class="fa fa-facebook" aria-hidden="true"></i>
                        <i class="fa fa-instagram" aria-hidden="true"></i>
                        <i class="fa fa-google-plus" aria-hidden="true"></i>
                        <i class="fa fa-whatsapp" aria-hidden="true"></i>
                    </div>
                   

                </div>
            </footer>
        </div>
    );
}

export default Footer;