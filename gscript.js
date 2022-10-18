document.getElementById("gameSubmit").addEventListener("click", function(event) {
  event.preventDefault();
  const value = document.getElementById("gameInput").value;
  if (value === "")
    return;
  console.log(value);
  const url = "https://www.balldontlie.io/api/v1/games?start_date=" + value + "&end_date=" + value;
  console.log(url);
  fetch(url, {mode: 'cors'})
    .then(function(response) {
      return response.json();
    }).then(function(json) {
        console.log(json);
      let results = "";
      results += '<h1>Games Played on ' + value + '</h1>';
        for (let j=0; j<json.data.length; j++) {
            results += '<h2>' + json.data[j].visitor_team.full_name + " @ " + json.data[j].home_team.full_name + '<br>' + json.data[j].visitor_team_score + " -- " + json.data[j].home_team_score + '</h3>';
            }


      document.getElementById("gameResults").innerHTML = results;
    });
});