var express = require("express");
var app = express();




// ROUTES //
app.get("/", function(req, res) {
  res.send("Hi there, welcome to my assignment");
});

app.get("/speak/:animal", function(req, res) {
  var sounds = {
    dog: "Woof woof!",
    cat: "meow",
    fish: "...",
    elephant: "yeeeeerrrrp"
  }
  
  var animal = req.params.animal;
  var sound = sounds[animal];
  
  res.send("The " + animal + " says \"" + sound + "\"" );
});

app.get("/repeat/:word/:iteration", function(req, res) {
  var iteration = parseInt(req.params.iteration);
  var word = req.params.word;
  var printString = word;
  
  for (var i = 1; i < iteration; i++) {
    printString += " " + word;
  }
  
  res.send(printString);
});

app.get("*", function(req, res) {
  res.send("Page not found, what are you doing with your life?");
});




// Listener //
app.listen(process.env.PORT, process.env.IP, function (){
  console.log("Server has started!");
});