var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var TaskSchema = new Schema({
Machine_Name: {
    type: String,
    required: true
},
Price:{
    type: String,
    required:true
},

});

module.exports = mongoose.model('Services', TaskSchema);