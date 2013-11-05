//set up AJAX call in case user requests a warmer or cooler outfit
//also  get user location with getCurrentPosition() or ask for their input

$(function(){
        function get_location() {
navigator.geolocation.getCurrentPosition(function(position) {
  do_something(position.coords.latitude, position.coords.longitude);
   
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
});



        $('.btn').on('click', function() {

        

        $.get(' ',{}, function(data){
                console.log('test');

                });
                return false;
        });
}
});
