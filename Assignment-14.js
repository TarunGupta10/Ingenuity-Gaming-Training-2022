var cty = document.getElementById("cty")
const API_URL = "https://api.covid19api.com/summary";
async function getApiData(url) {
  console.log("You are Good to Go");
  var data = await fetch(url);
  var result = await data.json();
  // console.log(result);
  displayData(result);
}
getApiData(API_URL);
function displayData(serverData) {
  console.log(serverData);

  for (let i=1;i<190;i++) {
    let option = document.createElement("option");
    option.value = i
    option.innerHTML  = serverData.Countries[i].Country
    cty.appendChild(option);
  }

  function onChanges(){
    var value = cty.value
    var dt = document.getElementById("dt");
    var today = new Date(serverData.Countries[value].Date);
    var date1 =
      today.getDate() + "/" + (today.getMonth() + 1) + "/" + today.getFullYear();
    dt.innerText = "" + date1;
    document.getElementById("tc").innerText = "" + serverData.Countries[value].TotalConfirmed;
    document.getElementById("td").innerText = "" + serverData.Countries[value].TotalDeaths;
    document.getElementById("nc").innerText = "" + serverData.Countries[value].NewConfirmed;
    document.getElementById("nd").innerText = "" + serverData.Countries[value].NewDeaths;
  }
  cty.onchange = onChanges;
  onChanges();
  }


  
  
