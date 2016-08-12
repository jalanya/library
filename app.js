var express = require('express');

var app = express();

var port = 5000;

app.get('/', function(req, res) {
  res.send('Hello World');
});

app.get('/books', function(req, res) {
  res.send('Hello Books');
});

app.listen(port, function() {
   console.log('Running server on port ' + port);
});
