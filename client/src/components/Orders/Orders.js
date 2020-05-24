import React, { useContext, useEffect } from 'react';
import { Orderprovider } from './../../Contexts/Ordercontext';
import './orders.css'
import { Link,useHistory } from 'react-router-dom';
function Order(props) {

  const history=useHistory();
  const ordercontext = useContext(Orderprovider);
  const getuserorders = ordercontext.getuserorders;

  const userorders = ordercontext.userorders;
  useEffect(() => {
    getuserorders(localStorage.getItem('useremail'))
  }, [])

  function goto_orderdesc(order) {
     history.push('/orderdesc/'+JSON.stringify(order))    
  }

  return (
    <div className="container">

      <h1>My Orders</h1>

      <hr />

      <div className="row m-2">
        <div className="col-md-12">

          <div className="table-responsive">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">Order Id</th>
                  <th scope="col">Total Items</th>
                  <th scope="col">Price</th>
                  <th scope="col">Date</th>
                  <th scope="col">Payment Mode</th>
                  <th scope="col">Payment Ref</th>
                </tr>
              </thead>
              <tbody>

                {userorders.map((order) => {


                  return <tr className="order" onClick={()=>goto_orderdesc(order)}>
                    <td>{order.orderid}</td>
                    <td>{order.items.length}</td>
                    <td>{order.price}</td>
                    <td>{order.date.substring(0, 10)}</td>
                    <td>{order.paymentmode}</td>
                    <td>{order.paymentref}</td>
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

export default Order;