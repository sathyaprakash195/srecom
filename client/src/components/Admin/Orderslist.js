import React ,{useContext,useEffect} from 'react';
import { Orderprovider } from './../../Contexts/Ordercontext';
import AdminNav from './AdminNav';
function Orderslist(props) {
    const ordercontext=useContext(Orderprovider)
    
    const orders=ordercontext.orderslist;
    
    useEffect(()=>{
      ordercontext.getallorders()
    },[])
    return (
        <div>
            <AdminNav />
             <div className="row m-2">
        <div className="col-md-12">
          <h1 className="mt-3 mb-3 text-left">Orderslist</h1>
          <div className="table-responsive">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">S.No</th>
                  <th scope="col">Email</th>
                  <th scope="col">Order Id</th>
                  <th scope="col">Price</th>
                  <th scope="col">Date</th>
               
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>

                {orders.map((order,index) => {


                  return <tr className="order">
                    <td><b>{index+1}</b></td>
                    <td>{order.useremail}</td>
                    <td>{order.orderid}</td>
                    <td>{order.price}</td>
                    <td>{order.date.substring(0, 10)}</td>
                    <td><button className="btn btn-success">View</button></td>
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

export default Orderslist;