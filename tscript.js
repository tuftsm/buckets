document.getElementById("teamSubmit").addEventListener("click", function(event) {
  event.preventDefault();
  const value = document.getElementById("teamInput").value;
  if (value === "")
    return;
  console.log(value);
  let id = "29";
    if (value === "Atlanta Hawks" || value === "Hawks" || value === "Atlanta")
     id = "01";
    if (value === "Boston Celtics" || value == "Boston" || value === "Celtics")
     id = "02";
    if (value === "Brooklyn Nets" || value == "Brooklyn" || value === "Nets")
     id = "03";
    if (value === "Charlotte Hornets" || value == "Charlotte" || value === "Hornets")
     id = "04";
    if (value === "Chicago Bulls" || value == "Chicago" || value === "Bulls")
     id = "05";
    if (value === "Cleveland Cavaliers" || value == "Cleveland" || value === "Cavaliers")
     id = "06";
    if (value === "Dallas Maveriks" || value == "Dallas" || value === "Maveriks")
     id = "07";
    if (value === "Denver Nuggets" || value == "Denver" || value === "Nuggets")
     id = "08";
    if (value === "Detroit Pistons" || value == "Detroit" || value === "Pistons")
     id = "09";
    if (value === "Golden State Warriors" || value == "Golden State" || value === "Warriors")
     id = "10";
    if (value === "Houston Rockets" || value == "Houston" || value === "Rockets")
     id = "11";
    if (value === "Indiana Pacers" || value == "Indiana" || value === "Pacers")
     id = "12";
    if (value === "Los Angeles Clippers" || value === "Clippers")
     id = "13";
    if (value === "Los Angeles Lakers" || value == "Los Angeles" || value === "Lakers")
     id = "14";
    if (value === "Memphis Grizzlies" || value == "Memphis" || value === "Grizzlies")
     id = "15";
    if (value === "Miami Heat" || value == "Miami" || value === "Heat")
     id = "16";
    if (value === "Milwaukee Bucks" || value == "Milwaukee" || value === "Bucks")
     id = "17";
    if (value === "Minnesota Timberwolves" || value == "Minnesota" || value === "Timberwolves")
     id = "18";
    if (value === "New Orleans Pelicans" || value == "New Orleans" || value === "Pelicans")
     id = "19";
    if (value === "New York Knicks" || value == "New York" || value === "Knicks")
     id = "20";
    if (value === "Oklahoma City Thunder" || value == "Oklahoma City" || value === "Thunder")
     id = "21";
    if (value === "Orlando Magic" || value == "Orlando" || value === "Magic")
     id = "22";
    if (value === "Philadelphia 76ers" || value == "Philadelphia" || value === "76ers")
     id = "23";
    if (value === "Phoenix Suns" || value == "Phoenix" || value === "Suns")
     id = "24";
    if (value === "Portland Trailblazers" || value == "Portland" || value === "Trailblazers")
     id = "25";
    if (value === "Sacramento Kings" || value == "Sacramento" || value === "Kings")
     id = "26";
    if (value === "San Antonio Spurs" || value == "San Antonio" || value === "Spurs")
     id = "27";
    if (value === "Toronto Raptors" || value == "Toronto" || value === "Raptors")
     id = "28";
    if (value === "Utah Jazz" || value == "Utah" || value === "Jazz")
     id = "29";
    if (value === "Washington Wizards" || value == "Washington" || value === "Wizards")
     id = "30";
  const url = "https://www.balldontlie.io/api/v1/teams/" + id;
  console.log(url);
  fetch(url, {mode: 'cors'})
    .then(function(response) {
      return response.json();
    }).then(function(json) {
        console.log(json);
      let results = "";
      results += '<h2>' + json.full_name + '</h2>';
      results += '<h2><u>Conference</u><br>' + json.conference + '</h2>';
      results += '<h2><u>Division</u><br>' + json.division + '</h2>';

      document.getElementById("teamResults").innerHTML = results;
    });
});