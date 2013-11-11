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
                console.log(data.realFeel)

                $('#temp').html(data.realFeel)
                $('#report').html(data.summary)
            
                    if ((data.realFeel) < -15) {
                    $('#clothingSuggestion').text('Test!!')
                } else if ((data.realFeel) > -15 & ((data.realFeel) < 0)) {
                    $('#clothingSuggestion').text('Test!!')
                } else if ((data.realFeel) > 0 & ((data.realFeel) < 15)) {
                    $('#clothingSuggestion').text('Test!!')
                } else if ((data.realFeel) > 15 & ((data.realFeel) < 30)) {
                    $('#clothingSuggestion').text('Test!!')
                } else if ((data.realFeel) > 30 & ((data.realFeel) < 45)) {
                    $('#clothingSuggestion').text('Test!!')
                } else if ((data.realFeel) > 45 & ((data.realFeel) < 60)) {
                    $('#clothingSuggestion').text('Test!!')
                } else if ((data.realFeel) > 75  ){
                    $('#clothingSuggestion').text('Test!!')
                }



           });
    });




});
