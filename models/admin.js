const mongoose = require('mongoose');
const schema = mongoose.Schema;

var adminshema = new schema({
    adminid: String,
    password: String,

});

module.exports = mongoose.model('admins', adminshema);