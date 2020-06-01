import React, { useContext,useState,useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import jquery from 'jquery';
import 'bootstrap/dist/js/bootstrap.min'
import { NavLink, Route, Link } from 'react-router-dom';
import './navbar.css'
import Login from './../Login/Login';
import Register from './../Register/Register';
import { Cartprovider } from './../../Contexts/Cartcontext';
function Navbar(props) {

  const cartcontext = useContext(Cartprovider);
  const cartlength = cartcontext.cartlist.length;
  
  const[display,setdisplay]=useState('block');

  useEffect(()=>{

    if(localStorage.getItem('isadmin'))
    {
      setdisplay('none')
    }

  },[])





  function logout() {
    localStorage.removeItem('loggedin');
    window.location.reload();
  }

  return (
    <div style={{display:`${display}`}}>

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <NavLink className="navbar-brand" to="/#">
          SR Ecom
              </NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarText">

          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/#">
                Home
                          </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/products">
                ShopNow
                          </NavLink>
            </li>
          

          </ul>


          {
            (() => {
              if (localStorage.getItem('loggedin')) {
                return (

                  <div class="dropdown">
                    <li class="dropdown-toggle nav-link" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      My Account
                  </li>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                      <a class="dropdown-item" href="/orders">Orders</a>
                      <a class="dropdown-item" href="profile">Profile</a>
                      <a class="dropdown-item" onClick={logout}>LogOut</a>
                    </div>
                  </div>
                )
              }

              else {
                return (
                  <div className="navbar-nav mr">
                    <NavLink className="nav-link" to="/login">Login</NavLink>
                    <NavLink className="nav-link" to="/register">Register</NavLink>
                  </div>

                )

              }
            }
            )()}
          <Link to='/checkout'>
            <i class="fas fa-cart-plus ml-2" style={{ color: 'yellow' }}> {cartlength} </i>
          </Link>
        </div>








      </nav>


    </div>
  );
}

export default Navbar;