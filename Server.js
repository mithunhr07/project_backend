var express = require('express');
var app = express();
 var port = process.env.PORT || 8008;
 var mongoose = require('mongoose');
 var Task = require('./Model/Model');
 var Contact=require('./Model/Contact_model');
 var Billing=require('./Model/Billing_model');
 var email=require('./Model/Email_model');
 var bodyParser = require('body-parser');
 var cors = require('cors');
 const stripe = require("stripe")("sk_test_4eC39HqLyjWDarjtT1zdp7dc");

app.use(require("body-parser").text());
  

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Register', { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true });


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors())


var routes = require('./Router/Router');
routes(app); 

app.use((error,req,res,next)=>{
    console.log(error);
    const status = error.statusCode || 500;
    const message = error.message;
    res.status(status).json({
        message:message
    });
});

app.post("/charge", async (req, res) => {
    try {
      let {status} = await stripe.charges.create({
        amount: 2000,
        currency: "usd",
        description: "An example charge",
        source: req.body
      });
  
      res.json({status});
    } catch (err) {
      console.log(err);
      res.status(500).end();
    }
  });
  app.listen(8008, () => console.log("Listening on port 8008"));


console.log('todo list RESTful API server started on: ' + port);