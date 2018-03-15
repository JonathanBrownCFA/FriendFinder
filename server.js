// Your `server.js` file should require the basic npm packages we've used in class:
// `express`, `body-parser` and `path`.
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

//API bodyParser , express, path
var bodyParser = require('body-parser');
var express = require('express');
var path = require('path');

var app = express();
//port variable
var PORT = process.env.PORT || 3000;
 

//Express/Connect top-level generic
// parse application/x-www-form-urlencoded 

// parse application/json 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
 

// api

require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);

//server up
app.listen(PORT, function(){
    console.log("App listening on PORT: " + PORT);
});
