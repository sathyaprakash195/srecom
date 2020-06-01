import React,{useEffect} from 'react';
import Banner from '../Banner/Banner'
import { useHistory } from 'react-router-dom';
function Homepage(props) {
    const history=useHistory();

    useEffect(()=>{
        if(localStorage.getItem('isadmin'))
        {
            history.push('/adminhome');
        }
    },[])

    

    return (
        <div>
            <Banner />

             <div className="row">

                    <div className="col-md-4">

                       

                    </div>

             </div>


        </div>
    );
}

export default Homepage;