import React , {useState,useEffect,useContext} from 'react';
import './singleproduct.css';
import axios from 'axios';
import { Cartprovider } from './../../Contexts/Cartcontext';
import { Link , useHistory } from 'react-router-dom';
function Singleproduct({match}) {
    
    const cartcontext=useContext(Cartprovider);

    const[product , setproduct]=useState([]);
    const addtocart=cartcontext.addtocart;

    const history=useHistory();


    useEffect(()=>{
        
        axios.post('/api/products/getproductbyid',{id:match.params.id}).then(
            res=>{
                console.log(res.data);
                setproduct(res.data[0])      
            }
        )
    },[])


    function addtocart_buy (product) {

        addtocart(product);
        
        history.push('/checkout')
        
    }


    return (
        <div>

              <div className="row mt-5 p-2">

                    <div className="col-md-6 text-center">

                         <img src={product.imageurl} className="imgfluid pimgs"/>

                    </div>

                    <div className="col-md-6 my-auto">

                       <p className="pnames">{product.name}</p>
                       <p className="pdescs">{product.description}</p>
                       <p className="prating">Reating : {product.rating}</p>
                    
                       <button className="btn btn-primary pbuynow" onClick={()=>addtocart_buy(product)}>Buy Now</button>
                      
                       <button className="btn btn-secondary paddtocart"
                        onClick={()=>addtocart(product)}
                       >Add To Cart</button>

                    </div>

              </div>

              <hr/>        
    
        </div>
    );
}

export default Singleproduct;