import React, { Component, useState ,useContext} from 'react';
import { Modal } from 'react-bootstrap';
import axios from 'axios';
import { useHistory, Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import { Userprovider } from '../../Contexts/Usercontext';
const Adminlogin = () => {

    const history = useHistory();
    const [show, setShow] = useState(false);

    const [adminid, setadminid] = useState('');
    const [password, setpassword] = useState('');

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    
        var user = {

            adminid: adminid,
            password: password

        }

        function login() {
            
            var user = {

                adminid: adminid,
                password: password
    
            }

            axios.post('/api/admin/login',user)
            .then((res)=>{
                if(res.data=="1")
                {
                    localStorage.setItem('isadmin',1)
                    window.location="/userslist"
                }
            })
            .catch((err)=>{
                alert('some thing went wrong');
            })
            

        }

       


    function proceed () {
        history.push('/products');
        window.location.reload();
    }

    return (
        <div className="row justify-content-center m-2">

            <div className='col-md-4 card shadow-sm p-3 mb-5 bg-white rounded' style={{marginTop:'150px'}}>
              
                <h1 style={{fontSize:'35px'}}>Admin Login</h1>
                <div className="p-2">
              


                    <input type="text"
                        className="form-control logininput"
                        name="adminid"
                        placeholder="adminid"
                        value={adminid}
                        onChange={(e) => { setadminid(e.target.value) }}
                    />

                    <input type="password"
                        className="form-control logininput"
                        name="password"
                        placeholder="password"
                        value={password}
                        onChange={(e) => { setpassword(e.target.value) }}
                    />

       
                    <button onClick={login} className='btn btn-primary mt-3'>Login</button>
                    
                
                </div>

               



            </div>


            <Modal show={show} onHide={handleClose}>
                <Modal.Header closebutton>
                    <Modal.Title>Congratulations</Modal.Title>
                </Modal.Header>
                <Modal.Body>Login Successfull</Modal.Body>
                <Modal.Footer>
                    <button className="btn btn-primary" onClick={proceed}>
                        Ok
                   </button>
                </Modal.Footer>
            </Modal>



        </div>

    )
}
export default Adminlogin;