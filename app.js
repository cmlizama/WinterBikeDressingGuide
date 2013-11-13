
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');
var forecastKey = require('./config.js')

var request = require('request');

var app = express();

// require the forecast.io module
var Forecast = require('forecast.io');

// all environments
app.set('port', process.env.PORT || 3000);
//app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));


console.log(forecastKey);

var options = {
  APIKey : forecastKey
}

var forecast = new Forecast(options);

console.log(forecast);


//boulder geolocation info:
// var longitude = -105.2797;
// var latitude = 40.0176 ;


//ajax request to /getweather route
app.get('/getweather', function(req, res){

	//console.log(req.query.latitude);
	forecast.get(req.query.latitude, req.query.longitude, function (err, res2, data){
	if (err) throw err;
  //console.log(data)
	console.log(data.currently.apparentTemperature)
	console.log(data.currently.summary)
    //specify the data u want to extract from forecast.io JSON
    res.send('index', {realFeel : data.currently.apparentTemperature,
     					summary : data.currently.summary})
          });
});


app.get('/getFutureWeather', function(req, res){
  //make another request for weather data in +8 hours
  var rideHomeTime = ((new Date().getTime()) + 28800000)
  forecast.getAtTime(req.query.latitude, req.query.longitude, rideHomeTime, function(err, res3, data){
    console.log('future data below')
    console.log(data)
    res.send({nightForecast:data.currently.apparentTemperature, nightReport:data.currently.summary})
  });
});




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
