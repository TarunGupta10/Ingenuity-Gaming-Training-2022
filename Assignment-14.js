const API_URL = "https://api.covid19api.com/summary";

async function getApiData(url) {
  console.log("You are Good to Go");
  var data  = await fetch(url)
  var result = await data.json()
//   console.log(result);
displayData(result)
}

getApiData(API_URL);

function displayData(serverData) {
    console.log(serverData);
  for (var user in serverData) {
    let newtr = document.createElement("tr");

    let newtd1 = document.createElement("td");
    let newtd2 = document.createElement("td");
    let newtd3 = document.createElement("td");
    let newtd4 = document.createElement("td");
    let newtd5 = document.createElement("td");
    let newtd6 = document.createElement("td");

    newtd1.innerText = "Country Name : " + user.Country;
    newtd2.innerText = "Date : " + user.Date;
    newtd3.innerText = "Total cases" + user.TotalConfirmed;
    newtd4.innerText = "Total Deaths : " + user.TotalDeaths;
    newtd5.innerText = "New Cases : " + user.NewConfirmed;
    newtd6.innerText = "New Deaths : " + user.NewDeaths;
    // newtd1.innerText = `${user.id}`
    // newtd2.innerText = `${user.name}`
    // newtd3.innerText = `${user.email}`
    // newtd4.innerText = `${user.phone}`

    newtr.appendChild(newtd1);
    newtr.appendChild(newtd2);
    newtr.appendChild(newtd3);
    newtr.appendChild(newtd4);
    newtr.appendChild(newtd5);
    newtr.appendChild(newtd6);

    document.getElementById("myTable").appendChild(newtr);
  }
}
