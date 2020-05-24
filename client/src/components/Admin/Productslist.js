import React ,{useContext,useEffect} from 'react';
import { Productsprovider } from './../../Contexts/Productscontext';
import AdminNav from './AdminNav';
function Productslist(props) {
    const productcontext=useContext(Productsprovider)
    
    const products=productcontext.products;
    
    useEffect(()=>{
    
    },[])
    return (
        <div>
            <AdminNav />
        <div className="row m-2">
        <div className="col-md-12">
          <h1 className="mt-3 mb-3 text-left">Productslist</h1>

        <button className="btn btn-info m-2" style={{float:'right'}}>Add New Product</button>

          <div className="table-responsive">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">S.No</th>
                  <th scope="col">Name</th>
                  <th scope="col">Product Id</th>
                  <th scope="col">Category</th>
                  <th scope="col">Price</th>
             
               
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>

                {products.map((product,index) => {


                  return <tr className="order">
                    <td><b>{index+1}</b></td>
                    <td>{product.name}</td>
                    <td>{product.id}</td>
                    <td>{product.category}</td>
                    <td>{product.price}</td>
                
                    <td><button className="btn btn-success m-1">View</button>
                    <button className="btn btn-danger m-1">Delete</button></td>
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

export default Productslist;