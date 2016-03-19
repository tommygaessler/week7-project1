// var map;
// var marker;
// function initMap() {
//   var myLatLng = {lat: 39.757609, lng: -105.007005};

//   map = new google.maps.Map(document.getElementById('map'), {
//     zoom: 10,
//     center: myLatLng,
//     mapTypeId: google.maps.MapTypeId.ROADMAP
//   });

//   addMarker(myLatLng, "I\'m a marker!");
// }

// function addMarker(location, title){
//   marker = new google.maps.Marker({
//     position: myLatLng,
//     map: map,
//     title: title
//   });
// }

var map;
     var marker;
     var myLatLng;
     function initMap() {
       myLatLng = {lat: 39.757609, lng: -105.007005};
       map = new google.maps.Map(document.getElementById('map'), {
         zoom: 10,
         center: myLatLng,
         mapTypeId: google.maps.MapTypeId.ROADMAP
       });
       addMarker(myLatLng, "I'm a marker!");
     }
     function addMarker(location, title){
       marker = new google.maps.Marker({
         position: location,
         map: map,
         title: title
       });
     }
     function removeMarker(){
       marker.setMap(null)
     }
     function userInputMarker(input1, input2) {
       var latInput = $('.lat').val();
       var longInput = $('.long').val();
       var userLatLng = {lat: parseFloat(latInput), lng: parseFloat(longInput)};
       myLatLng = userLatLng;
       map.panTo(new google.maps.LatLng(latInput, longInput));
       addMarker(userLatLng, "woo!");
       console.log(myLatLng);
     }

