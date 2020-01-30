var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var adminSchema = new Schema({

SIno:{
type:Number,
required:true
},

UserName:{
type:String,
required:true,
},

UserAddress:{
type:String,
required:true,
},

Machinery_Name:{
type:String,
required:true,
},

Hours:{
type:String,
required:true,
},

Price:{
type:String,
required:true,
},

Rent_On_Date:{
type:String,
required:true,
},

email_id:{
type:String,
required:true,
},

MobileNo:{
type:Number,
required:true,
},

Drivers:{
    type:String
    }
});

module.exports = mongoose.model('Userlist', adminSchema);