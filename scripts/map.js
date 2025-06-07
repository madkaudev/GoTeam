// Initialize Leaflet.js map.
var map = L.map('map').setView(Center, InitZoom);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
// Marker for center of USA.
var centerMarker = L.marker(Center).addTo(map);
centerMarker.bindPopup("Hit \"Get your current location\" to get started.",
    { closeOnClick: false }).openPopup();
markers.push(centerMarker);

// Function to reset the map.
function resetMap() {
    // Remove all markers and polygons from the map
    map.eachLayer(function(layer) {
        if (layer instanceof L.Marker || layer instanceof L.Polygon) {
            map.removeLayer(layer);
        }
    });
    markers = [];
    setTimeout(() => {
        if (latitude !== null && longitude !== null) {
            // Create a marker at user's location
            var mapMarker = L.marker([latitude, longitude]).addTo(map);
            mapMarker.bindPopup(`Your location: <br> ${latitude}, ${longitude}`,
                { closeOnClick: false }).openPopup();
            markers.push(mapMarker);
            // Set view to position
            map.setView([latitude, longitude], ZoomLevel);
            // Enable get-team button
            document.getElementById("get-team").removeAttribute("disabled");
        }
        else {
            // Create a marker at user's location
            var resetMarker = L.marker(Center).addTo(map);
            resetMarker.bindPopup("Hit \"Get your current location\" to get started.",
                { closeOnClick: false }).openPopup();
            markers.push(resetMarker);
            // Set view to position
            map.setView(Center, InitZoom);
            // Disable get-team button
            document.getElementById("get-team").setAttribute("disabled", true);
        }
    }, 100);
    // Set error count back to 0.
    getCurrentPositionErrorCount = 0;
    // Reset location-output div
    document.getElementById("location-output").textContent = "";
    // Set boolean to false to represent that the team markers are not present
    isTeamOnMap = false;
}
// Create a button to reset map view.
const resetButton = L.control({ position: 'topright' });
resetButton.onAdd = function(map) {
    const button = L.DomUtil.create('button', 'reset-button');
    button.innerHTML = 'Reset Map';
    button.onclick = resetMap;
    button.id = "reset-button";
    return button;
};
resetButton.addTo(map);
