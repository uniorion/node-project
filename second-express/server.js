var express = require('express');
var app = express();

var indexRouter = require('./routers/index')(app);
var aboutRouter = require('./routers/about')(app);
var usersRouter = require('./routers/users')(app);
var chatRouter = require('./routers/chat')(app);

app.set('port', process.env.PORT || 3030); 
//---------- views for rendering ----------
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
// views 폴더에 html 파일이 있어도 ejs 엔진으로 렌더링
app.engine('html', require('ejs').renderFile);
//----------------------------------------

// public for express static 
app.use('/public', express.static(__dirname + '/public'));

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



