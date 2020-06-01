const express = require('express');
const router = express.Router();
const Ordermodel=require('../models/order')
const verifyuser=require('../middleware')

// place new order
router.post('/placeorder', verifyuser.checkToken ,(req, res) => {
        var neworder=new Ordermodel(req.body)
        neworder.save(function(err) {
            if(err)
            {
                res.send('Insert failed'+err);
            }
            else{
                res.send('1');
            }
        })
});

//get specific user orders by userid

router.post('/getordersbyemail',verifyuser.checkToken , (req, res) => {

     Ordermodel.find({ 
         useremail:req.body.useremail
     }, (err, doc) => {
        if(err){
            res.send(err);
        } else{
          if(!doc){
              res.send('Invalid request');
          } else{
            res.send(doc);
          }
        }
     });

});


router.post('/getorders', (req, res) => {

    Ordermodel.find({},
     (err, doc) => {
       if(err){
           res.send(err);
       } else{
         if(!doc){
             res.send('Invalid request');
         } else{
           res.send(doc);
         }
       }
    });

});

module.exports=router;