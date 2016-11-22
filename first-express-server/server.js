var express = require('express');
var app = express();

app.set('port', process.env.PORT || 8080);

app.get('/', function(req, res) {
  res.type('text/plain');
  res.send('Hello Express!@');
});

app.use(function(req, res){
  res.status('404');
  res.type('text/plain');
  res.send('404 - Page Not Found');
});

app.use(function() {
  res.status('500');
  res.type('text/plain');
  res.send('500 - Server Error');
});



app.listen(app.get('port'), function() {
  console.log('First express Server is running at localhost:' + app.get('port'));
});