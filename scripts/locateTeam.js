// Function that computes distance between two geographical coordinates using the Haversine formula.
function getHaversineDistance(lat1, long1, lat2, long2) {
    // Convert coordinates to radians
    const GetRadians = (degrees) => degrees * Math.PI / 180;
    lat1 = GetRadians(lat1);
    long1 = GetRadians(long1);
    lat2 = GetRadians(lat2);
    long2 = GetRadians(long2);

    const HaversineTheta = Math.sin((lat2-lat1)/2)**2 + Math.cos(lat1) * Math.cos(lat2) 
        * Math.sin((long2-long1)/2)**2;
    // Volumetric mean radius
    const Radius = 6371;
    // Actual distance in kilometers
    const Distance = Radius*2*Math.asin(Math.sqrt(HaversineTheta));
    return Distance;
}
// Loop through all of the teams to find the closest team(s) and shortest distance(s).
function findClosestTeam(teams, latitude, longitude) {
    closestTeam = new Map();
    closestDistance = Number.MAX_VALUE;
    for (let team of teams) {
        let teamDistance = getHaversineDistance(latitude, longitude, team.latitude, team.longitude);
        // Create a key based on coordinates
        let key = team.latitude.toString() + "," + team.longitude.toString();
        // Reset and add new team to map if the distance is closer than the previous closest distance
        if (teamDistance < closestDistance) {
            // Set new closest distance
            closestDistance = teamDistance;
            // Clear map
            closestTeam = new Map();
            // Add new closest team to map
            closestTeam.set(key, [team]);
            
        }
        // If there is another team with equal-ish distance, add it to the map
        else if (Math.abs(teamDistance-closestDistance) < 0.01) {
            // Update closest team to map
            if (closestTeam.has(key) === false) {
                closestTeam.set(key, [team])
            }
            // If another team shares the stadium, add it to the the coordinates value array
            else {
                let teamArray = closestTeam.get(key);
                teamArray.push(team);
                closestTeam.set(key, teamArray);
            }
        }
    }
}
// Add a marker for the nearest team.
function addTeamToMap() {
    if (isTeamOnMap === false) {
        for (let [key, value] of closestTeam.entries()) {
            let popupText = "";
            for (let i = 0; i < value.length; i++) {
                // Formatting for multiple team names
                if (i < value.length - 1) {
                    popupText += value[i].name + "<br>";
                }
                else {
                     popupText += value[i].name;
                }
            }
            // Mark the team and its distance from user.
            let teamMarker = L.marker([value[0].latitude, value[0].longitude]).addTo(map);
            teamMarker.bindPopup(`${popupText}<br>${closestDistance.toFixed(2)} km`,
                { autoClose: false, closeOnClick: false }).openPopup();
            // Add to markers array
            markers.push(teamMarker);
            // Create a line between the user and the team
            let userToTeam = L.polygon([
                [value[0].latitude, value[0].longitude],
                [latitude, longitude]
            ]).addTo(map);
        }
        // Set boolean to true so more markers don't get added
        isTeamOnMap = true;
    }
    // Center the view around the user and team(s)
    const MarkerGroup = L.featureGroup(markers);
    map.fitBounds(MarkerGroup.getBounds(), { padding: [20, 20] });
}

// When get-team button is pressed, the closest team will be found and update the document.
document.getElementById("get-team").addEventListener("click", () => {
    console.log("Get-team button pressed.");
    if (latitude !== null && longitude !== null) {
        findClosestTeam(Teams[currentLeague], latitude, longitude);
        addTeamToMap();
        console.log("Get-team was sucessful!");
    } else {
        console.log("Coordinates are not available yet.");
    }
});
