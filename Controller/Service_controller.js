const mongoose = require('mongoose');
const Service =require('../Model/Service_model');




exports.get_machinery = function(req, res) {

   Service.find({}, function(err, data) {
    if (err)
      res.send(err);
      res.json(data);
    });
  };
  
  
  
  exports.Create = function(req, res)
  {
    console.log(res)
    var User = new Service(req.body);
    User.save({},function(err, data) {
    if (err)
    res.send(err);
    res.json(data);
    });
  };