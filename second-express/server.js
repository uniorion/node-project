var express = require('express');
var app = express();

var indexRouter = require('./routers/index')(app);
var aboutRouter = require('./routers/about')(app);

app.set('port', process.env.PORT || 3030);  

app.use(function(req, res){
  res.type('text/plain');
  res.status('404');
  res.send('440 - Not found');
});

app.use(function(req, res){
  res.type('text/plain');
  res.status('500');
  res.send('500 - Server error');
});


app.listen(app.get('port'), function(){
  console.log('Second Express Server is running at localhost:' + app.get('port'));
});



