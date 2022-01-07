//Leaflet Homework Week 15 - GEOMAPPING

//Source choice - past 30 days
var url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson"

function createMap(earthquakes) {
  // Create the base layers.
  var street = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  })

  var topo = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
  });

// Create a baseMaps object.
  var baseMaps = {
    "Street Map": street,
    "Topographic Map": topo
  };

// Create an overlay object to hold our overlay.
  var overlayMaps = {
    Earthquakes: earthquakes
  };

// Create our map, giving it the streetmap and earthquakes layers to display on load.
  var myMap = L.map("map", {
    center: [
      50, -50
    ],
    zoom: 2,
    layers: [street, earthquakes]
  });


// / Perform a GET request to the query URL
d3.json(url).then(function (data) {
  console.log(data)
  function styleInfo(feature) {
    return {
      opacity: 1,
      fillOpacity: 1,
      fillColor: getColor(feature.properties.depth),
      color: "red",
      radius: getRadius(feature.properties.mag),
      stroke: true,
      weight: 0.5
    };

  function getColor(depth) {
    switch (true) {
    case depth > 5000:
      return " #f24235 ";
    case depth > 3500:
      return "#e76f66";
    case depth > 1500:
      return " #ef8d86"; 
    case depth > 500:
      return "#ee9e98";
    case depth > 100:
      return "#ebbdba";
    default:
      return "#e5c0be";
    }
  }
function oMarker(magnitude) {
    if (magnitude === 0) {
      return 1;
    }
    return magnitude * 2;}

  }
function createFeatures(earthquakeData) {

// Define a function that we want to run once for each feature in the features array.
// Give each feature a popup that describes the place and time of the earthquake.
  function onEachFeature(feature, layer) {
    layer.bindPopup(`<h3>${feature.properties.place}</h3><hr><p>${new Date(feature.properties.time)}</p>`);
  }
  
// Create a GeoJSON layer that contains the features array on the earthquakeData object.
// Run the onEachFeature function once for each piece of data in the array.
  var earthquakes = L.geoJSON(earthquakeData, {
    onEachFeature: onEachFeature
  });

// Create a layer control.
// Pass it our baseMaps and overlayMaps.
// Add the layer control to the map.
  L.control.layers(baseMaps, overlayMaps, {
    collapsed: false
  }).addTo(myMap);
}
})
}