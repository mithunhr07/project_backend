const mongoose = require('mongoose');
const Billing =require('../Model/Billing_model');
const bcrypt =require('bcrypt');
const jwt = require('jsonwebtoken');
var isAuth=require('../Middleware/isAuth')



exports.get_a_data = function(req, res) {

   Billing.find({}, function(err, data) {
    if (err)
      res.send(err);
      res.json(data);
    });
  };
  
  
  
  exports.update_a_task = function(req, res)
  {
    console.log(res)
    var User = new Billing(req.body);
    User.save({},function(err, data) {
    if (err)
    res.send(err);
    res.json(data);
    });
  };