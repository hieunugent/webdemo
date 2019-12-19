//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.set('view engine', 'ejs');


app.get('/', function(req, res){
  // res.sendFile(__dirname+ '/index.html');
  res.render("main");
});

app.listen(3000, function(){
  console.log("server is started on port 3000");
});
