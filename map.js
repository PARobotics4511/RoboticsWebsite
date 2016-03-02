var map;
var myLatLong = {lat:45.045179, lng:-93.471339};
var marker;

function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 16,
    center: myLatLong,
    mapTypeId: google.maps.MapTypeId.SATELLITE
  });

  marker = new google.maps.Marker({
    map: map,
    animation: google.maps.Animation.BOUNCE,
    position: myLatLong
  });
  marker.addListener('click', toggleBounce);
}
function toggleBounce() {
  if (marker.getAnimation() !== null) {
    marker.setAnimation(null);
  } else {
    marker.setAnimation(google.maps.Animation.BOUNCE);
  }
}