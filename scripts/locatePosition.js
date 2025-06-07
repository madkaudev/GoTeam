// Update global coordinates and show them to user.
function updateCoordinates(posLat, posLong) {
    // Update the global coordinates
    latitude = posLat;
    longitude = posLong;
    // Write coordinates to console
    console.log(`Latitude: ${posLat}, Longitude: ${posLong}`);
}
// Update map with new coordinates. Reset all markers and items first.
function updateMap(zoom) {
    // Remove all markers and polygons from the map
    markers = [];
    map.eachLayer(function(layer) {
        if (layer instanceof L.Marker || layer instanceof L.Polygon) {
            map.removeLayer(layer);
        }
    });
    // Create a marker on the user's location
    var userMarker = L.marker([latitude, longitude]).addTo(map);
    userMarker.bindPopup(`Your location: <br> ${latitude}, ${longitude}`,
        { closeOnClick: false }).openPopup();
    markers.push(userMarker);
    // Focus map
    map.setView([latitude, longitude], zoom);
}
// Call updateCoordinates(...). Additionally, enable the get-team button and update the map.
function success(position) {
    console.log("getCurrentPosition() was successful.")
    // Set error count back to 0.
    getCurrentPositionErrorCount = 0;
    // Reset location-output div
    document.getElementById("location-output").textContent = "";
    updateCoordinates(position.coords.latitude, position.coords.longitude);
    // Enable buttons
    document.getElementById("get-location").removeAttribute("disabled");
    document.getElementById("get-team").removeAttribute("disabled");
    document.getElementById("league-select").removeAttribute("disabled");
    document.getElementById("reset-button").removeAttribute("disabled");
    // Update map with user's position
    updateMap(ZoomLevel);
    // Set boolean to false
    isTeamOnMap = false;
}

// Handle error by throwing warning to console and printing an error message on screen.
function error(err) {
    console.warn(`(ERROR ${err.code}): ${err.message}`);
    getCurrentPositionErrorCount += 1;
    const divLocation = document.getElementById("location-output");
    divLocation.textContent = `(Couldn't update position: ${getCurrentPositionErrorCount} time(s).)`;
    // Disable button
    document.getElementById("get-team").setAttribute("disabled", true);
    // Enable buttons
    document.getElementById("get-location").removeAttribute("disabled");
    document.getElementById("league-select").removeAttribute("disabled");
    document.getElementById("reset-button").removeAttribute("disabled");
}

// On press of button, append page with user's coordinates and update longitude + latitude variables.
document.getElementById("get-location").addEventListener("click", () => {
    console.log("Get-location button pressed.");
    // Disable buttons while Geolocation API works
    document.getElementById("get-location").setAttribute("disabled", true);
    document.getElementById("get-team").setAttribute("disabled", true);
    document.getElementById("league-select").setAttribute("disabled", true);
    document.getElementById("reset-button").setAttribute("disabled", true);
    // Obtain user's current position
    navigator.geolocation.getCurrentPosition(success, error, options);
});
