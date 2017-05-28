var express        = require('express');
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');
var http           = require('http');
var path           = require('path');
var morgan         = require('morgan');

var app            = express();

console.log('process.env.PORT', process.env.PORT);
var port = process.env.PORT || 3010;
 
app.use(express.static(process.cwd() + '/public'));

var theHTTPLog = morgan({
  "format": "default",
  "stream": {
    write: function(str) { theAppLog.debug(str); }
  }
});

app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('/', function(req, res) {
    res.sendFile( path.join(__dirname + '/public/views/index.html'));
});

app.listen(port, function() {
    console.log('connected to port ', port);
});