var express = require("express");
var app = express();
var port = process.env.PORT || 3000;
var path = require("path");

app.use(express.static(path.join(__dirname, "./public")));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.listen(port, function() {
  console.log("Listening on " + port);
});
