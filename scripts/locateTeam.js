// Array of objects that represent NFL teams and their stadiums
const nflTeams = [
    {
        name: "Arizona Cardinals", stadium: "State Farm Stadium",
        city: "Glendale, Arizona", latitude: 33.528, longitude: -112.263
    },
    {
        name: "Atlanta Falcons", stadium: "Mercedes-Benz Stadium",
        city: "Atlanta, Georgia", latitude: 33.755556, longitude: -84.4
    },
    {
        name: "Baltimore Ravens", stadium: "M&T Bank Stadium",
        city: "Baltimore, Maryland", latitude: 39.278056, longitude: -76.622778
    },
    {
        name: "Buffalo Bills", stadium: "Highmark Stadium",
        city: "Orchard Park, New York", latitude: 42.774, longitude: -78.787
    },
    {
        name: "Carolina Panthers", stadium: "Bank of America Stadium",
        city: "Charlotte, North Carolina", latitude: 35.225833, longitude: -80.852778
    },
    {
        // The best team!
        // Bear  |
        // Down  V
        name: "Chicago Bears", stadium: "Soldier Field",
        city: "Chicago, Illinois", latitude: 41.8623, longitude: -87.6167
    },
    {
        name: "Cincinnati Bengals", stadium: "Paycor Stadium",
        city: "Cincinnati, Ohio", latitude: 39.095, longitude: -84.516
    },
    {
        name: "Cleveland Browns", stadium: "Huntington Bank Field",
        city: "Cleveland, Ohio", latitude: 41.506111, longitude: -81.699444
    },
    {
        name: "Dallas Cowboys", stadium: "AT&T Stadium",
        city: "Arlington, Texas", latitude: 32.747778, longitude: -97.092778
    },
    {
        name: "Denver Broncos", stadium: "Empower Field at Mile High",
        city: "Denver, Colorado", latitude: 39.743889, longitude: -105.02
    },
    {
        name: "Detroit Lions", stadium: "Ford Field",
        city: "Detroit, Michigan", latitude: 42.34, longitude: -83.045556
    },
    {
        // Garbage team
        name: "Green Bay Packers", stadium: "Lambeau Field",
        city: "Green Bay, Wisconsin", latitude: 44.501389, longitude: -88.062222
    },
    {
        name: "Houston Texans", stadium: "NRG Stadium",
        city: "Houston, Texas", latitude: 29.684722, longitude: -95.410833
    },
    {
        name: "Indianapolis Colts", stadium: "Lucas Oil Stadium",
        city: "Indianapolis, Indiana", latitude: 39.760056, longitude: -86.163806
    },
    {
        name: "Jacksonville Jaguars", stadium: "EverBank Stadium",
        city: "Jacksonville, Florida", latitude: 30.323889, longitude: -81.6375
    },
    {
        name: "Kansas City Chiefs", stadium: "Arrowhead Stadium",
        city: "Kansas City, Missouri", latitude: 39.048889, longitude: -94.483889
    },
    {
        name: "Las Vegas Raiders", stadium: "Allegiant Stadium",
        city: "Paradise, Nevada", latitude: 36.090556, longitude: -115.183889
    },
    {
        name: "Los Angeles Chargers", stadium: "SoFi Stadium",
        city: "Inglewood, California", latitude: 33.953, longitude: -118.339
    },
    {
        name: "Los Angeles Rams", stadium: "SoFi Stadium",
        city: "Inglewood, California", latitude: 33.953, longitude: -118.339
    },
    {
        name: "Miami Dolphins", stadium: "Hard Rock Stadium",
        city: "Miami Gardens, Florida", latitude: 25.958056, longitude: -80.238889
    },
    {
        name: "Minnesota Vikings", stadium: "U.S. Bank Stadium",
        city: "Minneapolis, Minnesota", latitude: 44.974, longitude: -93.258
    },
    {
        name: "New England Patriots", stadium: "Gillette Stadium",
        city: "Foxborough, Massachusetts", latitude: 42.091, longitude: -71.264
    },
    {
        name: "New Orleans Saints", stadium: "Ceasars Superdome",
        city: "New Orleans, Louisiana", latitude: 29.950833, longitude: -90.081111
    },
    {
        name: "New York Giants", stadium: "MetLife Stadium",
        city: "East Rutherford, New Jersey", latitude: 40.813528, longitude: -74.074361
    },
    {
        name: "New York Jets", stadium: "MetLife Stadium",
        city: "East Rutherford, New Jersey", latitude: 40.813528, longitude: -74.074361
    },
    {
        name: "Philadelphia Eagles", stadium: "Lincoln Financial Field",
        city: "Philadelphia, Pennsylvania", latitude: 39.900833, longitude: -75.1675
    },
    {
        name: "Pittsburgh Steelers", stadium: "Acrisure Stadium",
        city: "Pittsburgh, Pennsylvania", latitude: 40.446667, longitude: -80.015833
    },
    {
        name: "San Francisco 49ers", stadium: "Levi's Stadium",
        city: "Santa Clara, California", latitude: 37.403, longitude: -121.97
    },
    {
        name: "Seattle Seahawks", stadium: "Lumen Field",
        city: "Seattle, Washington", latitude: 47.5952, longitude: -122.3316
    },
    {
        name: "Tampa Bay Buccaneers", stadium: "Raymond James Stadium",
        city: "Tampa, Florida", latitude: 27.975833, longitude: -82.503333
    },
    {
        name: "Tennessee Titans", stadium: "Nissan Stadium",
        city: "Nashville, Tennessee", latitude: 36.166389, longitude: -86.771389
    },
    {
        name: "Washington Commanders", stadium: "Northwest Stadium",
        city: "Landover, Maryland", latitude: 38.907778, longitude: -76.864444
    }
];

// Function that computes distance between two geographical coordinates using the Haversine formula
function getHaversineDistance(lat1, long1, lat2, long2) {
    // Convert coordinates to radians
    const getRadians = (degrees) => degrees * Math.PI / 180;
    lat1 = getRadians(lat1);
    long1 = getRadians(long1);
    lat2 = getRadians(lat2);
    long2 = getRadians(long2);

    const haversineTheta = Math.sin((lat2-lat1)/2)**2 + Math.cos(lat1) * Math.cos(lat2) * Math.sin((long2-long1)/2)**2;
    // Volumetric mean radius
    const radius = 6371;
    // Actual distance in kilometers
    const distance = radius*2*Math.asin(Math.sqrt(haversineTheta));
    return distance;
}
// Loop through all of the teams to find the closest team(s) and shortest distance(s)
let closestTeam = [];
let closestDistance = Number.MAX_VALUE;
function findClosestTeam(teams, latitude, longitude) {
    for (const team of teams) {
        let teamDistance = getHaversineDistance(latitude, longitude, team.latitude, team.longitude);
        if (teamDistance < closestDistance) {
            closestDistance = teamDistance;
            closestTeam = [team];
        }
        else if (Math.abs(teamDistance-closestDistance) < 0.001) {
            closestTeam.push(team);
        }
    }
}
function updateWithTeam() {
    const divTeam = document.getElementById("team-output");
    divTeam.textContent = `The closest team to you is the ${closestTeam[0].name}, who are 
    ${closestDistance.toFixed(2)} km away.`;
}

// When get-team button is pressed, the closest team will be found and update the document
document.getElementById("get-team").addEventListener("click", () => {
    console.log("Get-team button pressed.");
    if (latitude !== null && longitude !== null) {
        findClosestTeam(nflTeams, latitude, longitude);
        updateWithTeam();
    } else {
        console.log("Coordinates are not available yet.");
    }
});

