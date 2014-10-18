
//var street_address = prompt("enter your street address");
//var city_address = prompt("enter your city");
//var zip_address = prompt("enter your zip code");


map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

function initialize() {
  geocoder = new google.maps.Geocoder();
  var latlng = new google.maps.LatLng(-34.397, 150.644);
  var mapOptions = {
    zoom: 8,
    center: latlng
  }
  map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
}

function codeAddress() {
    var address = document.getElementById("address").value;
    console.log(address);
    geocoder.geocode( { 'address': address}, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        console.log(results[0].geometry.location); //LatLng
      } else {
        alert("Geocode was not successful for the following reason: " + status);
      }
    });
}
google.maps.event.addDomListener(window, 'load', initialize);