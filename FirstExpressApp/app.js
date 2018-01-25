var express = require("express");
var app = express();

app.get("/", function(req, res) {
  res.send("Hi there");
});

app.get("/bye", function(req, res) {
  console.log("Someone has made a request to /bye");
  res.send("Goodbye!");
});

app.get("/r/:subredditName", function(req, res) {
  // console.log(req.params.subredditName);
  var subreddit = req.params.subredditName;
  res.send("Welcome to the " + subreddit + " subreddit");
});








app.listen(process.env.PORT, process.env.IP, function (){
  console.log("Server has started!");
});