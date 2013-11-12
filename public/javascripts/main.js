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



           });


    $.get('/getPhoto', {latitude:position.coords.latitude, longitude:position.coords.longitude}, function(data){
        console.log(data)
        //$('#insta').html(data)
        //loop thru data and populate DOM
        // for(i=0; i<data.length; i++){
        //     $('#insta').html(<img src=data.object.images.url)
        // }

    })





    });
    //navigator.geolocation.getCurrentPosition(function(position){

        //}





});
