
var street_address = prompt("enter your street address");
var city_address = prompt("enter your city");
var zip_address = prompt("enter your zip code");


var geocoder = new google.maps.Geocoder();
var LatLng;
var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

function codeAddress() {
    var address = document.getElementBy('address').value;
    console.log(address);
    geocoder.geocode( { 'address': address}, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        console.log(results[0].geometry.location); //LatLng
        LatLng = results[0].geometry.location;
      } else {
        alert("Geocode was not successful for the following reason: " + status);
      }
    });
}