import React, { Component, createContext, useContext } from 'react';
import { Cartprovider } from './Cartcontext';
import axios from 'axios';
import  swal  from 'sweetalert';
export const Orderprovider = createContext();
const shortid = require('shortid');



class Ordercontext extends Component {


    constructor(props) {
        super(props);
        this.state = {

            placeorder: this.placeorder,
            userorders: [],
            getuserorders: this.getuserorders,
            getallorders:this.getallorders,
            authconfig: {
                headers: {
                    'authorization': localStorage.getItem('loggedin')
                }
            },
            orderslist:[]


        }
    }





    placeorder = (cartlist, totalprice, shipping) => {

        shipping.mobile = Number(shipping.mobile)

        var items = [];

        for (var i = 0; i < cartlist.length; i++) {
            var item = {
                name: cartlist[i].product.name,
                price: cartlist[i].product.price,
                itemid: cartlist[i].product.id,
                quantity: cartlist[i].quantity,
            }

            items.push(item)

        }


        const order = {
            orderid: shortid.generate(),
            useremail: localStorage.getItem('useremail'),
            items: items,
            paymentref: shortid.generate(),
            price: totalprice,
            paymentmode: 'COD',
            date: Date.now(),
            shipping: shipping
        }

        console.log(order);

        axios.post('api/order/placeorder', order,this.state.authconfig).
            then((res) => {
                console.log(res);
                swal(res.data)
            }).catch((err)=>{
                if(err.response.status)
                {
                 swal('Please login to place order').then((ok)=>{
                     if(ok)
                     {
                         window.location='/login'
                     }
                 })
                }
            })
    }

    getuserorders = (useremail) => {

        axios.post('/api/order/getordersbyemail', { useremail: useremail },this.state.authconfig).
         then((res) => {
                console.log(res);
                this.setState({ userorders: res.data },()=>{console.log(this.state.userorders);})
            }).
        catch((err)=>{
            if(err.response.status)
            {
                window.location="/login"
            }
        })


    }

    getallorders=()=>{
        axios.post('/api/order/getorders').
        then((res)=>{
             this.setState({orderslist:res.data})
           
        }).
        catch((err)=>{
            console.log(err);
        })
    }

    render() {
        return (

            <Orderprovider.Provider value={{ ...this.state }}>
                {this.props.children}
            </Orderprovider.Provider>

        );
    }
}
export default Ordercontext;