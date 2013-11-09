//set up AJAX call in case user requests a warmer or cooler outfit
//also  get user location with getCurrentPosition() or ask for their input
// send geolocation datat to /getweather route



$(function(){

        navigator.geolocation.getCurrentPosition(function(position){

            $.get('/getweather', {latitude : position.coords.latitude, longitude : position.coords.longitude  }, function(data){
                console.log(data)
            } )
           });


});
