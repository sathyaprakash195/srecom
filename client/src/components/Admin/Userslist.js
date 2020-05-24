import React ,{useContext,useEffect} from 'react';
import { Userprovider } from './../../Contexts/Usercontext';
import AdminNav from './AdminNav';
function Userslist(props) {
    const usercontext=useContext(Userprovider)
    
    const users=usercontext.userslist;
    const deleteuser=usercontext.deleteuser;
    
    useEffect(()=>{
      usercontext.getallusers()
    },[])
    return (
        <div>
            <AdminNav />
        <div className="row m-2">
        <div className="col-md-12">
          <h1 className="text-left mb-3 mt-3">Userslist</h1>
          <div className="table-responsive table-bordered">
            <table className="table table-bUsered">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Username</th>
                  <th scope="col">Verified</th>
                  <th scope="col">Actions</th>
              
                </tr>
              </thead>
              <tbody>

                {users.map((user,index) => {


                  return <tr className="User">
                    <td>{index+1}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.username}</td>

                    {
                        (()=>{
                            if(user.isVerified)
                            {
                                return <td>Yes</td>
                            }
                            else
                            {
                                return <td>No</td>
                            }
                        })()
                    }

                    
                    <td><button className="btn btn-danger" onClick={()=>{deleteuser(user.email)}}>Delete</button></td>
                   
                  </tr>


                })}

              </tbody>
            </table>
          </div>


        </div>
      </div>
        </div>
    );
}

export default Userslist;