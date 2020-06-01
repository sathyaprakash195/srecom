
var mongoose = require('mongoose');
//Set up default mongoose connection
var mongoDB = 'mongodb+srv://sathya:sathyapr123@cluster0-wrqpt.mongodb.net/srecom?retryWrites=true&w=majority';
mongoose.connect(mongoDB, { useNewUrlParser: true , useUnifiedTopology: true });
 //Get the default connection
var db = mongoose.connection;
db.on('error',function () {
    console.log('Mongo Db Connection Failed');
})
db.on('connected',function () {
    console.log('Mongo Db Connection success');
})


module.exports=mongoose;