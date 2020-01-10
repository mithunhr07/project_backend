var express = require('express');
var app = express();
 var port = process.env.PORT || 8008;
 var mongoose = require('mongoose');
 var Task = require('./Model/Model');
 var bodyParser = require('body-parser');
 var cors = require('cors')
  

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Register'); 


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

app.listen(port);


console.log('todo list RESTful API server started on: ' + port);