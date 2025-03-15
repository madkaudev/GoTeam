// On-start settings
document.addEventListener("DOMContentLoaded", (event) => {
    // Disable the get-team button upon launch
    document.getElementById("get-team").setAttribute("disabled", "true");
  });

// Global variables that represent the user's coordinates
var latitude = null;
var longitude = null;

// Modify location-output div with coordinates
function displayCoordinates(latitude, longitude) {
    const divLocation = document.getElementById("location-output");
    divLocation.textContent = `Latitude: ${latitude}, Longitude: ${longitude}`;
}
// Call displayCoordinates(...) and update latitude + longitude.
// Additionally, enable the get-team button.
function success(position) {
    console.log("getCurrentPosition() was successful.")
    displayCoordinates(position.coords.latitude, position.coords.longitude);
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;
    console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
    // Enable button
    document.getElementById("get-team").removeAttribute("disabled");
}
// Just write to console the error code and message if the browser can't get the user's position
function error(err) {
    console.warn(`(ERROR ${err.code}): ${err.message}`);
    const divLocation = document.getElementById("location-output");
    divLocation.textContent = `(Couldn't update) Latitude: ${latitude}, Longitude: ${longitude}`;
}

// Don't try to pull from cache, spend 10s on getting location, and get a low accurate location
// for purposes of saving time. Being in the right town is good enough.
const options = {
    maximumAge: 0,
    timeout: 10000,
    enableHighAccuracy: false,
};
// On press of button, append page with user's coordinates and update longitude + latitude variables.
document.getElementById("get-location").addEventListener("click", () => {
    console.log("Get-location button pressed.");
    navigator.geolocation.getCurrentPosition(success, error, options);
});
