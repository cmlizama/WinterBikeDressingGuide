
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');

var request = require('request');

var Instagram = require('instagram-node-lib');

var app = express();

// require the forecast.io module
var Forecast = require('forecast.io');

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));


//create my own instance of Forecast
//my own Forecast.io API key a0a8fcbc5abfcc9ba961173dcc60e214
var options = {
  APIKey: 'a0a8fcbc5abfcc9ba961173dcc60e214'
};

console.log(options);

var forecast = new Forecast(options);
console.log(forecast);


// post: req.body.longitude , get: req.query

//boulder geolocation info:
// var longitude = -105.2797;
// var latitude = 40.0176 ;

//ajax get request /getweather
//from html5 geolocation method


//ajax request to /getweather route
app.get('/getweather', function(req, res){
	//console.log(req.query.latitude);
	forecast.get(req.query.latitude, req.query.longitude, function (err, res2, data){
	if (err) throw err;

	console.log(data.currently.apparentTemperature)
	console.log(data.currently.summary)

    //specify the data u want to extract from forecast.io JSON


    res.send('index', {realFeel : data.currently.apparentTemperature,
     					summary : data.currently.summary})
});
});


//set up instagram api options
Instagram.set('client_id', '3c1bd90ae34d474d89a340909fa657e7');
Instagram.set('client_secret', 'e0e20c1ccfd1421b8603ca4581f8d57a');


//route for instagram photos
app.get('/getPhoto', function(req, res){
  var lon = req.query.longitude;
  var lat = req.query.latitude;
  console.log(lon)

  request.get('https://api.instagram.com/v1/tags/biking/media/recent?client_id=3c1bd90ae34d474d89a340909fa657e7&lat='+lat+'&lng='+lon, function(err, response, body){
     body = JSON.parse(body)
      // console.log(body.data)
      res.send(body.data)

  });
});




// take in geolocation and weather data on a landing page
//then render template with weather data after user hits an Enter button


//if (realFeel > 40 && realFeel < 50) {clothingSugguestion = "blah"}
//res.send(clothingSuggestion)

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/users', user.list);

app.get('/', function(req, res){
	res.render('index')
})


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
