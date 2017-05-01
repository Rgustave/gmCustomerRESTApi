var express = require('express');
var mongodb = require("mongodb");
var bodyParser =  require('body-parser');
var ObjectID = mongodb.ObjectID;
var CUSTOMER_COLLECTION = "customers";



var app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

var db;

mongodb.MongoClient.connect(process.env.MONGODB_URI, function (err, database) {
  if (err) {
    console.log(err);
    process.exit(1);
  }

db = database;

  var server = app.listen(process.env.PORT || 8080, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
  });
});

app.use('/api',require('./routes/api'))

// app.listen(3000);
console.log('API is running on port 3000');