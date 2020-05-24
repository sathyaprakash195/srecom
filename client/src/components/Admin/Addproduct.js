import React, { useState,useContext } from 'react';
import './admin.css'
import shortid from 'shortid'
import { Productsprovider } from './../../Contexts/Productscontext';

function Addproduct(props) {
    
    const productscontext=useContext(Productsprovider);
    const addproduct=productscontext.addproduct;


    const [name, setname] = useState();
    const [price, setprice] = useState();
    const [category, setcategory] = useState();
    const [imageurl, setimageurl] = useState();
    const [rating, setrating] = useState();
    const [description, setdescription] = useState();
    const [id, setid] = useState();


    function add_product(event) {

        event.preventDefault();
        const product = {
            id: shortid.generate(),
            name: name,
            imageurl: imageurl,
            description: description,
            price: price,
            category: category,
            rating: rating,
            buyers: 0
        }

        addproduct(product);

    }



    return (
        <div className="container mt-5">
            <div className="row">


                <div className="col-md-12">

                    <form onSubmit={add_product}>

                        <input type="text"
                            className="form-control mb-2 mr-sm-2"
                            required
                            value={name}
                            onChange={(e) => { setname(e.target.value) }}
                            placeholder="Name" />

                        <textarea
                            className="form-control mb-2 mr-sm-2"
                            value={description}
                            onChange={(e) => { setdescription(e.target.value) }}
                            placeholder="Description" />

                        <input type="text"
                            className="form-control mb-2 mr-sm-2"
                            required
                            value={imageurl}
                            onChange={(e) => { setimageurl(e.target.value) }}
                            placeholder="Imageurl" />

                        <input type="text"
                            className="form-control mb-2 mr-sm-2"
                            required
                            value={price}
                            onChange={(e) => { setprice(e.target.value) }}
                            placeholder="Price" />

                        <input type="text"
                            className="form-control mb-2 mr-sm-2"
                            required
                            value={rating}
                            onChange={(e) => { setrating(e.target.value) }}
                            placeholder="Rating" />

                        <label className="mt-3" style={{ float: 'left' }}>Category</label>
                        <select className="custom-select my-1 mr-sm-2" onChange={(e) => { setcategory(e.target.value) }}>
                            <option selected value="mobiles">Mobiles</option>
                            <option value="electronics">Electronics</option>
                            <option value="fashion">Fashion</option>
                        </select>


                        <input type="submit" className="btn btn-primary" style={{ width: '150px', float: 'left' }} />

                    </form>

                </div>


            </div>
        </div>
    );
}

export default Addproduct;