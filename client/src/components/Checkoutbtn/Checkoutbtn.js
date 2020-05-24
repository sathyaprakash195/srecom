import React from 'react';
import { Link } from 'react-router-dom';

function Checkoutbtn(props) {
    return (
        <div>
            <Link to='/checkout'>
            <button className="btn btn-success">CheckOut</button>
            </Link>
           
        </div>
    );
}

export default Checkoutbtn;