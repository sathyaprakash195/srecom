import React, { Component, useState, useContext } from 'react';
import axios from 'axios';
import { Userprovider } from './../../Contexts/Usercontext';
import { Link } from 'react-router-dom';
import './register.css'

import ReactLoading from 'react-loading';
const Register = () => {
    const usercontext = useContext(Userprovider);
   
    const [name, setname] = useState('');
    const [username, setusername] = useState('');
    const [password, setpassword] = useState('');
    const [email, setemail] = useState('');

    const loading = usercontext.loading;

    function formsubmit(event) {
        
        event.preventDefault();

        var user = {
            name: name,
            username: username,
            email: email,
            password: password
    
        }

       usercontext.register(user);
    

    }

   




    return (
        <div className="row justify-content-center">

            <div className='col-md-4 card shadow-sm p-3 mb-5 bg-white rounded' style={{ marginTop: '80px' }}>
                <h1 style={{ fontSize: '35px' }}>Register</h1>

                <div className="m-2 p-2">
                <div className='loading' style={{ display: loading }}>
                    <ReactLoading type='bars' color='#006666' />
                </div>
                    <form method="post" onSubmit={formsubmit}>

                        <input type="text"
                            className="form-control registerinput"
                            name="name"
                            placeholder="name"
                            value={name}
                            onChange={(e) => { setname(e.target.value) }}
                        />

                        <input type="text"
                            className="form-control registerinput"
                            name="username"
                            placeholder="username"
                            value={username}
                            onChange={(e) => { setusername(e.target.value) }}
                        />

                        <input type="text"
                            className="form-control registerinput"
                            name="email"
                            placeholder="email"
                            value={email}
                            onChange={(e) => { setemail(e.target.value) }}
                        />

                        <input type="password"
                            className="form-control registerinput"
                            name="password"
                            placeholder="password"
                            value={password}
                            onChange={(e) => { setpassword(e.target.value) }}
                        />

                      <input type="submit" className="btn btn-primary" style={{width:'100px'}} />

                        <Link to='/login' className="nav-link mt-2">
                            <li style={{ color: 'black', listStyleType: 'none' }}>Click Here To Login</li>
                        </Link>

                    </form>


                </div>



            </div>
        </div>

    )
}
export default Register;