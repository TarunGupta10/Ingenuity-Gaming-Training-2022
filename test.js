const API_URL = "https://api.covid19api.com/summary";
async function getApiData(url) {
  console.log("You are Good to Go");
  var data = await fetch(url);
  var result = await data.json();
  // console.log(result);
  displayData(result);
}
var i = 77;
getApiData(API_URL);
function displayData(serverData) {
  console.log(serverData);
  var cty = document.getElementById("cty");
  var dt = document.getElementById("dt");

  cty.innerText = "" + serverData.Countries[i].Country;
  var today = new Date(serverData.Countries[i].Date);
  var date1 =
    today.getDate() + "/" + (today.getMonth() + 1) + "/" + today.getFullYear();
  dt.innerText = "" + date1;
  document.getElementById("tc").innerText = "" + serverData.Countries[i].TotalConfirmed;
  document.getElementById("td").innerText = "" + serverData.Countries[i].TotalDeaths;
  document.getElementById("nc").innerText = "" + serverData.Countries[i].NewConfirmed;
  document.getElementById("nd").innerText = "" + serverData.Countries[i].NewDeaths;
}
