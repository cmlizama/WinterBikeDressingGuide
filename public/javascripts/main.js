//set up AJAX call in case user requests a warmer or cooler outfit
//also  get user location with getCurrentPosition() or ask for their input
// send geolocation datat to /getweather route

var latitude = position.coords.latitude;
var longitude = position.coords.longitude;

var get_location = function(){
    navigator.geolocation.getCurrentPosition(function(position){
        do_something(position.coords.latitude, position.coords.longitude);
    })
}




$(function(){





});




//         function get_location() {
// navigator.geolocation.getCurrentPosition(function(position) {
//   do_something(position.coords.latitude, position.coords.longitude);
   
//     var latitude = position.coords.latitude;
//     var longitude = position.coords.longitude;
// });
//         $('.btn').on('click', function() {
//         $.get('/getweather',{}, function(data){
//                 console.log('test');

//                 });
//                 return false;
//         });
// }