const mongoose=require('mongoose');

const product={
    id:String,
    name:String,
    imageurl:String,
    description:String,
    price:Number,
    category:String,
    rating:Number,
    buyers:Number
}

var schema=mongoose.Schema;
var productschema=new schema(product);

const productmodel=mongoose.model('products',productschema);

module.exports=productmodel;