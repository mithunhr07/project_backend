const mongoose = require('mongoose');


exports.getAppointment = function(req,res){ 
    const reg_email=/^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]/;
    if(reg_email.test(req.body.email)){
      var Appoint = new appoint(req.body);
      Appoint.save(function(err, data){
        if(err)
        res.send(err.message);
        res.json(data);
        var transporter = nodemailer.createTransport({
          host: 'smtp.gmail.com',
          port: 8008,
          secure: false,
          requireTLS: true,
          auth: {
            user: 'mrajashekarostb2@gmail.com',
            pass: '26Feb1995'
          }
        });
        var mailOptions = {
          from:'mrajashekarostb2@gmail.com',
          to: data.email,
          subject: 'Requesting to help',
          text: `Hii your appointment with HEALTH+ is confirmed at `+data.date,
        };
        console.log(data)
        transporter.sendMail(mailOptions, (error, info)=>{
          if (error) {
            return console.log(error.message);
          } else {
            console.log('Email sent: ' + info.response);
          }
        });
      })
    }
    else {
      res.send('Email is invalid');
    }
  };