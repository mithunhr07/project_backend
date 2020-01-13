const mongoose = require('mongoose');
const Contact =require('../Model/Contact_model');
const bcrypt =require('bcrypt');
const jwt = require('jsonwebtoken');
var isAuth=require('../Middleware/isAuth')

// exports.list_all_tasks = function(req, res) {
// Leave.find({}, function(err, Contact) {
// if (err)
// res.send(err);
// res.json(Contact);
// });
// };


// exports.Contact = (req,res,next) =>{
//   console.log(req.body);
//   var Contactm = new  Contact(req.body);
//   Contactm.save(function(err, data){
//     if (err)
//     res.send(err);
//     res.json(data);
    
//   })
// }



exports.get_a_data = function(req, res) {

    Contact.find({}, function(err, data) {
    if (err)
      res.send(err);
      res.json(data);
    });
  };
  
  
  
  exports.update_a_task = function(req, res)
  {
      console.log(res)
    var User = new Contact(req.body);
    User.save({},function(err, data) {
    if (err)
    res.send(err);
    res.json(data);
    });
  };