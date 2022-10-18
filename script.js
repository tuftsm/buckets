document.getElementById("playerSubmit").addEventListener("click", function(event) {
  event.preventDefault();
  const value = document.getElementById("playerInput").value;
  if (value === "")
    return;
  console.log(value);
  const url = "https://www.balldontlie.io/api/v1/players?search=" + value;
  fetch(url, {mode: 'cors'})
    .then(function(response) {
      return response.json();
    }).then(function(json) {	
      let results = "";
      results += '<h1><u>' + json.data[0].first_name + ' ' + json.data[0].last_name + '</u></h1>';
      results += '<h4>Height: ' + json.data[0].height_feet + '\' ' + json.data[0].height_inches +'\"</h2>';
      results += '<h4>Weight: ' + json.data[0].weight_pounds + ' lbs</h2>';
      results += '<h4>Position: ' + json.data[0].position + '</h2>';
      results += '<h4>Team: ' + json.data[0].team.full_name + '</h2>';
      results += "</p>";
      var playerId = json.data[0].id;
      // document.getElementById("playerResults").innerHTML = results;

  const url2 = "https://www.balldontlie.io/api/v1/season_averages?season=2021&player_ids[]=" + playerId;
  console.log(url2);
  fetch(url2, {mode: 'cors'})
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      results += '<h1> <u>2021 Season Averages</u> </h1>';
      results += '<h4>Points: ' + json.data[0].pts + '</h2>';
      results += '<h4>Rebounds: ' + json.data[0].reb + '</h2>';
      results += '<h4>Assists: ' + json.data[0].ast + '</h2>';
      results += '<h4>Field Goal %: ' + json.data[0].fg_pct + '</h2>';
      results += '<h4>Steals: ' + json.data[0].stl + '</h2>';
      results += '<h4>Blocks: ' + json.data[0].blk + '</h2>';
      document.getElementById("playerResults").innerHTML = results;
    });
});

});