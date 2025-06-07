// Map that holds 
const Teams = {
    // Array of objects that represent MLB teams and their stadiums
    MLB: [
        {
            name: "Arizona Diamondbacks", stadium: "Chase Field",
            city: "Phoenix, Arizona", latitude: 33.445278, longitude: -112.066944
        },
        {
            name: "Athletics", stadium: "Sutter Health Park",
            city: "West Sacramento, California", latitude: 38.580372, longitude: -121.5138
        },
        {
            name: "Atlanta Braves", stadium: "Truist Park",
            city: "Cumberland, Georgia", latitude: 33.89, longitude: -84.468
        },
        {
            name: "Baltimore Orioles", stadium: "Oriole Park at Camden Yards",
            city: "Baltimore, Maryland", latitude: 39.283889, longitude: -76.621667
        },
        {
            name: "Boston Red Sox", stadium: "Fenway Park",
            city: "Boston, Massachusetts", latitude: 42.34625, longitude: -71.09775
        },
        // So lucky to have two baseball teams.
        {
            name: "Chicago Cubs", stadium: "Wrigley Field",
            city: "Chicago, Illinois", latitude: 41.948056, longitude: -87.655556
        },
        {
            name: "Chicago White Sox", stadium: "Rate Field",
            city: "Chicago, Illinois", latitude: 41.83, longitude: -87.633889
        },
        {
            name: "Cincinnati Reds", stadium: "Great American Ball Park",
            city: "Cincinnati, Ohio", latitude: 39.0975, longitude: -84.506667
        },
        {
            name: "Cleveland Guardians", stadium: "Progressive Field",
            city: "Cleveland, Ohio", latitude: 41.495833, longitude: -81.685278
        },
        {
            name: "Colorado Rockies", stadium: "Coors Field",
            city: "Denver, Colorado", latitude: 39.756111, longitude: -104.994167
        },
        {
            name: "Detroit Tigers", stadium: "Comerica Park",
            city: "Detroit, Michigan", latitude: 42.339167, longitude: -83.048611
        },
        {
            name: "Houston Astros", stadium: "Daikin Park",
            city: "Houston, Texas", latitude: 29.756944, longitude: -95.355556
        },
        {
            name: "Kansas City Royals", stadium: "Kauffman Stadium",
            city: "Kansas City, Missouri", latitude: 39.051389, longitude: -94.480556
        },
        {
            name: "Los Angeles Angels", stadium: "Angel Stadium",
            city: "Anaheim, California", latitude: 33.800278, longitude: -117.882778
        },
        {
            name: "Los Angeles Dodgers", stadium: "Dodger Stadium",
            city: "Los Angeles, California", latitude: 34.073611, longitude: -118.24
        },
        {
            name: "Miami Marlins", stadium: "LoanDepot Park",
            city: "Miami, Florida", latitude: 25.778056, longitude: -80.219722
        },
        {
            name: "Milwaukee Brewers", stadium: "American Family Field",
            city: "Milwaukee, Wisconsin", latitude: 43.028333, longitude: -87.971111
        },
        {
            name: "Minnesota Twins", stadium: "Target Field",
            city: "Minneapolis, Minnesota", latitude: 44.981667, longitude: -93.278333
        },
        {
            name: "New York Mets", stadium: "Citi Field",
            city: "Queens, New York", latitude: 40.756944, longitude: -73.845833
        },
        {
            name: "New York Yankees", stadium: "Yankee Stadium",
            city: "The Bronx, New York", latitude: 40.829167, longitude: -73.926389
        },
        {
            name: "Philadelphia Phillies", stadium: "Citizens Bank Park",
            city: "Philadelphia, Pennsylvania", latitude: 39.905833, longitude: -75.166389
        },
        {
            name: "Pittsburgh Pirates", stadium: "PNC Park",
            city: "Pittsburgh, Pennsylvania", latitude: 40.446944, longitude: -80.005833
        },
        {
            name: "San Diego Padres", stadium: "Petco Park",
            city: "San Diego, California", latitude: 32.7073, longitude: -117.1566
        },
        {
            name: "San Francisco Giants", stadium: "Oracle Park",
            city: "San Francisco, California", latitude: 37.778611, longitude: -122.389167
        },
        {
            name: "Seattle Mariners", stadium: "T-Mobile Park",
            city: "Seattle, Washington", latitude: 47.591, longitude: -122.333
        },
        {
            name: "St. Louis Cardinals", stadium: "Busch Stadium",
            city: "St. Louis, Missouri", latitude: 38.6225, longitude: -90.193056
        },
        {
            name: "Tampa Bay Rays", stadium: "George M. Steinbrenner Field",
            city: "Tampa, Florida", latitude: 27.980278, longitude: -82.506667
        },
        {
            name: "Texas Rangers", stadium: "Globe Life Field",
            city: "Arlington, Texas", latitude: 32.747361, longitude: -97.084167
        },
        {
            name: "Toronto Blue Jays", stadium: "Rogers Centre",
            city: "Toronto, Ontario, Canada", latitude: 43.641389, longitude: -79.389167
        },
        {
            name: "Washington Nationals", stadium: "Nationals Park",
            city: "Washington, D.C.", latitude: 38.872778, longitude: -77.0075
        }
    ],
    // Array of objects that represent MLS teams and their stadiums
    MLS: [
        {
            name: "Atlanta United FC", stadium: "Mercedes-Benz Stadium",
            city: "Atlanta, Georgia", latitude: 33.755556, longitude: -84.4
        },
        {
            name: "Austin FC", stadium: "Q2 Stadium",
            city: "Austin, Texas", latitude: 30.3877, longitude: -97.7195
        },
        {
            name: "CF Montréal", stadium: "Saputo Stadium",
            city: "Montréal, Quebec", latitude: 45.563056, longitude: -73.5525
        },
        {
            name: "Charlotte FC", stadium: "Bank of America Stadium",
            city: "Charlotte, North Carolina", latitude: 35.225833, longitude: -80.852778
        },
        // First MLS game I ever went to.
        {
            name: "Chicago Fire", stadium: "Soldier Field",
            city: "Chicago, Illinois", latitude: 41.8623, longitude: -87.6167
        },
        {
            name: "Colorado Rapids", stadium: "Dick's Sporting Goods Park",
            city: "Commerce City, Colorado", latitude: 39.805556, longitude: -104.891944
        },
        // Crew gave me a free PS5 so I am forever loyal to them XOXO
        {
            name: "Columbus Crew", stadium: "Lower.com Field",
            city: "Columbus, Ohio", latitude: 39.968461, longitude: -83.017089
        },
        {
            name: "D.C. United", stadium: "Audi Field",
            city: "Washington, D.C.", latitude: 38.868411, longitude: -77.012869
        },
        {
            name: "FC Cincinnati", stadium: "TQL Stadium",
            city: "Cincinnati, Ohio", latitude: 39.111389, longitude: -84.522222
        },
        {
            name: "FC Dallas", stadium: "Toyota Stadium",
            city: "Frisco, Texas", latitude: 33.154444, longitude: -96.835278
        },
        {
            name: "Houston Dynamo FC", stadium: "Shell Energy Stadium",
            city: "Houston, Texas", latitude: 29.7522, longitude: -95.3524
        },
        {
            name: "Inter Miami CF", stadium: "Chase Stadium",
            city: "Fort Lauderdale, Florida", latitude: 26.193278, longitude: -80.160667
        },
        {
            name: "Los Angeles FC", stadium: "BMO Stadium",
            city: "Los Angeles, California", latitude: 34.012778, longitude: -118.284083
        },
        {
            name: "Los Angeles Galaxy", stadium: "Dignity Health Sports Park",
            city: "Carson, California", latitude: 33.864, longitude: -118.261
        },
        {
            name: "Minnesota United FC", stadium: "Allianz Field",
            city: "Saint Paul, Minnesota", latitude: 44.953111, longitude: -93.164722
        },
        {
            name: "Nashville SC", stadium: "Geodis Field",
            city: "Nashville, Tennessee", latitude: 36.130083, longitude: -86.766
        },
        {
            name: "New England Revolution", stadium: "Gillette Stadium",
            city: "Foxborough, Massachusetts", latitude: 42.091, longitude: -71.264
        },
        {
            name: "New York City FC", stadium: "Yankee Stadium",
            city: "The Bronx, New York", latitude: 40.829167, longitude: -73.926389
        },
        {
            name: "New York Red Bulls", stadium: "Sports Illustrated Statdium",
            city: "Harrison, New Jersey", latitude: 40.736667, longitude: -74.150278
        },
        {
            name: "Orlando City SC", stadium: "Inter&Co Stadium",
            city: "Orlando, Florida", latitude: 28.5411, longitude: -81.3893
        },
        {
            name: "Philadelphia Union", stadium: "Subaru Park",
            city: "Chester, Pennsylvania", latitude: 39.832222, longitude: -75.378889
        },
        {
            name: "Portland Timbers", stadium: "Providence Park",
            city: "Portland, Oregon", latitude: 45.521389, longitude: -122.691667
        },
        {
            name: "Real Salt Lake", stadium: "America First Field",
            city: "Sandy, Utah", latitude: 40.5829, longitude: -111.8934
        },
        {
            name: "San Diego FC", stadium: "Snapdragon Stadium",
            city: "San Diego, California", latitude: 32.784444, longitude: -117.122833
        },
        {
            name: "Seattle Sounders FC", stadium: "Lumen Field",
            city: "Seattle, Washington", latitude: 47.5952, longitude: -122.3316 
        },
        {
            name: "Sporting Kansas City", stadium: "Children's Mercy Park",
            city: "Kansas City, Kansas", latitude: 39.12174, longitude: -94.82318 
        },
        {
            name: "St. Louis City SC", stadium: "Energizer Park",
            city: "St. Louis, Missouri", latitude: 38.631389, longitude: -90.210278 
        },
        {
            name: "Toronto FC", stadium: "BMO Field",
            city: "Toronto, Ontario, Canada", latitude: 43.633222, longitude: -79.418583 
        },
        {
            name: "Vancouver Whitecaps FC", stadium: "BC Place",
            city: "Vancouver, British Columbia, Canada", latitude: 49.276667, longitude: -123.111944 
        }
    ],
    // Array of objects that represent NBA teams and their stadiums
    NBA: [
        {
            name: "Atlanta Hawks", stadium: "State Farm Arena",
            city: "Atlanta, Georgia", latitude: 33.757222, longitude: -84.396389
        },
        {
            name: "Boston Celtics", stadium: "TD Garden",
            city: "Boston, Massachusetts", latitude: 42.366303, longitude: -71.062228
        },
        {
            name: "Brooklyn Nets", stadium: "Barclays Center",
            city: "Brooklyn, New York", latitude: 40.682661, longitude: -73.975225
        },
        {
            name: "Charlotte Hornets", stadium: "Spectrum Center",
            city: "Charlotte, North Carolina", latitude: 35.225, longitude: -80.839167
        },
        // Go Bulls baby!
        {
            name: "Chicago Bulls", stadium: "United Center",
            city: "Chicago, Illinois", latitude: 41.880556, longitude: -87.674167
        },
        {
            name: "Cleveland Cavaliers", stadium: "Rocket Arena",
            city: "Cleveland, Ohio", latitude: 41.496389, longitude: -81.688056
        },
        {
            name: "Dallas Mavericks", stadium: "American Airlines Center",
            city: "Dallas, Texas", latitude: 32.790556, longitude: -96.810278
        },
        {
            name: "Denver Nuggets", stadium: "Ball Arena",
            city: "Denver, Colorado", latitude: 39.748611, longitude: -105.0075
        },
        {
            name: "Detroit Pistons", stadium: "Little Caesars Arena",
            city: "Detroit, Michigan", latitude: 42.341111, longitude: -83.055
        },
        {
            name: "Golden State Warriors", stadium: "Chase Center",
            city: "San Francisco, California", latitude: 37.768056, longitude: -122.3875
        },
        {
            name: "Houston Rockets", stadium: "Toyota Center",
            city: "Houston, Texas", latitude: 29.750833, longitude: -95.362222 
        },
        {
            name: "Indiana Pacers", stadium: "Gainbridge Fieldhouse",
            city: "Indianapolis, Indiana", latitude: 39.763889, longitude: -86.155556 
        },
        {
            name: "Los Angeles Clippers", stadium: "Intuit Dome",
            city: "Inglewood, California", latitude: 33.9451, longitude: -118.3431 
        },
        {
            name: "Los Angeles Lakers", stadium: "Crypto.com Arena",
            city: "Los Angeles, California", latitude: 34.043056, longitude: -118.267222 
        },
        {
            name: "Memphis Grizzlies", stadium: "FedEx Forum",
            city: "Memphis, Tennessee", latitude: 35.138333, longitude: -90.050556
        },
        {
            name: "Miami Heat", stadium: "Kaseya Center",
            city: "Miami, Florida", latitude: 25.781389, longitude: -80.188056
        },
        {
            name: "Milwaukee Bucks", stadium: "Fiserv Forum",
            city: "Milwaukee, Wisconsin", latitude: 43.045028, longitude: -87.918167
        },
        {
            name: "Minnesota Timberwolves", stadium: "Target Center",
            city: "Minneapolis, Minnesota", latitude: 44.979444, longitude: -93.276111
        },
        {
            name: "New Orleans Pelicans", stadium: "Smoothie King Center",
            city: "New Orleans, Louisiana", latitude: 29.948889, longitude: -90.081944
        },
        {
            name: "New York Knicks", stadium: "Madison Square Garden",
            city: "Manhattan, New York", latitude: 40.750556, longitude: -73.993611
        },
        {
            name: "Oklahoma City Thunder", stadium: "Paycom Center",
            city: "Oklahoma City, Oklahoma", latitude: 35.463333, longitude: -97.515
        },
        {
            name: "Orlando Magic", stadium: "Kia Center",
            city: "Orlando, Florida", latitude: 28.539167, longitude: -81.383611
        },
        {
            name: "Philadelphia 76ers", stadium: "Wells Fargo Center",
            city: "Philadelphia, Pennsylvania", latitude: 39.901111, longitude: -75.171944
        },
        {
            name: "Phoenix Suns", stadium: "PHX Arena",
            city: "Phoenix, Arizona", latitude: 33.445833, longitude: -112.071389
        },
        {
            name: "Portland Trail Blazers", stadium: "Moda Center",
            city: "Portland, Oregon", latitude: 45.531667, longitude: -122.666667
        },
        {
            name: "Sacramento Kings", stadium: "Golden 1 Center",
            city: "Sacramento, California", latitude: 38.580361, longitude: -121.499611
        },
        {
            name: "San Antonio Spurs", stadium: "Frost Bank Center",
            city: "San Antonio, Texas", latitude: 29.426944, longitude: -98.4375
        },
        {
            name: "Toronto Raptors", stadium: "Scotiabank Arena",
            city: "Toronto, Ontario, Canada", latitude: 43.643333, longitude: -79.379167
        },
        {
            name: "Utah Jazz", stadium: "Delta Center",
            city: "Salt Lake City, Utah", latitude: 40.768333, longitude: -111.901111
        },
        {
            name: "Washington Wizards", stadium: "Capital One Arena",
            city: "Washington, D.C.", latitude: 38.898056, longitude: -77.020833
        }
    ],
    // Array of objects that represent NFL teams and their stadiums
    NFL: [
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
            name: "New Orleans Saints", stadium: "Caesars Superdome",
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
    ],
    // Array of objects that represent NHL teams and their stadiums
    NHL: [
        {
            name: "Anaheim Ducks", stadium: "Honda Center",
            city: "Anaheim, California", latitude: 33.807778, longitude: -117.876667
        },
        {
            name: "Boston Bruins", stadium: "TD Garden",
            city: "Boston, Massachusetts", latitude: 42.366303, longitude: -71.062228
        },
        {
            name: "Buffalo Sabres", stadium: "KeyBank Center",
            city: "Buffalo, New York", latitude: 42.875, longitude: -78.876389
        },
        {
            name: "Calgary Flames", stadium: "ScotiaBank Saddledome",
            city: "Calgary, Alberta, Canada", latitude: 51.0375, longitude: -114.051944
        },
        {
            name: "Carolina Hurricanes", stadium: "Lenovo Center",
            city: "Raleigh, North Carolina", latitude: 35.803333, longitude: -78.721944
        },
        {
            name: "Chicago Blackhawks", stadium: "United Center",
            city: "Chicago, Illinois", latitude: 41.880556, longitude: -87.674167
        },
        {
            name: "Colorado Avalanche", stadium: "Ball Arena",
            city: "Denver, Colorado", latitude: 39.748611, longitude: -105.0075
        },
        {
            name: "Columbus Blue Jackets", stadium: "Nationwide Arena",
            city: "Columbus, Ohio", latitude: 39.969283, longitude: -83.006111
        },
        {
            name: "Dallas Stars", stadium: "American Airlines Center",
            city: "Dallas, Texas", latitude: 32.790556, longitude: -96.810278
        },
        {
            name: "Detroit Red Wings", stadium: "Little Caesars Arena",
            city: "Detroit, Michigan", latitude: 42.341111, longitude: -83.055
        },
        {
            name: "Edmonton Oilers", stadium: "Rogers Place",
            city: "Edmonton, Alberta, Canada", latitude: 53.546944, longitude: -113.497778
        },
        {
            name: "Florida Panthers", stadium: "Amerant Bank Arena",
            city: "Sunrise, Florida", latitude: 26.158333, longitude: -80.325556
        },
        {
            name: "Los Angeles Kings", stadium: "Crypto.com Arena",
            city: "Los Angeles, California", latitude: 34.043056, longitude: -118.267222
        },
        {
            name: "Minnesota Wild", stadium: "Xcel Energy Center",
            city: "Saint Paul, Minnesota", latitude: 44.944722, longitude: -93.101111
        },
        {
            name: "Montreal Canadiens", stadium: "Bell Centre",
            city: "Montreal, Quebec, Canada", latitude: 45.496111, longitude: -73.569444
        },
        {
            name: "Nashville Predators", stadium: "Bridgestone Arena",
            city: "Nashville, Tennessee", latitude: 36.159167, longitude: -86.778611
        },
        {
            name: "New Jersey Devils", stadium: "Prudential Center",
            city: "Newark, New Jersey", latitude: 40.733611, longitude: -74.171111
        },
        {
            name: "New York Islanders", stadium: "UBS Arena",
            city: "Elmont, New York", latitude: 40.71179, longitude: -73.72604
        },
        {
            name: "New York Rangers", stadium: "Madison Square Garden",
            city: "Manhattan, New York", latitude: 40.750556, longitude: -73.993611
        },
        {
            name: "Ottawa Senators", stadium: "Canadian Tire Centre",
            city: "Ottawa, Ontario, Canada", latitude: 45.296944, longitude: -75.927222
        },
        {
            name: "Philadelphia Flyers", stadium: "Wells Fargo Center",
            city: "Philadelphia, Pennsylvania", latitude: 39.952778, longitude: -75.163611
        },
        {
            name: "Pittsburgh Penguins", stadium: "PPG Paints Arena",
            city: "Pittsburgh, Pennsylvania", latitude: 40.439444, longitude: -79.989167
        },
        {
            name: "San Jose Sharks", stadium: "SAP Center",
            city: "San Jose, California", latitude: 37.332778, longitude: -121.901111
        },
        {
            name: "Seattle Kraken", stadium: "Climate Pledge Arena",
            city: "Seattle, Washington", latitude: 47.622, longitude: -122.354
        },
        {
            name: "St. Louis Blues", stadium: "Enterprise Center",
            city: "St. Louis, Missouri", latitude: 38.626667, longitude: -90.2025 
        },
        {
            name: "Tampa Bay Lightning", stadium: "Amalie Arena",
            city: "Tampa, Florida", latitude: 27.942778, longitude: -82.451944
        },
        {
            name: "Toronto Maple Leafs", stadium: "Scotiabank Arena",
            city: "Toronto, Ontario, Canada", latitude: 43.643333, longitude: -79.379167
        },
        {
            name: "Utah Mammoth", stadium: "Delta Center",
            city: "Salt Lake City, Utah", latitude: 40.768333, longitude: -111.901111
        },
        {
            name: "Vancouver Canucks", stadium: "Rogers Arena",
            city: "Vancouver, British Columbia, Canada", latitude: 49.277778, longitude: -123.108889
        },
        {
            name: "Vegas Golden Knights", stadium: "T-Mobile Arena",
            city: "Paradise, Nevada", latitude: 36.102778, longitude: -115.178333
        },
        {
            name: "Washington Capitals", stadium: "Capital One Arena",
            city: "Washington, D.C.", latitude: 38.898056, longitude: -77.020833
        },
        {
            name: "Winnipeg Jets", stadium: "Canada Life Centre",
            city: "Winnipeg, Manitoba, Canada", latitude: 49.892778, longitude: -97.143611
        }
    ],
    // Array of objects that represent NWSL teams and their stadiums
    NWSL: [
        {
            name: "Angel City FC", stadium: "BMO Stadium",
            city: "Los Angeles, California", latitude: 34.012778, longitude: -118.284083
        },
        {
            name: "Bay FC", stadium: "PayPal Park",
            city: "San Jose, California", latitude: 37.351389, longitude: -121.925
        },
        {
            name: "Chicago Stars FC", stadium: "SeatGeek Stadium",
            city: "Bridgeview, Illinois", latitude: 41.764722, longitude: -87.806111
        },
        {
            name: "Houston Dash", stadium: "Shell Energy Stadium",
            city: "Houston, Texas", latitude: 29.7522, longitude: -95.3524
        },
        {
            name: "Kansas City Current", stadium: "CPKC Stadium",
            city: "Kansas City, Missouri", latitude: 39.120333, longitude: -94.56625
        },
        {
            name: "NJ/NY Gotham FC", stadium: "Sports Illustrated Stadium",
            city: "Harrison, New Jersey", latitude: 40.736667, longitude: -74.150278
        },
        {
            name: "North Carolina Courage", stadium: "WakeMed Soccer Park",
            city: "Cary, North Carolina", latitude: 35.786164, longitude: -78.755106
        },
        {
            name: "Orlando Pride", stadium: "Inter&Co Stadium",
            city: "Orlando, Florida", latitude: 28.5411, longitude: -81.3893
        },
        {
            name: "Portland Thorns FC", stadium: "Providence Park",
            city: "Portland, Oregon", latitude: 45.521389, longitude: -122.691667
        },
        {
            name: "Racing Louisville FC", stadium: "Lynn Family Stadium",
            city: "Louisville, Kentucky", latitude: 38.259444, longitude: -85.731944
        },
        {
            name: "San Diego Wave FC", stadium: "Snapdragon Stadium",
            city: "San Diego, California", latitude: 32.784444, longitude: -117.122833
        },
        {
            name: "Seattle Reign FC", stadium: "Lumen Field",
            city: "Seattle, Washington", latitude: 47.5952, longitude: -122.3316
        },
        {
            name: "Utah Royals", stadium: "America First Field",
            city: "Sandy, Utah", latitude: 40.5829, longitude: -111.8934
        },
        {
            name: "Washington Spirit", stadium: "Audi Field",
            city: "Washington, D.C.", latitude: 38.868411, longitude: -77.012869
        }
    ],
    // Array of objects that represent WNBA teams and their stadiums
    WNBA: [
        {
            name: "Atlanta Dream", stadium: "Gateway Center Arena",
            city: "College Park, Georgia", latitude: 33.6468, longitude: -84.459616
        },
        {
            name: "Chicago Sky", stadium: "Wintrust Arena",
            city: "Chicago, Illinois", latitude: 41.853611, longitude: -87.621389
        },
        {
            name: "Connecticut Sun", stadium: "Mohegan Sun Arena",
            city: "Uncasville, Connecticut", latitude: 41.491111, longitude: -72.089722
        },
        {
            name: "Indiana Fever", stadium: "Gainbridge Fieldhouse",
            city: "Indianapolis, Indiana", latitude: 39.763889, longitude: -86.155556
        },
        {
            name: "New York Liberty", stadium: "Barclays Center",
            city: "Brooklyn, New York", latitude: 40.682661, longitude: -73.975225
        },
        {
            name: "Washington Mystics", stadium: "CareFirst Arena",
            city: "Washington, D.C.", latitude: 38.846972, longitude: -76.991444
        },
        {
            name: "Dallas Wings", stadium: "College Park Center",
            city: "Arlington, Texas", latitude: 32.730586, longitude: -97.107972
        },
        {
            name: "Golden State Valkyries", stadium: "Chase Center",
            city: "San Francisco, California", latitude: 37.768056, longitude: -122.3875
        },
        {
            name: "Las Vegas Aces", stadium: "Michelob Ultra Arena",
            city: "Paradise, Nevada", latitude: 36.090678, longitude: -115.178981
        },
        {
            name: "Los Angeles Sparks", stadium: "Crypto.com Arena",
            city: "Los Angeles, California", latitude: 34.043056, longitude: -118.267222
        },
        {
            name: "Minnesota Lynx", stadium: "Target Center",
            city: "Minneapolis, Minnesota", latitude: 44.979444, longitude: -93.276111
        },
        {
            name: "Phoenix Mercury", stadium: "PHX Arena",
            city: "Phoenix, Arizona", latitude: 33.445833, longitude: -112.071389
        },
        {
            name: "Seattle Storm", stadium: "Climate Pledge Arena",
            city: "Seattle, Washington", latitude: 47.622, longitude: -122.354
        }
    ]
};
