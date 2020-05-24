import React from 'react';
import './admin.css'
import { NavLink } from 'react-router-dom';
function AdminNav(props) {

    
    function logout () {
        localStorage.removeItem('isadmin')
        window.location="/"
    }


    return (
        <div>
            
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <NavLink className="navbar-brand" to="/#">
                SR Ecom <p style={{fontSize:'10px',display:'inline'}}>Admin</p>
              </NavLink>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                      <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                          <NavLink className="nav-link" to="/userslist">
                            Users
                          </NavLink>
                        </li>
                        <li className="nav-item">
                          <NavLink className="nav-link" to="/orderslist">
                            Orders
                          </NavLink>
                        </li>
                        <li className="nav-item">
                          <NavLink className="nav-link" to="/productslist">
                            Items
                          </NavLink>
                        </li>
                        <li className="nav-link" onClick={logout}>
                          LogOut
                        </li>
                      </ul>
                    
                    </div>
                  </nav>

        </div>
    );
}

export default AdminNav;