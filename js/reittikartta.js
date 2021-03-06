
var kartta = L.map('kartta').setView([60.1733, 24.94], 14);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
  maxZoom: 18,
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
      'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  id: 'mapbox/streets-v11',
  tileSize: 512,
  zoomOffset: -1
}).addTo(kartta);


/*GEOLOKAATIO jonka avulla saadaan käyttäjän sijainti kartalle alussa*/
let omaLat;
let omaLng;

let x = document.getElementById("virheilmoitus");
function getLocation() {
  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser."
  }
}
function showPosition(position) {                                  //tässä kohtaa lisätään sijainti karttamarkkeriksi
  omaLat = position.coords.latitude;
  omaLng = position.coords.longitude;
  let piste = L.marker([omaLat, omaLng]).addTo(kartta);
  piste.bindPopup("Sinä olet täällä!");
  kartta.panTo([omaLat, omaLng]);

}
getLocation();

function haeReitti(elem) {                                        //funktio, jota haetaan kun dropdown menun linkkiä painetaan
  'use strict';
  let id = elem.value;                                        //id on muuttuja jonka avulla tiedetään, minkä paikan tiedot haetaan
  const url = "https://citynature.eu/api/wp/v2/places?cityid=5";

  fetch(url)                                                      //haetaan API-sivusto
  .then(function(vastaus){
    return vastaus.json();
  }).then(function(json){
    naytaTulos(json);
  }).catch(function(error){
    console.log(error);
  })

  function naytaTulos(json) {
    let i;

    for(i=0;i < json[id].points.length;i++) {                   //käydään läpi halutun reitin json ja lisätään markerit karttaan
      let lat = json[id].points[i].locationPoint.lat;
      let lng = json[id].points[i].locationPoint.lng;
      let info = json[id].points[i].locationPoint.pointInfo;

      let piste = L.marker([lat, lng]).addTo(kartta);
      piste.bindPopup(info);

    }

    kartta.flyTo([json[id].points[0].locationPoint.lat, json[id].points[0].locationPoint.lng]);  //kartan ominaisuus "lentää" jonkin markerin luo

  }
}