var mymap = L.map('mapid').setView([60.1733, 24.94], 12);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
  maxZoom: 18,
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
      'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  id: 'mapbox/streets-v11',
  tileSize: 512,
  zoomOffset: -1
}).addTo(mymap);

var ateneum = L.marker([60.1702332, 24.9440396]).addTo(mymap);
ateneum.bindPopup("Ateneumin taidemuseo,<br> Kaivokatu 2, Helsinki");


function haeReitti(elem) {
  'use strict';
  let id = elem.id - 1;
  const url = "https://citynature.eu/api/wp/v2/places?cityid=5";

  fetch(url)
  .then(function(vastaus){
    return vastaus.json();
  }).then(function(json){
    naytaTulos(json);
  }).catch(function(error){
    console.log(error);
  })

  function naytaTulos(json) {
    let i;
    const title = json[id].title;
    const nimi = document.getElementById('reittinimi');
    nimi.innerText ="Reitti: " + title;

    for(i=0;i < json[id].points.length;i++) {
      let lat = json[id].points[i].locationPoint.lat;
      let lng = json[id].points[i].locationPoint.lng;
      let info = json[id].points[i].locationPoint.pointInfo;

      let piste = L.marker([lat, lng]).addTo(mymap);
      piste.bindPopup(info);

    }

    mymap.panTo([json[id].points[0].locationPoint.lat, json[id].points[0].locationPoint.lng]);

  }
}

