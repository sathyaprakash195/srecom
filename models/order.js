const mongoose=require('mongoose');

const order={
    orderid:String,
    useremail:String,
    items:[{
        name:String,
        itemid:String,
        price:Number,
        quantity:Number
    }],
    paymentmode:String,
    paymentref:String,
    price:Number,
    shipping:{mobile:Number,name:String,address:String,pincode:String},
    date:Date
}

var schema=mongoose.Schema;
var orderschema=new schema(order);
const ordermodel=mongoose.model('orders',orderschema);
module.exports=ordermodel;
