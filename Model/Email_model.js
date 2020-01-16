var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var EmailSchema = new Schema({

    Email: {
        type: String,
        required: 'Please Enter valid emailId'
      }
    //   Password: {
    //     type: String,
    //     required: 'Please Enter the current password'
    //   }

});

module.exports = mongoose.model('nodemailer', EmailSchema);