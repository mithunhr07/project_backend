var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var ContactSchema1 = new Schema({
Name: {
    type: String,
    // required: true
},
Mobnum:{
    type: Number,
    // required: true
},
email:{
    type: String,
    // required: true
},

Message:{
    type: String,
    // required: true
}


});

module.exports = mongoose.model('Contact', ContactSchema1);