import React,{useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,NavLink ,Link,Route, Switch,useHistory} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import Homepage from './components/Homepage/Homepage';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Products from './components/Products/Products';
import Productscontext from './Contexts/Productscontext';
import Cartcontext from './Contexts/Cartcontext';
import Test from './components/Test'
import Singleproduct from './components/Singleproduct/Singleproduct';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';
import Ordercontext from './Contexts/Ordercontext';
import Usercontext from './Contexts/Usercontext'
import Orders from './components/Orders/Orders';
import Orderdesc from './components/Orderdesc/Orderdesc';
import Adminlogin from './components/Admin/Adminlogin';
import Adminhome from './components/Admin/Adminhome';
import Userslist from './components/Admin/Userslist';
import Orderslist from './components/Admin/Orderslist';
import Productslist from './components/Admin/Productslist';
import Addproduct from './components/Admin/Addproduct';
import AdminNav from './components/Admin/AdminNav';
import Profile from './components/Profile/Profile';
import Footer from './components/Footer/Footer';
function App() {

  

  return (
    <div className="App">
        <Usercontext>
        <Productscontext>
        <Ordercontext>
        <Cartcontext>
        
        <Router>
        
         <Navbar/>

      
              

               <Switch>
                  <Route path='/' component={Homepage} exact />
                  <Route path='/login' component={Login} exact />
                  <Route path='/register' component={Register} exact />
                  <Route path='/products' component={Products} exact />
                  <Route path='/singleproduct/:id' component={Singleproduct} exact />
                  <Route path='/cart' component={Cart} exact />
                  <Route path='/checkout' component={Checkout} exact />
                  <Route path='/orders' component={Orders} exact />
                  <Route path='/orderdesc/:id' component={Orderdesc} exact />
                  <Route path='/profile' component={Profile} exact />


                  {/* Admin routes */}
                   <Route path='/adminlogin' component={Adminlogin} exact />

                
                   <Route path='/adminhome' component={Adminhome} exact />
                   <Route path='/userslist' strict exact component={Userslist} />
                   <Route path='/orderslist' strict exact component={Orderslist} />
                   <Route path='/productslist' strict exact component={Productslist} />
                   <Route path='/addproduct' strict exact component={Addproduct} />


              </Switch>

              
             
             
         </Router>
         </Cartcontext>
         </Ordercontext>
        </Productscontext>
        </Usercontext>
      
        
    </div>
  );
}

export default App;
