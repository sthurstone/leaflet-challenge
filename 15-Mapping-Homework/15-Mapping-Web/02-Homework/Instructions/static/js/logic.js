//Leaflet Homework Week 15 - GEOMAPPING

//Source choice - past 30 days
var url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson"

//create map
var map = L.map("map", {
    center: [50, -50],
    zoom: 3
  });

//create layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

//use d3 to pull data from GEOJSON
d3.json(url).then(function(data){
    console.log(data)

    //pull map data for markers
    for (var i = 0; i < data.features.length; i++){
        var quake = data.features[i];
        var location = [quake.geometry.coordinates[1], quake.geometry.coordinates[0]];
        var depth = [quake.geometry.coordinates[2]];
        var color = '';
        var qdate = new Date(quake.properties.time)
        
        //determine color based on depth
        if (depth >= 5000){
            color = "#ff5f65"
        }

        else if (depth >= 2500){
            color = "#6d605f"
        }

        else if (depth >= 1500){
            color = "#9a8786"
        }

        else if (depth >= 1000){
            color = "#f5a29c"
        }

        else if (depth >= 500){
            color = "#f7cdca"
        }

        else {
            color = "#faedec"
        }

      //determine marker size based on magnitude 

      function markerSize(magnitude) {
        return magnitude * 3;
    }

        //create info pop-up when clicking on marker
        L.circle(location, {
            opacity: .5,
            fillOpacity: 0.5,
            weight: 1,
            color: 'red',
            fillColor: color,
            radius: 10 * quake.properties.mag
        }).bindPopup("<h4> Date of Earthquake:" + 
        qdate + "</h4><h5>Magnitude: " + 
        quake.properties.mag + "</h5><h6>Location: " 
        + quake.properties.place + "</h6><h7>Depth: " 
        + depth + "</h7>").addTo(map)
    }

    //create key
    var legend = L.control({position: 'topleft'});

    legend.onAdd = function (map) {

    var div = L.DomUtil.create('div', 'info legend'),
        depths = [5000, 2500, 1500, 1000, 500, 100]

    return div;
    };

    legend.addTo(map);

});