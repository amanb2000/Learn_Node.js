const express = require('express');
var app = express();

app.get('/', function(req, res){
  res.send('Hey babe')
})

app.get('/amans_world/:num', function(req, res){
  console.log('Theyre in the system oh no');
  res.send('My gosh, why are you even here? And whats this number, ' + req.params.num);
})

app.listen(2000);
