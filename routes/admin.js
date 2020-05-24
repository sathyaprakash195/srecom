const express = require('express');
const router = express.Router();
const Adminmodel=require('../models/admin')
router.post('/login', (req, res) => {

    Adminmodel.find({ 
        adminid:req.body.adminid,
        password:req.body.password
    }, (err, docs) => {
       if(err){
           console.log(`Error: ` + err)
       } else{
         if(docs.length === 0){
             console.log("message")
         } else{
           res.send('1');
         }
       }
    });

});

module.exports=router;