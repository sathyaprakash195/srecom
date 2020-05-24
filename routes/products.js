const express = require('express');
const router = express.Router();
var mongoose=require('mongoose');
var productmodel=require('../models/product');
router.get('/getproducts', (req, res) => {
    productmodel.find({ 
      }, (err, docs) => {
         if(err){
             console.log(`Error: ` + err)
         } else{
           if(docs.length === 0){
               console.log("message")
           } else{
              res.send(docs);
           }
         }
      });
 });

 router.post('/getproductbyid', (req, res) => {
 
    productmodel.find({ 
        id:req.body.id
    }, (err, docs) => {
       if(err){
           console.log(`Error: ` + err)
       } else{
         if(docs.length === 0){
             console.log("message"+req.body.id)
         } else{
            res.send(docs);
         }
       }
    });

 });


 router.post('/addproduct', (req, res) => {

     var product=new productmodel(req.body);
     product.save(function(err) {
         if(!err)
         {
             res.send('Product Added successfully');
         }
         else{
             res.send(err);
         }

     })
 
 });

 module.exports=router;