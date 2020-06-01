const express = require('express');
var app=express();
var dbconnection=require('./conn');
var mongoose=require('mongoose');
var bodyParser=require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
const path=require('path');
var productsroute=require('./routes/products')
var userroute=require('./routes/user')
var orderroute=require('./routes/order')
var adminroute=require('./routes/admin')

app.use('/api/products/',productsroute);
app.use('/api/user/',userroute);
app.use('/api/order/',orderroute);
app.use('/api/admin/',adminroute);

const PORT=process.env.PORT || 5000;

if (process.env.NODE_ENV === "production") {
    app.use('/', express.static("client/build"));
    app.get("*", (req, res) => {
      res.sendFile(path.resolve(__dirname, "client/build/index.html"));
    }); 
  }


app.listen(PORT, () => {
    console.log(`Server started on port`);
});