//connect the socket.io server
//define socket events
//attach events

//connect socket to client
// var socket = io.connect();
// socket.on('connect', function(){
//     console.log('Hello world');
// });

//set up AJAX call in case user requests a warmer or cooler outfit
//also  get user location with getCurrentPosition() or ask for their input
// send geolocation datat to /getweather route



$(function(){

    navigator.geolocation.getCurrentPosition(function(position){

        $.get('/getweather', {latitude:position.coords.latitude, longitude:position.coords.longitude}, function(data){
                console.log(data)

                //try to return this outside the function scope, so the future forecast can access it
                console.log(data.realFeel)

                $('#report').html(data.realFeel + ' & ' + data.summary)
            
                    if ((data.realFeel) < -15) {
                    $('#head').text('Facemask, scarf, hat and goggles')
                    $('#legs').text('Thermal underlayer, winter bike pants')
                    $('#chest').text('Insulating layer and a windproof layer')
                    $('#feet').text('Winter boots and wool socks')
                    $('#hands').text('Windproof mittens')
                } else if ((data.realFeel) >= -15 && ((data.realFeel) < 0)) {
                    $('#head').text('Facemask and hat')
                    $('#legs').text('Thermal underlayer, winter bike pants')
                    $('#chest').text('Insulating layer and a windproof layer')
                    $('#feet').text('Winter boots and wool socks')
                    $('#hands').text('Windproof mittens')
                } else if ((data.realFeel) >= 0 && ((data.realFeel) < 15)) {
                    $('#head').text('Hat and scarf')
                    $('#legs').text('Thermal underlayer, winter bike pants')
                    $('#chest').text('Insulating layer and a windproof layer')
                    $('#feet').text('Winter boots and wool socks')
                    $('#hands').text('Windproof mittens')
                } else if ((data.realFeel) >= 15 && ((data.realFeel) < 30)) {
                    $('#head').text('Winter beanie')
                    $('#legs').text('Warm pants')
                    $('#chest').text('Windproof jacket')
                    $('#feet').text('Light shoes and wool socks')
                    $('#hands').text('Cold weather gloves')
                } else if ((data.realFeel) >= 30 && ((data.realFeel) < 45)) {
                    $('#head').text('Winter beanie')
                    $('#legs').text('Warm pants')
                    $('#chest').text('Windproof jacket')
                    $('#feet').text('Normal shoes and warm socks')
                    $('#hands').text('Light gloves')
                } else if ((data.realFeel) >= 45 && ((data.realFeel) < 60)) {
//                    $('#head').text('Bare')
                    $('#legs').text('Light pants or shorts')
                    $('#chest').text('Light sweater')
                    $('#feet').text('Summer shoes')
                    $('#hands').text('Light gloves or bare hands')
                } else if ((data.realFeel) >= 60 && (data.realFeel) < 75){
 //                   $('#head').text('Bare head')
                    $('#legs').text('Light pants or shorts')
                    $('#chest').text('Light shirt')
                    $('#feet').text('Summer shoes')
//                    $('#hands').text('Bare hands')
                }

                //the weather forecast for 8 hours into the future
                $('#nightForecast').html(data.nightForecast)


           });


    });


    navigator.geolocation.getCurrentPosition(function(position){
        $.get('/getFutureWeather', {latitude:position.coords.latitude, longitude:position.coords.longitude}, function(data){
            console.log(data)
            $('#nightForecast').html(data.nightForecast + ' & ' + data.nightReport)
        });
    });


    var tag = "biking";
    var count = 2;
    var access_token = '22033045.ea9028a.eec94286a2e049429fe51c3fbc95db20';
    var access_parameters = {access_token:access_token}

    function grabImages(access_parameters) {

        //format: https://api.instagram.com/v1/tags *tag* /media/recent?callback=?&count= *count*
        //GET/locations/location-id/media/recentGet a list of media objects from a given location

        var instagramUrl = 'https://api.instagram.com/v1/tags/' + tag + '/media/recent?callback=?&count='+ count;

        $.getJSON(instagramUrl, access_parameters, onDataLoaded);
    }


    function onDataLoaded(instagram_data) {

      if(instagram_data.meta.code == 200) {

        var photos = instagram_data.data;


        if(photos.length > 0) {

          for (var key in photos){
                var photo = photos[key];
                $('#target').append('<img src="'+photo.images.thumbnail.url+'">');
          }
        } else {

          $('#target').append('Hmm.  I could not find anything!');
            }
        } else {

          var error = data.meta.error_message;
          $('#target').append('Something happened, Instagram said: ' + error);
        }
      }
    

    grabImages(access_parameters);

});
