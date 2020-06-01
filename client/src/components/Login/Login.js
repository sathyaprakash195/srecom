import React, { Component, useState, useContext, useEffect } from 'react';
import { Modal } from 'react-bootstrap';
import axios from 'axios';
import { useHistory, Link } from 'react-router-dom';
import Navbar from './../Navbar/Navbar';
import { Userprovider } from './../../Contexts/Usercontext';
import ReactLoading from 'react-loading';

import './login.css'
const Login = () => {



    const usercontext = useContext(Userprovider);
    
    const history = useHistory();
    const loading=usercontext.loading;

    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');


    useEffect(() => {
        if (localStorage.getItem('loggedin')) {
            history.push('/')
        }
    })

    function formsubmit (event) {
       
        event.preventDefault();

        

        var user = {

            email: email,
            password: password
    
        }

        usercontext.login(user);

        


    }

   





    function proceed() {
        history.push('/products');
        window.location.reload();
    }

    return (
        <div className="row justify-content-center m-2">

            <div className='col-md-4 card shadow-sm p-3 mb-5 bg-white rounded' style={{ marginTop: '150px' }}>

                <div className='loading' style={{ display: loading }}>
                    <ReactLoading type='bars' color='#006666' />
                </div>

                <h1 style={{ fontSize: '35px' }}>Login</h1>
                <div className="p-2">

                    <form onSubmit={formsubmit} method="post">

                        <input type="text"
                            className="form-control logininput"
                            name="email"
                            placeholder="email"
                            value={email}
                            required
                            onChange={(e) => { setemail(e.target.value) }}
                        />

                        <input type="password"
                            className="form-control logininput"
                            name="password"
                            placeholder="password"
                            value={password}
                            required
                            onChange={(e) => { setpassword(e.target.value) }}
                        />

                        <input type="submit" className="btn btn-primary" style={{width:'100px'}} />
                        <Link to='/register' className="nav-link mt-2">
                            <li style={{ color: 'black', listStyleType: 'none' }}>Click Here To Register</li>
                        </Link>

                    </form>






                </div>





            </div>


           



        </div>

    )
}
export default Login;