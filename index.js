var fortunes = ['Excellent!!','Good', 'Surprise!', 'Oh! NO!']
var express = require('express');

var app = express();

app.set('view engine', 'jade');

app.set('port', process.env.PORT || 3000);

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
  res.render('home');
});

app.get('/about', function(req, res){
  var randomFortune = fortunes[ Math.floor(Math.random()*fortunes.length) ];
  res.render('about', {fortune: randomFortune});
});

app.use(function(req, res, next){
  res.status(404);
  res.render('404');
});

app.use(function(err, req, res, next){
  console.error(err.stack);
  res.status(500);
  res.render('500');
});

if(process.env.NODE_ENV === 'dev') {
  require('./webpack.dev.server')(app)
}

app.listen(app.get('port'), function(){
  console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.');
});