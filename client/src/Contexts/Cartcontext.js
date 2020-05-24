import React, { Component,createContext } from 'react';
export const Cartprovider=createContext();
class Cartcontext extends Component {
    constructor(props)
    {
        super(props);
        this.state = { 
        cartlist:[],
        addtocart:this.addtocart,
        removefromcart:this.removefromcart,
        totalprice:0
     }
    }
     

    
     componentDidMount() {
          
          if(!localStorage.getItem('mycart'))
          {
              localStorage.setItem('mycart',JSON.stringify(this.state.cartlist))
              
          }
          else{
            this.setState({cartlist:JSON.parse(localStorage.getItem('mycart'))},()=>{
                this.updatetotalprice();
            })  
            
          }
         
          
     }

     addtocart=(product)=>{      
        var quantity=1;
        
        const duplicatelist=this.state.cartlist.filter(cart=>cart.product.id==product.id);
        if(duplicatelist.length)
        {
           const index=this.state.cartlist.findIndex(item=>item.product.id == product.id);
           this.state.cartlist[index].quantity=this.state.cartlist[index].quantity+1;
           this.setState({cartlist:this.state.cartlist},()=>
           {
               localStorage.setItem('mycart' , JSON.stringify(this.state.cartlist))
               this.updatetotalprice();
            });
        }
        else
        {
            const newproduct={
                product:product,
                quantity:quantity
            }
            this.setState({
                cartlist: [newproduct,...this.state.cartlist]
            } ,()=>
            {
                localStorage.setItem('mycart' , JSON.stringify(this.state.cartlist))
                this.updatetotalprice();
            });
        }

       
     }

     removefromcart=(product)=>{
        
        const index=this.state.cartlist.findIndex(item=>item.product.id == product.id);
        if(this.state.cartlist[index].quantity==1)
        {
          this.state.cartlist.splice(index,1);
        }
        else{
        this.state.cartlist[index].quantity=this.state.cartlist[index].quantity-1;
        this.setState({cartlist:this.state.cartlist})
        }
        localStorage.setItem('mycart',JSON.stringify(this.state.cartlist))
        this.updatetotalprice();

     }


    updatetotalprice=()=>{
        var sum=0;
        for(var i=0;i<this.state.cartlist.length;i++)
        {
            var quantity=this.state.cartlist[i].quantity;
            var price=this.state.cartlist[i].product.price;
            sum=sum+(quantity*price)
        }
        this.setState({totalprice:sum})
        localStorage.setItem('totalprice',this.state.totalprice)
    }
     




    render() { 
        return ( 
               <Cartprovider.Provider value={{...this.state}}>
                  {this.props.children}
               </Cartprovider.Provider>
         );
    }
}
 
export default Cartcontext;