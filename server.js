const express = require('express');
var app=express();
var dbconnection=require('./conn');
var mongoose=require('mongoose');
var bodyParser=require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
var productsroute=require('./routes/products')
var userroute=require('./routes/user')
var orderroute=require('./routes/order')
var adminroute=require('./routes/admin')
app.get('/', (req, res) => {
   
    res.send('Node Js Started working');

});

app.use('/api/products/',productsroute);
app.use('/api/user/',userroute);
app.use('/api/order/',orderroute);
app.use('/api/admin/',adminroute);


app.listen(5000, () => {
    console.log(`Server started on port`);
});