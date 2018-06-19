
var express = require("express");
var mongojs = require("mongojs");
var logger = require("morgan");
var request = require("request");
var cheerio = require("cheerio");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

//initialize express
var app = express();

//connecting mongojs configuration to the db variable
var db = require("./models");

var PORT = 3000;

//configure middleware
app.use(logger("dev"));
app.use(bodyParser.urlencoded({ extended:false}));
app.use(express.static("public"));


var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/NPRreact";

//setting up mongoose to use promises instead of callbacks and connecting to mongo db
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI); 

app.listen(3000, function(){
    console.log("App running on port 3000!");
});