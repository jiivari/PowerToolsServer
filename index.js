var express = require('express'); // Express web server framework
var request = require('request'); // "Request" library
var querystring = require('querystring');
var cookieParser = require('cookie-parser');
var http = require('http');
var port = 8888;
var uuid = require('uuid');
var bodyParser = require('body-parser')
require('dotenv').config();

var app = express();

app.use(express.static(__dirname + '/public'))
  .use(cookieParser())
  //  .use(bodyParser.json())
  .use(bodyParser.urlencoded({
    extended: true
  }));

app.get('/products', function(req, res) {
  // var bimJson = require('./data/Products-bim');
  var bimJson = {};

  var callback = function (error, response, body) {
    if (error) {
      res.status(500).send(error.message);
    }
    bimJson = JSON.parse(body);
    res.type('application/json');
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET')
    res.header('Access-Control-Allow-Headers', '*')
    res.set('Content-Length', Buffer.byteLength(JSON.stringify(bimJson)));
    res.status(200).send(JSON.stringify(bimJson));
  };
  request('https://raw.githubusercontent.com/jiivari/PowerToolsServer/master/data/Products-bim.json',callback);

});


console.log('Listening on ' + port);
app.listen(process.env.PORT || port);
