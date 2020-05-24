import React, { Component, useState, useContext } from 'react';
import axios from 'axios';
import { Userprovider } from './../../Contexts/Usercontext';
import { Link } from 'react-router-dom';
import './register.css'
const Register = () => {
    const usercontext = useContext(Userprovider);
    const register = usercontext.register;
    const [name, setname] = useState('');
    const [username, setusername] = useState('');
    const [password, setpassword] = useState('');
    const [email, setemail] = useState('');



    var user = {
        name: name,
        username: username,
        email: email,
        password: password

    }





    return (
        <div className="row justify-content-center">

            <div className='col-md-4 card shadow-sm p-3 mb-5 bg-white rounded' style={{ marginTop: '80px' }}>
                <h1 style={{fontSize:'35px'}}>Register</h1>

                <div className="m-2 p-2">

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

                    <button onClick={() => register(user)} className='btn btn-primary mt-3'>Register</button>
                    <Link to='/login' className="nav-link mt-2">
                        <li style={{ color: 'black', listStyleType: 'none' }}>Click Here To Login</li>
                    </Link>

                </div>



            </div>
        </div>

    )
}
export default Register;