var map;

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 2,
    mapTypeId: google.maps.MapTypeId.TERRAIN,
    center: {
      lat: 41.876,
      lng: -87.624
    }
  });

}

initMap();

var kmlUrl = 'rondjeMonney.kml';
var kmlOptions = {
  suppressInfoWindows: true,
  preserveViewport: false,
  map: map
};
var kmlLayer = new google.maps.KmlLayer(kmlUrl, kmlOptions);
