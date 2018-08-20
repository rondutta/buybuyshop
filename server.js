var express = require('express');
var morgan = require('morgan');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var ejs = require('ejs');
var engine = require('ejs-mate');

var User = require('./models/user');
var mainRoutes = require('./routes/main');

var app = express();

mongoose.connect('mongodb://localhost:27017/buybuyshop',{useNewUrlParser: true},(err)=>{
    if(err)
      console.log(err);
    else
      console.log("Connected to Database");  
})

app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(mainRoutes);
app.engine('ejs',engine);
app.set('view engine','ejs');

app.listen(3000,(err)=>{
    if(err)
    throw err;
    console.log("Server running on port 3000");
});