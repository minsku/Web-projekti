var mymap = L.map('mapid').setView([62.241677684, 25.749498121], 5);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
  maxZoom: 18,
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
      'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  id: 'mapbox/streets-v11',
  tileSize: 512,
  zoomOffset: -1
}).addTo(mymap);

/*---- Kartan markerit ----*/
var ateneum = L.marker([60.1702332, 24.9440396]).addTo(mymap);
ateneum.bindPopup("Ateneumin taidemuseo,<br> Kaivokatu 2, Helsinki");
ateneum.on('click', function(e) {
  mymap.flyTo([e.latlng.lat, e.latlng.lng], 15)
});

var helsinki = L.marker([60.1687535, 24.9539174]).addTo(mymap);
helsinki.bindPopup("Helsingin kaupunginmuseo,<br>Aleksanterinkatu 16, Helsinki");
helsinki.on('click', function(e) {
  mymap.flyTo([e.latlng.lat, e.latlng.lng], 15)
});

var kuopio = L.marker([62.8919867, 27.6827395]).addTo(mymap);
kuopio.bindPopup("Kuopion taidemuseo,<br>Kauppakatu 35, Kuopio");
kuopio.on('click', function(e) {
  mymap.flyTo([e.latlng.lat, e.latlng.lng], 15)
});

var tampere = L.marker([61.4985928, 23.7437527]).addTo(mymap);
tampere.bindPopup("Tampereen taidemuseo,<br>Puutarhakatu 34, Tampere");
tampere.on('click', function(e) {
  mymap.flyTo([e.latlng.lat, e.latlng.lng], 15)
});

var turku = L.marker([60.454092, 22.2618497]).addTo(mymap);
turku.bindPopup("Turun taidemuseo,<br>Aurakatu 26, Turku");
turku.on('click', function(e) {
  mymap.flyTo([e.latlng.lat, e.latlng.lng], 15)
});

var renlund = L.marker([63.83725180023731, 23.129970419881616]).addTo(mymap);
renlund.bindPopup("K. H. Renlundin museo,<br>Pitkänsillankatu 39, Kokkola");
renlund.on('click', function(e) {
  mymap.flyTo([e.latlng.lat, e.latlng.lng], 15)
});

var hameenlinna = L.marker([60.99783807851751,24.474928594614184]).addTo(mymap);
hameenlinna.bindPopup("Hämeenlinnan taidemuseo,<br>Viipurintie 2, Hämeenlinna");
hameenlinna.on('click', function(e) {
  mymap.flyTo([e.latlng.lat, e.latlng.lng], 15)
});

