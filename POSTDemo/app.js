var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var catMe = require("cat-me");



app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");




var friends = ["Bo", "Sean", "Russ", "Abbey", "Audrey"];

app.get("/", function(req, res) {
  res.render("home");
});

app.get("/friends", function(req, res) {
  res.render("friends", {friends: friends});
});

app.post("/addFriend", function(req, res) {
  var newFriend = req.body.newfriend;
  friends.push(newFriend);
  res.redirect("friends");
});





app.listen(process.env.PORT, process.env.IP, function() {
  console.log("Server has started!");
})