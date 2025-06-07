// The user's coordinates.
let latitude = null;
let longitude = null;
// The current league selection.
let currentLeague = "NFL";
// Represents whether or not the team marker is currently on the map.
let isTeamOnMap = false;
// Represent the closest team(s) to the user and the distance(s)
let closestTeam = new Map();
let closestDistance = Number.MAX_VALUE;
// Array that contains the user and team markers.
let markers = [];
// How many times the getCurrentPosition function fails in a row.
let getCurrentPositionErrorCount = 0;

// Map's zoom level.
const ZoomLevel = 12;
// Map's initial zoom level.
const InitZoom = 4;
// Center of mainland America.
const Center = [39.833333, -98.583333];

// On-start settings.
document.addEventListener("DOMContentLoaded", (event) => {
    // Disable the get-team button upon launch
    document.getElementById("get-team").setAttribute("disabled", "true");
    // Set NFL as initial selection
    document.getElementById("league-select").value = "NFL";
});

// When a different league is selected, update.
document.getElementById("league-select").addEventListener("change", () => {
    // Write to console the new league selected
    currentLeague = document.getElementById("league-select").value;
    console.log(currentLeague + " selected.");
    // Update header (h1) to reflect currently selected league
    document.querySelector("header > h1:first-of-type").textContent = 
    "Search for your nearest " + currentLeague + " team!";
    // Reset map when a new league is selected
    resetMap();
});

// Using high accuracy gives faster results for some reason. Something to do with GPS vs WiFi.
const options = {
    // Don't try to pull from cache, spend 7.5s on getting location, and get a highly accurate location
    maximumAge: 0,
    timeout: 7500,
    enableHighAccuracy: true,
};
