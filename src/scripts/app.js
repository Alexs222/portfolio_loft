import fullScreen from './common/_fullscreen_menu'
import autorization from './common/_autorization';
// import test from './common/test';

console.log('in index.js');

// авторизация
window.onload = function () {
    console.log( "страница загружена")
    autorization()
    fullScreen()
  }
// test('Привет webpack');
// autorization();
// var autorjs = autorization()
// console.log(autorjs)

// const slider = require('./common/slider');

// slider(); // инициализируем слайдерs


// console.log (`имя ${test.name}, число ${test.sumh}, сумма ${test.funk(14, 22)}`)



// google map
// function initMap() {
//   var uluru = {
//     lat: -25.363,
//     lng: 131.044
//   };
//   var map = new google.maps.Map(document.getElementById('#myGoogleMap'), {
//     zoom: 4,
//     center: uluru
//   });
//   var marker = new google.maps.Marker({
//     position: uluru,
//     map: map
//   });
// }

console.log("Подключено");


function initMap() {
  // Change some styles
  var styleArray = [{
      featureType: 'water',
      stylers: [{
        color: '#00bfa5'
      }]
    },
    {
      featureType: 'landscape',
      elementType: 'geometry.fill',
      stylers: [{
        color: '#ffffff'
      }]
    },
    {
      featureType: 'landscape.man_made',
      elementType: 'all',
      stylers: [{
        saturation: '-70'
      }]
    },
    {
      featureType: 'landscape.natural',
      elementType: 'all',
      stylers: [{
        visibility: 'off'
      }]
    },
    {
      featureType: 'poi',
      elementType: 'labels',
      stylers: [{
        visibility: 'off'
      }]
    },
    {
      featureType: 'poi.park',
      elementType: 'all',
      stylers: [{
        visibility: 'off'
      }]
    },
    {
      featureType: 'road',
      elementType: 'all',
      stylers: [{
        lightness: '-15'
      }]
    },
    {
      featureType: 'transit',
      elementType: 'labels',
      stylers: [{
        visibility: 'off'
      }]
    }
  ];
  // Create a map object and specify the DOM element for display.
  var map = new google.maps.Map(document.getElementById('myGoogleMap'), {
    center: {
      lat: 56.136874,
      lng: 47.261590
    },
    scrollwheel: false,
    zoom: 14,
    styles: styleArray,
    disableDefaultUI: true
  });
  // Create marker
  // var myMarker = new google.maps.Marker({
  //   position: {
  //     lat: 56.127956,
  //     lng: 47.265265
  //   },
  //   map: map,
  //   icon: 'assets/img/map_marker_large.png'
  // });
}