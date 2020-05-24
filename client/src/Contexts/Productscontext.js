import React, { Component,createContext } from 'react';
import { data } from './../data';
import axios from 'axios'
import Addproduct from './../components/Admin/Addproduct';
export const Productsprovider=createContext();
class Productscontext extends React.Component {
    constructor(props){
        super(props);
        this.state = { 
            products:[],
            sortedproducts:[],
            name:'',
            filterbycategory:this.filterbycategory,
            searchbykey:this.searchbykey,
            filterbyprice:this.filterbyprice,
           addproduct:this.addproduct
         }       
    }
   
    componentDidMount() {
               
        axios.get('/api/products/getproducts').then(
            res=>{
                this.setState({products:res.data})
                this.setState({sortedproducts:res.data})
            }
        )
     }


     searchbykey=(key)=>{
        const newlist=this.state.sortedproducts.filter(product=>{return product.name.toLowerCase().includes(key)})
        this.setState({products:newlist})
     }
     
 
     filterbycategory=(e)=>{
      
        if(e=="all")
        {
            this.setState({products:this.state.sortedproducts})
        }
        else{
            this.setState({name:e})
            const newlist=this.state.sortedproducts.filter(product=>{return product.category.includes(e)})
            this.setState({products:newlist})
        }
    
      
  
   
     }

     filterbyprice=(e)=>{
        if(e=="all"){
            axios.get('/api/getproducts').then(
                res=>{
                    this.setState({products:res.data})
                }
            )
           
         }
         else if(e=="lh")
         {
             this.state.products.sort(function(a,b) {
                 return a.price-b.price;
             })
             this.setState({products:this.state.products})
         }
         else
         {
            this.state.products.sort(function(a,b) {
                return -a.price+b.price;
            })
            this.setState({products:this.state.products})
         }
         
     }

     addproduct=(product)=>{
        axios.post('/api/products/addproduct',product)
        .then((res)=>{
            console.log(res);
        })
        .catch((err)=>{
            console.log(err);
        })
        
     }

     
     
     
    render() { 
        return ( 

           <Productsprovider.Provider value={{...this.state}}>
               {this.props.children}
           </Productsprovider.Provider>

         );
    }
}
 
export default Productscontext;