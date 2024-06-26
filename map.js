// A function to determine the marker size based on the population
function markerSize(population) {
    return Math.sqrt(population) * 50;
  }
  
  // Define arrays to hold the created population, tourism, cases, deaths and mean age markers.
  let populationMarkers = [];
  let tourismMarkers = [];
  let caseMarkers = [];
  let deathMarkers = [];
  let ageMarkers = [];
  
  // Loop through locations, and create all the markers mentioned above
  for (let i = 0; i < locations.length; i++) {
    // Setting the marker radius for the state by passing population, tourism, case, deaths and age into the markerSize function
    populationMarkers.push(
      L.circle(locations[i].coordinates, {
        stroke: false,
        fillOpacity: 0.75,
        color: "purple",
        fillColor: "purple",
        radius: markerSize(locations[i].country.population)
      }).bindPopup(`<h1>${locations[i].country.name}</h1> <hr> Population: ${locations[i].country.population} `)
    );
    tourismMarkers.push(
        L.circle(locations[i].coordinates, {
          stroke: false,
          fillOpacity: 0.75,
          color: "blue",
          fillColor: "blue",
          radius: markerSize(locations[i].country.tourism)
        }).bindPopup(`<h1>${locations[i].country.name}</h1> <hr> Tourists: ${locations[i].country.tourism} `)
      );
    caseMarkers.push(
        L.circle(locations[i].coordinates, {
          stroke: false,
          fillOpacity: 0.75,
          color: "yellow",
          fillColor: "yellow",
          radius: markerSize(locations[i].country.cases)
        }).bindPopup(`<h1>${locations[i].country.name}</h1> <hr> Covid Cases: ${locations[i].country.cases} `)
      );
    deathMarkers.push(
        L.circle(locations[i].coordinates, {
          stroke: false,
          fillOpacity: 0.75,
          color: "red",
          fillColor: "red",
          radius: markerSize(locations[i].country.cases)
        }).bindPopup(`<h1>${locations[i].country.name}</h1> <hr> Covid Deaths: ${locations[i].country.deaths} `)
      );  
    ageMarkers.push(
        L.circle(locations[i].coordinates, {
          stroke: false,
          fillOpacity: 0.75,
          color: "green",
          fillColor: "green",
          radius: markerSize((locations[i].country.mean_age)*100000)
        }).bindPopup(`<h1>${locations[i].country.name}</h1> <hr> Mean Age: ${locations[i].country.mean_age} `)
      );    
  }
  
  // Create the base layers.
  let street = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  })
  
  let topo = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
  });
  
  // Create five separate layer groups 
  let population = L.layerGroup(populationMarkers);
  let tourists = L.layerGroup(tourismMarkers);
  let cases = L.layerGroup(caseMarkers);
  let death = L.layerGroup(deathMarkers);
  let meanage = L.layerGroup(ageMarkers);
 
  
  // Create a baseMaps object.
  let baseMaps = {
    "Street Map": street,
    "Topographic Map": topo
  };
  
  // Create an overlay object.
  let overlayMaps = {
    "Country Population": population,
    "Country tourism": tourists,
    "Country cases": cases,
    "Country deaths": death,
    "Country mean age (scaled 100000x more)": meanage
  };
  
  // Define a map object.
  let myMap = L.map("map", {
    center: [37.09, -95.71],
    zoom: 5,
    layers: [street, population, tourists, cases, death, meanage]
  });
  
  // Pass our map layers to our layer control.
  // Add the layer control to the map.
  L.control.layers(baseMaps, overlayMaps, {
    collapsed: false
  }).addTo(myMap);
  