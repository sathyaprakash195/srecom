import React , {useEffect} from 'react';
import './admin.css'
import AdminNav from './AdminNav';
import {BrowserRouter as Router,NavLink ,Link,Route, Switch} from 'react-router-dom'
import Userslist from './Userslist';
import Productslist from './Productslist';
import Orderslist from './Orderslist'
function Adminhome(props) {

    useEffect(()=>{
        localStorage.removeItem('isloggedin');
    })

    function logout () {
        localStorage.removeItem('isadmin')
        window.location="/"
    }

    return (
        <div>
            <Router>


          

              <Switch>
            
                   <Route path='/userslist' strict exact component={Userslist} />
                   <Route path='/orderslist' strict exact component={Orderslist} />
                   <Route path='/productslist' strict exact component={Productslist} />
                   

              </Switch>



















            </Router>
           
           

             

            
        </div>
    );
}

export default Adminhome;