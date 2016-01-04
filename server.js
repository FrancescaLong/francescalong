// Server. js
console.log("sanity check - server.js loaded");


// REQUIREMENTS //
var express = require("express"),  //npm install express --save
    app = express(),  //npm install ejs --save
    path = require("path");  //npm install path --save


// CONFIG //
// set ejs as view engine
app.set('view engine', 'ejs');
// serve js & css files
app.use("/static", express.static("public"));


app.get('/', function(req, res) {
    res.render('views/index.ejs');
});

/*  Main Listener information - this should be the last thing in the file  */

app.listen(process.env.PORT || 7000, function (){
  console.log("listening on port 7000");
});
