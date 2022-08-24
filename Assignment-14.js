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
  var tc = document.getElementById("tc");
  var td = document.getElementById("td");
  var nc = document.getElementById("nc");
  var nd = document.getElementById("nd");

  cty.innerText = "" + serverData.Countries[i].Country;
  var today = new Date(serverData.Countries[i].Date);
  var date1 =
    today.getDate() + "/" + (today.getMonth() + 1) + "/" + today.getFullYear();
  dt.innerText = "" + date1;
  tc.innerText = "" + serverData.Countries[i].TotalConfirmed;
  td.innerText = "" + serverData.Countries[i].TotalDeaths;
  nc.innerText = "" + serverData.Countries[i].NewConfirmed;
  nd.innerText = "" + serverData.Countries[i].NewDeaths;
}













// const API_URL = "https://api.covid19api.com/summary";
// var arr;
// async function getApiData(url) {
//   console.log("You are Good to Go");
//   var data = await fetch(url);
//   var result = await data.json();
//   arr = result["Countries"];
//   // console.log(result);
//   Covid(arr);
//   displayData(arr);
// }
// getApiData(API_URL);
// var cty = document.getElementById("cty");
// var dt = document.getElementById("dt");
// var tc = document.getElementById("tc");
// var td = document.getElementById("td");
// var nc = document.getElementById("nc");
// var nd = document.getElementById("nd");

// function Covid(result) {
//   for (var i = 0; i < result.length; i++) {
//     var x = document.createElement("option");
//     x.innerText = result[i].Country;
//     cty.appendChild(x);
//   }
// }

// function displayData(result) {
//   console.log(result);
//   for (var i = 0; i < result.length; i++) {
//     var cnty = document.getElementById("cty");
//     var text = cnty.options[cnty.selectedIndex].text;
//     if (result[i].Country == text) {
//     // cty.innerText = "" +  result[i].Country;
//     dt.innerText = "" + result[i].Date;
//     tc.innerText = "" + result[i].TotalConfirmed;
//     td.innerText = "" + result[i].TotalDeaths;
//     nc.innerText = "" + result[i].NewConfirmed;
//     nd.innerText = "" + result[i].NewDeaths;

//     // cty.innerText = "" +  serverData.Countries[2].Country;
//     // dt.innerText = "" + serverData.Countries[2].Date;
//     // tc.innerText = "" + serverData.Countries[2].TotalConfirmed;
//     // td.innerText = "" + serverData.Countries[2].TotalDeaths;
//     // nc.innerText = "" + serverData.Countries[2].NewConfirmed;
//     // nd.innerText = "" + serverData.Countries[2].NewDeaths;
//     }
//   }
// }
