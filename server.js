var express = require('express');
var app = express();
var path=require("path");
var fs=require("fs");


app.use(express.static(path.join(__dirname,'webapp')));

 app.get('/', function (req, res) {
   res.sendFile(path.join(___dirname + '/index.html'));
});
 

app.get('/hello', function (req, res) {
  console.log("CAlling rest api");
  var person={firstName:'Shwetank',lastName:'Yadav',age:24};
  res.send(person);
});

 
var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://localhost:8081", host, port)
})