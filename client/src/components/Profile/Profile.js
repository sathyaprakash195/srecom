import React, { useContext, useEffect, useState } from 'react';
import BrowserHistory, { useHistory } from 'react-router-dom';
import { Userprovider } from './../../Contexts/Usercontext';

function Profile(props) {
    const [name, setname] = useState('');
    const usercontext = useContext(Userprovider);
    const getcurrentuser = usercontext.getcurrentuser;
    const user = usercontext.currentuser;
    const history=useHistory();
    useEffect(() => {
       
        if(localStorage.getItem('loggedin'))
        getcurrentuser();
        else
        history.push('/login')

    }, [])









    return (
        <div>

            <div className="row justify-content-center mt-5 m-2">

                <div className="col-md-6  text-left">

                    <h1>Hii , {user.name}</h1>

                    <p>Name : <b>{user.name}</b></p>
                    <p>Email : <b>{user.email}</b></p>
                    <p>Username : <b>{user.username}</b></p>


                </div>

            </div>

        </div>
    );
}

export default Profile;