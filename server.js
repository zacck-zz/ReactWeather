//load module
var express = require('express');

//create our app
var app = express();

//show app folder to serve
app.use(express.static('public')); // specifies a a folder name to expose

//start the server
app.listen(3000, function(){ // takes the port you are serving to and a function
  console.log('Express Server is up on port 3000');//log top console
});
