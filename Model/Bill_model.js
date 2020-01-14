var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var billSchema = new Schema({
txnID: {
    type: String,
    required: true
},
email:{
    type: String,
    required: true
},

amount:{
    type: Number,
    required: true
},
productinfo:{
    type: String,
    required: true
},
firstname:{
    type: String,
    required: true
}
});

module.exports = mongoose.model('Tasks', billSchema);