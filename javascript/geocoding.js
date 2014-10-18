
var street_address = prompt("enter your street address");
var city_address = prompt("enter your city");
var zip_address = prompt("enter your zip code");


var geocoder = new google.maps.Geocoder();
var LatLng;

function codeAddress() {
    var address = street_address+", "+city_address+", "+zip_address;
    geocoder.geocode( { 'address': address}, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        console.log(results[0].geometry.location); //LatLng
        LatLng = results[0].geometry.location;
      } else {
        alert("Geocode was not successful for the following reason: " + status);
      }
    });
}