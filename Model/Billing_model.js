var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var BillingSchema2 = new Schema({
Fullname: {
    type: String,
    // required: true
},
email:{
    type: String,
    // required: true
},
Address:{
    type: String,
    // required: true
},
City:{
    type: String,
    // required: true
},
State:{
    type: String,
    // required: true
},
Zip:{
    type: Number,
    // required: true
},
Name_on_card:{
    type: String,
    // required: true
},
Credit_Number:{
    type: String,
    // required: true
},
Exp_month:{
    type: String,
    // required: true
},
Exp_year:{
    type: Number,
    // required: true
},
CVV:{
    type: Number,
    // required: true
}


});

module.exports = mongoose.model('Billing', BillingSchema2);