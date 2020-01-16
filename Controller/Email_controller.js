var mongoose = require('mongoose');
var nodemailer = require ('nodemailer');
var nodemailer1 =require('../Model/Email_model');


exports.nodemailer1 = function(req, res){
  const reg_email=/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
  // console.log(req.body)
    // if(reg_email.test(req.body.email)){
      var mail = new nodemailer1(req.body);
      mail.save(function(err, data){
        if(err)
          res.send(err.message);
          res.json(data);
      var transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        requireTLS: true,

        auth: {
          user: 'mithunhrm07@gmail.com',
          pass: 'nagaveni2018'
        }
      });
      mailOptions = {
          from: 'mithunhrm07@gmail.com',
          to: req.body.Email,
          subject: 'requesting to complete project',
          text: `Hii your deadline is very soon plz submmit your project as soon as possible`      
        };
        transporter.sendMail(mailOptions, (error, info)=>{
          if (error) {
            return console.log(error.message);
          } else {
            console.log('Email sent: ' + info.response);
          }
        });
      })
    // }
    // else {
    //   res.send('Email is invalid');
    // }
  };